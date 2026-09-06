import type {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	IN8nHttpFullResponse,
	INodeExecutionData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, sleep } from 'n8n-workflow';

import { preparedRequestFor } from './request';

const METADATA_KEYS = ['search_metadata', 'search_parameters'];
const MAX_WAIT_MS = 30000;

function asObject(body: unknown): IDataObject {
	if (body && typeof body === 'object' && !Array.isArray(body)) return body as IDataObject;
	if (typeof body === 'string') {
		try {
			const parsed: unknown = JSON.parse(body);
			if (parsed && typeof parsed === 'object' && !Array.isArray(parsed))
				return parsed as IDataObject;
		} catch {
			return { raw: body };
		}
	}
	return {};
}

function header(response: IN8nHttpFullResponse, name: string): string {
	const value = response.headers[name];
	if (typeof value === 'string') return value;
	if (Array.isArray(value) && typeof value[0] === 'string') return value[0];
	return '';
}

function requestId(response: IN8nHttpFullResponse, body: IDataObject): string {
	const fromBody = body.request_id;
	if (typeof fromBody === 'string' && fromBody !== '') return fromBody;
	return header(response, 'x-request-id');
}

function isRetryable(response: IN8nHttpFullResponse, body: IDataObject): boolean {
	if (body.retryable === true) return true;
	if (body.retryable === false) return false;
	return response.statusCode === 429 || response.statusCode >= 500;
}

function retryWaitMs(response: IN8nHttpFullResponse, attempt: number): number {
	const retryAfter = header(response, 'retry-after').trim();
	if (retryAfter !== '') {
		const seconds = Number(retryAfter);
		if (Number.isFinite(seconds) && seconds >= 0) return Math.min(seconds * 1000, MAX_WAIT_MS);
		const at = Date.parse(retryAfter);
		if (!Number.isNaN(at)) return Math.min(Math.max(at - Date.now(), 0), MAX_WAIT_MS);
	}
	return Math.min(1000 * 2 ** attempt, MAX_WAIT_MS);
}

function metadataId(body: IDataObject): IDataObject | undefined {
	const metadata = body.search_metadata;
	if (metadata && typeof metadata === 'object' && 'id' in (metadata as IDataObject)) {
		return { id: (metadata as IDataObject).id };
	}
	return undefined;
}

function simplified(body: IDataObject): IDataObject {
	const result: IDataObject = {};
	const id = metadataId(body);
	if (id) result.search_metadata = id;
	for (const [key, value] of Object.entries(body)) {
		if (!METADATA_KEYS.includes(key)) result[key] = value;
	}
	return result;
}

function selected(body: IDataObject, fields: string[]): IDataObject {
	const result: IDataObject = {};
	const id = metadataId(body);
	if (id) result.search_metadata = id;
	for (const field of fields) {
		if (field in body) result[field] = body[field];
	}
	return result;
}

async function replay(
	context: IExecuteSingleFunctions,
	request: IHttpRequestOptions,
): Promise<IN8nHttpFullResponse> {
	const options: IHttpRequestOptions = {
		...request,
		returnFullResponse: true,
		ignoreHttpStatusErrors: true,
	};
	return (await context.helpers.httpRequestWithAuthentication.call(
		context,
		'litescrapeApi',
		options,
	)) as IN8nHttpFullResponse;
}

export async function shapeResponse(
	this: IExecuteSingleFunctions,
	_items: INodeExecutionData[],
	firstResponse: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
	const itemIndex = this.getItemIndex();
	const autoRetry = this.getNodeParameter('autoRetry', true) as boolean;
	const maxRetries = autoRetry ? (this.getNodeParameter('maxRetries', 2) as number) : 0;
	const request = preparedRequestFor(this);

	let response = firstResponse;
	let body = asObject(response.body);
	let attempt = 0;
	while (
		response.statusCode >= 400 &&
		attempt < maxRetries &&
		request !== undefined &&
		isRetryable(response, body)
	) {
		await sleep(retryWaitMs(response, attempt));
		attempt += 1;
		response = await replay(this, request);
		body = asObject(response.body);
	}

	if (response.statusCode >= 400) {
		const message =
			typeof body.error === 'string' && body.error !== ''
				? body.error
				: `Litescrape request failed with status ${response.statusCode}`;
		const code = typeof body.error_code === 'string' ? body.error_code : 'request_failed';
		const id = requestId(response, body);
		const details = [`Error code: ${code}`];
		if (id !== '') details.push(`Request ID: ${id}`);
		if (attempt > 0) details.push(`Gave up after ${attempt + 1} attempts`);
		if (isRetryable(response, body)) {
			details.push(
				'This error is retryable: raise Max Retries or enable Retry On Fail on the node.',
			);
		}
		throw new NodeApiError(this.getNode(), body as JsonObject, {
			message,
			description: details.join('. '),
			httpCode: String(response.statusCode),
			itemIndex,
		});
	}

	const simple = this.getNodeParameter('simple', false) as boolean;
	const output = this.getNodeParameter('output', 'raw') as string;
	const mode = simple ? 'simplified' : output;

	let json: IDataObject = body;
	if (mode === 'simplified') {
		json = simplified(body);
	} else if (mode === 'selected') {
		const fields = this.getNodeParameter('fields', []) as string[];
		json = selected(body, fields);
	}

	return [{ json, pairedItem: { item: itemIndex } }];
}

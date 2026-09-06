import type {
	IDataObject,
	IExecuteSingleFunctions,
	IN8nHttpFullResponse,
	INodeExecutionData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

const METADATA_KEYS = ['search_metadata', 'search_parameters'];

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

function requestId(response: IN8nHttpFullResponse, body: IDataObject): string {
	const fromBody = body.request_id;
	if (typeof fromBody === 'string' && fromBody !== '') return fromBody;
	const header = response.headers['x-request-id'];
	return typeof header === 'string' ? header : '';
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

export async function shapeResponse(
	this: IExecuteSingleFunctions,
	_items: INodeExecutionData[],
	response: IN8nHttpFullResponse,
): Promise<INodeExecutionData[]> {
	const itemIndex = this.getItemIndex();
	const body = asObject(response.body);

	if (response.statusCode >= 400) {
		const message =
			typeof body.error === 'string' && body.error !== ''
				? body.error
				: `Litescrape request failed with status ${response.statusCode}`;
		const code = typeof body.error_code === 'string' ? body.error_code : 'request_failed';
		const id = requestId(response, body);
		const retryable = body.retryable === true;
		const details = [`Error code: ${code}`];
		if (id !== '') details.push(`Request ID: ${id}`);
		if (retryable) details.push('This error is retryable: enable Retry On Fail on the node.');
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

import type { IDataObject, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';

import { OPERATIONS } from '../descriptions';
import { applyDerivedParameters, evaluateRules } from './rules';
import type { Query } from './types';

const REQUEST_TIMEOUT_MS = 120000;

function serialize(value: unknown, isFlag: boolean): string | undefined {
	if (value === undefined || value === null) return undefined;
	if (typeof value === 'boolean') {
		if (isFlag) return value ? '1' : '0';
		return value ? 'true' : 'false';
	}
	if (typeof value === 'number') return Number.isFinite(value) ? String(value) : undefined;
	const text = String(value).trim();
	return text === '' ? undefined : text;
}

export async function prepareRequest(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const operation = this.getNodeParameter('operation') as string;
	const spec = OPERATIONS[operation];
	if (!spec) {
		throw new NodeOperationError(this.getNode(), `Unsupported operation "${operation}"`, {
			itemIndex: this.getItemIndex(),
		});
	}

	const raw = (requestOptions.qs ?? {}) as IDataObject;
	const qs: Query = {};
	for (const [key, value] of Object.entries(raw)) {
		if (!spec.allowlist.includes(key)) continue;
		const serialized = serialize(value, spec.flags.includes(key));
		if (serialized !== undefined) qs[key] = serialized;
	}

	applyDerivedParameters(spec, qs);
	const problems = evaluateRules(spec, qs);
	if (problems.length > 0) {
		throw new NodeOperationError(this.getNode(), problems[0], {
			itemIndex: this.getItemIndex(),
			description: problems.join(' '),
		});
	}

	requestOptions.qs = qs;
	requestOptions.timeout = REQUEST_TIMEOUT_MS;
	requestOptions.ignoreHttpStatusErrors = true;
	return requestOptions;
}

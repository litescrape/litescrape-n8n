import type { OperationSpec, Query, Rule } from './types';

function label(spec: OperationSpec, param: string): string {
	return `'${spec.labels[param] ?? param}'`;
}

function list(spec: OperationSpec, params: string[], joiner: string): string {
	const names = params.map((p) => label(spec, p));
	if (names.length <= 2) return names.join(` ${joiner} `);
	return `${names.slice(0, -1).join(', ')}, ${joiner} ${names[names.length - 1]}`;
}

function present(qs: Query, param: string): boolean {
	return qs[param] !== undefined;
}

function truthy(qs: Query, param: string): boolean {
	const value = qs[param];
	return value !== undefined && value !== 'false' && value !== '0';
}

function integer(qs: Query, param: string): number | undefined {
	const value = qs[param];
	if (value === undefined) return undefined;
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : undefined;
}

function checkRule(spec: OperationSpec, qs: Query, rule: Rule): string | undefined {
	switch (rule.kind) {
		case 'requireAny': {
			if (!rule.params.some((p) => present(qs, p))) return `Set ${list(spec, rule.params, 'or')}.`;
			return undefined;
		}
		case 'exactlyOne': {
			const found = rule.params.filter((p) => present(qs, p));
			if (found.length !== 1) return `Set exactly one of ${list(spec, rule.params, 'or')}.`;
			return undefined;
		}
		case 'atMostOne': {
			const found = rule.params.filter((p) => present(qs, p));
			if (found.length > 1) return `${list(spec, found, 'and')} cannot be combined.`;
			return undefined;
		}
		case 'paired': {
			const [first, second] = rule.params;
			if (present(qs, first) !== present(qs, second)) {
				return `${label(spec, first)} and ${label(spec, second)} must be set together.`;
			}
			return undefined;
		}
		case 'requires': {
			if (present(qs, rule.param) && !rule.anyOf.some((p) => present(qs, p))) {
				return `${label(spec, rule.param)} requires ${list(spec, rule.anyOf, 'or')}.`;
			}
			return undefined;
		}
		case 'lte': {
			const low = integer(qs, rule.low);
			const high = integer(qs, rule.high);
			if (low !== undefined && high !== undefined && low > high) {
				return `${label(spec, rule.low)} cannot be higher than ${label(spec, rule.high)}.`;
			}
			return undefined;
		}
		case 'custom':
			return checkCustom(spec, qs, rule.id);
		default:
			return undefined;
	}
}

function checkCustom(spec: OperationSpec, qs: Query, id: string): string | undefined {
	switch (id) {
		case 'searchRadius': {
			const radius = integer(qs, 'radius');
			if (radius === undefined) return undefined;
			const device = qs.device ?? 'desktop';
			const max = device === 'desktop' ? 199 : 1000;
			if (radius < 1 || radius > max) {
				return `${label(spec, 'radius')} must be between 1 and ${max} for the ${device} device.`;
			}
			return undefined;
		}
		case 'shoppingRefinement': {
			const active: string[] = [];
			if (present(qs, 'min_price') || present(qs, 'max_price')) active.push('a price range');
			for (const flag of ['on_sale', 'free_shipping', 'small_business']) {
				if (truthy(qs, flag)) active.push(label(spec, flag));
			}
			if (active.length > 1)
				return `Use only one refinement at a time: ${active.join(', ')} were set.`;
			return undefined;
		}
		case 'reviewsCount': {
			const num = integer(qs, 'num');
			if (num === undefined) return undefined;
			const filtered =
				present(qs, 'topic_id') || present(qs, 'query') || present(qs, 'next_page_token');
			const max = filtered ? 20 : 100;
			if (num < 1 || num > max) {
				return filtered
					? `${label(spec, 'num')} must be between 1 and 20 when 'Topic ID', 'Search Text', or 'Next Page Token' is set.`
					: `${label(spec, 'num')} must be between 1 and 100.`;
			}
			return undefined;
		}
		case 'singleMuid': {
			const value = qs.muid ?? '';
			if (!/^\d{1,20}$/.test(value))
				return `${label(spec, 'muid')} must be exactly one numeric Apple Maps place ID.`;
			return undefined;
		}
		case 'muidBatch': {
			const ids = (qs.muid ?? '')
				.split(',')
				.map((v) => v.trim())
				.filter((v) => v !== '');
			if (ids.length < 1 || ids.length > 50 || ids.some((v) => !/^\d{1,20}$/.test(v))) {
				return `${label(spec, 'muid')} must hold 1 to 50 comma-separated numeric Apple Maps place IDs.`;
			}
			return undefined;
		}
		default:
			return undefined;
	}
}

export function applyDerivedParameters(spec: OperationSpec, qs: Query): void {
	if (
		spec.rules.some((r) => r.kind === 'custom' && r.id === 'placeSelector') &&
		present(qs, 'data')
	) {
		qs.type = 'place';
	}
	if (spec.rules.some((r) => r.kind === 'custom' && r.id === 'muidBatch') && present(qs, 'muid')) {
		qs.muid = qs.muid
			.split(',')
			.map((v) => v.trim())
			.filter((v) => v !== '')
			.join(',');
	}
}

export function evaluateRules(spec: OperationSpec, qs: Query): string[] {
	const messages: string[] = [];
	for (const rule of spec.rules) {
		const message = checkRule(spec, qs, rule);
		if (message) messages.push(message);
	}
	return messages;
}

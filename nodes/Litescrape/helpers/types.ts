export type Rule =
	| { kind: 'requireAny'; params: string[] }
	| { kind: 'exactlyOne'; params: string[] }
	| { kind: 'atMostOne'; params: string[] }
	| { kind: 'paired'; params: [string, string] }
	| { kind: 'requires'; param: string; anyOf: string[] }
	| { kind: 'lte'; low: string; high: string }
	| {
			kind: 'custom';
			id:
				| 'searchRadius'
				| 'shoppingRefinement'
				| 'reviewsCount'
				| 'singleMuid'
				| 'muidBatch'
				| 'placeSelector';
	  };

export interface OperationSpec {
	operation: string;
	path: string;
	allowlist: string[];
	flags: string[];
	labels: Record<string, string>;
	rules: Rule[];
	responseGroups: string[];
}

export type Query = Record<string, string>;

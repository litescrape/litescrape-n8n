// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const duckduckgoSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['duckduckgo'],
				operation: ['duckduckgoSearch'],
			},
		},
		placeholder: 'e.g. best espresso machines',
		description: 'Search text, up to 500 characters',
		routing: {
			send: {
				type: 'query',
				property: 'q',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['duckduckgo'],
				operation: ['duckduckgoSearch'],
			},
		},
		options: [
			{
				displayName: 'Date Filter',
				name: 'dateFilter',
				type: 'string',
				default: '',
				description: 'Date window d, w, m, y, or a YYYY-MM-DD..YYYY-MM-DD range',
				routing: {
					send: {
						type: 'query',
						property: 'df',
					},
				},
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'string',
				default: '',
				placeholder: 'e.g. us-en',
				description: 'DuckDuckGo region and language token, such as us-en',
				routing: {
					send: {
						type: 'query',
						property: 'kl',
					},
				},
			},
			{
				displayName: 'Result Count',
				name: 'resultCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 50,
				},
				default: 50,
				description:
					"Requested number of results from 1 through 50. Cannot be combined with 'Search Assist'.",
				routing: {
					send: {
						type: 'query',
						property: 'm',
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 10000,
				},
				default: 0,
				description: 'Result offset from 0 through 10,000',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
			},
			{
				displayName: 'Safe Search',
				name: 'safeSearch',
				type: 'options',
				options: [
					{
						name: 'Moderate',
						value: '-1',
					},
					{
						name: 'Off',
						value: '-2',
					},
					{
						name: 'Strict',
						value: '1',
					},
				],
				default: '-1',
				description: 'DuckDuckGo safe-search level',
				routing: {
					send: {
						type: 'query',
						property: 'safe',
					},
				},
			},
			{
				displayName: 'Search Assist',
				name: 'searchAssist',
				type: 'boolean',
				default: true,
				description:
					"Whether to enable DuckDuckGo query assistance. Cannot be combined with 'Result Count'.",
				routing: {
					send: {
						type: 'query',
						property: 'search_assist',
					},
				},
			},
		],
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'multiOptions',
		default: [],
		displayOptions: {
			show: {
				resource: ['duckduckgo'],
				operation: ['duckduckgoSearch'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Organic Results',
				value: 'organic_results',
			},
			{
				name: 'Search Metadata',
				value: 'search_metadata',
			},
			{
				name: 'Search Parameters',
				value: 'search_parameters',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const duckduckgoSearchSpec: OperationSpec = {
	operation: 'duckduckgoSearch',
	path: '/api/duckduckgo/search',
	allowlist: ['q', 'kl', 'search_assist', 'safe', 'df', 'start', 'm'],
	flags: [],
	labels: {
		q: 'Query',
		kl: 'Region',
		search_assist: 'Search Assist',
		safe: 'Safe Search',
		df: 'Date Filter',
		start: 'Result Offset',
		m: 'Result Count',
	},
	rules: [
		{
			kind: 'atMostOne',
			params: ['m', 'search_assist'],
		},
	],
	responseGroups: ['search_metadata', 'search_parameters', 'organic_results'],
};

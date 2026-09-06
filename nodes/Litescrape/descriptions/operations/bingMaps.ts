// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const bingMapsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['bing'],
				operation: ['bingMaps'],
			},
		},
		placeholder: 'e.g. coffee shops in Austin, TX',
		description: "Listing search query. Required unless 'Entity ID' is set in Options.",
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
				resource: ['bing'],
				operation: ['bingMaps'],
			},
		},
		options: [
			{
				displayName: 'Entity ID',
				name: 'entityId',
				type: 'string',
				default: '',
				description: 'Native Bing Maps entity ID that resolves one listing instead of searching',
				routing: {
					send: {
						type: 'query',
						property: 'place_id',
					},
				},
			},
			{
				displayName: 'Interface Language',
				name: 'interfaceLanguage',
				type: 'string',
				default: '',
				description: 'Bing Maps interface language, such as en-US',
				routing: {
					send: {
						type: 'query',
						property: 'setlang',
					},
				},
			},
			{
				displayName: 'Listing Count',
				name: 'listingCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 30,
				},
				default: 30,
				description: 'Number of listings from 1 through 30',
				routing: {
					send: {
						type: 'query',
						property: 'count',
					},
				},
			},
			{
				displayName: 'Listing Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 10000,
				},
				default: 0,
				description: 'Zero-based listing offset from 0 through 10,000',
				routing: {
					send: {
						type: 'query',
						property: 'first',
					},
				},
			},
			{
				displayName: 'Map Center',
				name: 'mapCenter',
				type: 'string',
				default: '',
				placeholder: 'e.g. 30.2672~-97.7431',
				description: 'Map center in latitude~longitude form',
				routing: {
					send: {
						type: 'query',
						property: 'cp',
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
				resource: ['bing'],
				operation: ['bingMaps'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Local Results',
				value: 'local_results',
			},
			{
				name: 'Place Results',
				value: 'place_results',
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

export const bingMapsSpec: OperationSpec = {
	operation: 'bingMaps',
	path: '/api/bing/maps',
	allowlist: ['q', 'place_id', 'cp', 'setlang', 'first', 'count'],
	flags: [],
	labels: {
		q: 'Query',
		place_id: 'Entity ID',
		cp: 'Map Center',
		setlang: 'Interface Language',
		first: 'Listing Offset',
		count: 'Listing Count',
	},
	rules: [
		{
			kind: 'requireAny',
			params: ['q', 'place_id'],
		},
	],
	responseGroups: ['search_metadata', 'search_parameters', 'local_results', 'place_results'],
};

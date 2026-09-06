// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const duckduckgoMapsFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['duckduckgo'],
				operation: ['duckduckgoMaps'],
			},
		},
		placeholder: 'e.g. coffee shops',
		description:
			"Place or category query, up to 500 characters. Set either 'Bounding Box' or both coordinates in Options.",
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
				operation: ['duckduckgoMaps'],
			},
		},
		options: [
			{
				displayName: 'Bounding Box',
				name: 'boundingBox',
				type: 'string',
				default: '',
				placeholder: 'e.g. 30.32,-97.80,30.20,-97.68',
				description:
					'Viewport rectangle as top,left,bottom,right. Cannot be combined with coordinates.',
				routing: {
					send: {
						type: 'query',
						property: 'bbox',
					},
				},
			},
			{
				displayName: 'Latitude',
				name: 'latitude',
				type: 'number',
				typeOptions: {
					minValue: -90,
					maxValue: 90,
					numberPrecision: 6,
				},
				default: 0,
				description:
					"Viewport center latitude. Requires 'Longitude' and cannot be combined with 'Bounding Box'.",
				routing: {
					send: {
						type: 'query',
						property: 'lat',
					},
				},
			},
			{
				displayName: 'Longitude',
				name: 'longitude',
				type: 'number',
				typeOptions: {
					minValue: -180,
					maxValue: 180,
					numberPrecision: 6,
				},
				default: 0,
				description:
					"Viewport center longitude. Requires 'Latitude' and cannot be combined with 'Bounding Box'.",
				routing: {
					send: {
						type: 'query',
						property: 'lon',
					},
				},
			},
			{
				displayName: 'Strict Bounds',
				name: 'strictBounds',
				type: 'boolean',
				default: true,
				description: 'Whether to exclude results outside the requested bounds',
				routing: {
					send: {
						type: 'query',
						property: 'strict_bbox',
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
				operation: ['duckduckgoMaps'],
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

export const duckduckgoMapsSpec: OperationSpec = {
	operation: 'duckduckgoMaps',
	path: '/api/duckduckgo/maps',
	allowlist: ['q', 'bbox', 'lat', 'lon', 'strict_bbox'],
	flags: [],
	labels: {
		q: 'Query',
		bbox: 'Bounding Box',
		lat: 'Latitude',
		lon: 'Longitude',
		strict_bbox: 'Strict Bounds',
	},
	rules: [
		{
			kind: 'paired',
			params: ['lat', 'lon'],
		},
		{
			kind: 'exactlyOne',
			params: ['bbox', 'lat'],
		},
	],
	responseGroups: ['search_metadata', 'search_parameters', 'local_results'],
};

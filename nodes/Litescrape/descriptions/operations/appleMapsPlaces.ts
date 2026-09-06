// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const appleMapsPlacesFields: INodeProperties[] = [
	{
		displayName: 'Place IDs',
		name: 'placeIds',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['appleMapsPlace'],
				operation: ['appleMapsPlaces'],
			},
		},
		placeholder: 'e.g. 4372355869446211302',
		description: 'One to fifty comma-separated Apple Maps place IDs, such as 4372355869446211302',
		routing: {
			send: {
				type: 'query',
				property: 'muid',
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
				resource: ['appleMapsPlace'],
				operation: ['appleMapsPlaces'],
			},
		},
		options: [
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'string',
				default: 'en-US',
				description: 'Apple Maps language and regional formatting, such as en-US, fr-FR, or ja-JP',
				routing: {
					send: {
						type: 'query',
						property: 'locale',
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
				resource: ['appleMapsPlace'],
				operation: ['appleMapsPlaces'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
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

export const appleMapsPlacesSpec: OperationSpec = {
	operation: 'appleMapsPlaces',
	path: '/api/apple/maps/places',
	allowlist: ['muid', 'locale'],
	flags: [],
	labels: {
		muid: 'Place IDs',
		locale: 'Locale',
	},
	rules: [
		{
			kind: 'custom',
			id: 'muidBatch',
		},
	],
	responseGroups: ['search_metadata', 'search_parameters', 'place_results'],
};

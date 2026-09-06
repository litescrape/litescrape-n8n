// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const tripadvisorSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
				operation: ['tripadvisorSearch'],
			},
		},
		placeholder: 'e.g. hotels in Lisbon',
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
				resource: ['tripadvisor'],
				operation: ['tripadvisorSearch'],
			},
		},
		options: [
			{
				displayName: 'Geography ID',
				name: 'geoId',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Positive Tripadvisor geography ID to search within',
				routing: {
					send: {
						type: 'query',
						property: 'geo_id',
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
				description: "Search-center latitude. Requires 'Longitude'.",
				routing: {
					send: {
						type: 'query',
						property: 'lat',
					},
				},
			},
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'string',
				default: 'en-US',
				description: 'Language or language-COUNTRY code, such as en-US',
				routing: {
					send: {
						type: 'query',
						property: 'locale',
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
				description: "Search-center longitude. Requires 'Latitude'.",
				routing: {
					send: {
						type: 'query',
						property: 'lon',
					},
				},
			},
			{
				displayName: 'Place Type',
				name: 'placeType',
				type: 'options',
				options: [
					{
						name: 'Accommodation',
						value: 'accommodation',
					},
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Attraction',
						value: 'attraction',
					},
					{
						name: 'Attraction Product',
						value: 'attraction_product',
					},
					{
						name: 'Eatery',
						value: 'eatery',
					},
					{
						name: 'Geography',
						value: 'geo',
					},
				],
				default: 'all',
				description: 'Result entity type',
				routing: {
					send: {
						type: 'query',
						property: 'place_type',
					},
				},
			},
			{
				displayName: 'Result Count',
				name: 'resultCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 30,
				},
				default: 30,
				description: 'Number of results from 1 through 30',
				routing: {
					send: {
						type: 'query',
						property: 'num',
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
				displayName: 'Tripadvisor Domain',
				name: 'tripadvisorDomain',
				type: 'string',
				default: 'www.tripadvisor.com',
				description:
					'Localized Tripadvisor hostname, such as www.tripadvisor.com or www.tripadvisor.co.uk',
				routing: {
					send: {
						type: 'query',
						property: 'tripadvisor_domain',
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
				resource: ['tripadvisor'],
				operation: ['tripadvisorSearch'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Map Previews',
				value: 'map_previews',
			},
			{
				name: 'Pagination',
				value: 'pagination',
			},
			{
				name: 'Search Information',
				value: 'search_information',
			},
			{
				name: 'Search Metadata',
				value: 'search_metadata',
			},
			{
				name: 'Search Parameters',
				value: 'search_parameters',
			},
			{
				name: 'Search Results',
				value: 'search_results',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const tripadvisorSearchSpec: OperationSpec = {
	operation: 'tripadvisorSearch',
	path: '/api/tripadvisor/search',
	allowlist: [
		'q',
		'tripadvisor_domain',
		'locale',
		'geo_id',
		'lat',
		'lon',
		'place_type',
		'start',
		'num',
	],
	flags: [],
	labels: {
		q: 'Query',
		tripadvisor_domain: 'Tripadvisor Domain',
		locale: 'Locale',
		geo_id: 'Geography ID',
		lat: 'Latitude',
		lon: 'Longitude',
		place_type: 'Place Type',
		start: 'Result Offset',
		num: 'Result Count',
	},
	rules: [
		{
			kind: 'paired',
			params: ['lat', 'lon'],
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'search_results',
		'map_previews',
		'pagination',
	],
};

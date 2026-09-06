// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const tripadvisorPlaceFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
				operation: ['tripadvisorPlace'],
			},
		},
		placeholder: 'e.g. 187147',
		description: 'Positive Tripadvisor place ID',
		routing: {
			send: {
				type: 'query',
				property: 'place_id',
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
				operation: ['tripadvisorPlace'],
			},
		},
		options: [
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: 'USD',
				description: 'Three-letter ISO currency code for price fields',
				routing: {
					send: {
						type: 'query',
						property: 'currency',
					},
				},
			},
			{
				displayName: 'Geography ID',
				name: 'geoId',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'Positive parent geography ID',
				routing: {
					send: {
						type: 'query',
						property: 'geo_id',
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
				operation: ['tripadvisorPlace'],
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

export const tripadvisorPlaceSpec: OperationSpec = {
	operation: 'tripadvisorPlace',
	path: '/api/tripadvisor/place',
	allowlist: ['place_id', 'tripadvisor_domain', 'locale', 'currency', 'geo_id'],
	flags: [],
	labels: {
		place_id: 'Place ID',
		tripadvisor_domain: 'Tripadvisor Domain',
		locale: 'Locale',
		currency: 'Currency',
		geo_id: 'Geography ID',
	},
	rules: [],
	responseGroups: ['search_metadata', 'search_parameters', 'place_results'],
};

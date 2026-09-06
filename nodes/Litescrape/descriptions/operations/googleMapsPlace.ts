// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleMapsPlaceFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsPlace'],
			},
		},
		placeholder: 'e.g. ChIJT2h1HKZZwokR0kgzEtsa03k',
		description:
			"Google place ID, such as ChIJT2h1HKZZwokR0kgzEtsa03k. Required unless 'Data CID' or 'Data Sequence' is set in Options.",
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
				resource: ['googleMapsPlace'],
				operation: ['googleMapsPlace'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				placeholder: 'e.g. us',
				description: 'Two-letter country code for regional localization, such as us or gb',
				routing: {
					send: {
						type: 'query',
						property: 'gl',
					},
				},
			},
			{
				displayName: 'Data CID',
				name: 'dataCid',
				type: 'string',
				default: '',
				description:
					"Decimal Google CID that resolves one exact place. Cannot be combined with 'Place ID' or 'Data Sequence'.",
				routing: {
					send: {
						type: 'query',
						property: 'data_cid',
					},
				},
			},
			{
				displayName: 'Data Sequence',
				name: 'dataSequence',
				type: 'string',
				default: '',
				description:
					"Google Maps exact-place protobuf parameter sequence, up to 8,192 characters. Cannot be combined with 'Place ID' or 'Data CID'.",
				routing: {
					send: {
						type: 'query',
						property: 'data',
					},
				},
			},
			{
				displayName: 'Google Domain',
				name: 'googleDomain',
				type: 'string',
				default: 'google.com',
				description: 'Google domain the request is served from, such as google.com or google.co.uk',
				routing: {
					send: {
						type: 'query',
						property: 'google_domain',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				placeholder: 'e.g. en',
				description: 'Language code for the interface and returned text, such as en, en-GB, or de',
				routing: {
					send: {
						type: 'query',
						property: 'hl',
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
				resource: ['googleMapsPlace'],
				operation: ['googleMapsPlace'],
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

export const googleMapsPlaceSpec: OperationSpec = {
	operation: 'googleMapsPlace',
	path: '/api/google/maps',
	allowlist: ['place_id', 'data_cid', 'data', 'google_domain', 'gl', 'hl'],
	flags: [],
	labels: {
		place_id: 'Place ID',
		data_cid: 'Data CID',
		data: 'Data Sequence',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
	},
	rules: [
		{
			kind: 'exactlyOne',
			params: ['place_id', 'data_cid', 'data'],
		},
		{
			kind: 'custom',
			id: 'placeSelector',
		},
	],
	responseGroups: ['search_metadata', 'search_parameters', 'place_results'],
};

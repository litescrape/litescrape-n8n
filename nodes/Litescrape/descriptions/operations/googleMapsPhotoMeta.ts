// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleMapsPhotoMetaFields: INodeProperties[] = [
	{
		displayName: 'Photo ID',
		name: 'photoId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsPhotoMeta'],
			},
		},
		description: "Google Maps photo ID from a place's photo metadata link",
		routing: {
			send: {
				type: 'query',
				property: 'data_id',
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
				operation: ['googleMapsPhotoMeta'],
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
				operation: ['googleMapsPhotoMeta'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Date',
				value: 'date',
			},
			{
				name: 'Location',
				value: 'location',
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
				name: 'User',
				value: 'user',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const googleMapsPhotoMetaSpec: OperationSpec = {
	operation: 'googleMapsPhotoMeta',
	path: '/api/google/maps/photo-meta',
	allowlist: ['data_id', 'google_domain', 'gl', 'hl'],
	flags: [],
	labels: {
		data_id: 'Photo ID',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
	},
	rules: [],
	responseGroups: ['search_metadata', 'search_parameters', 'user', 'location', 'date'],
};

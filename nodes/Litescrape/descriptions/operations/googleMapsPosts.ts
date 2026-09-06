// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleMapsPostsFields: INodeProperties[] = [
	{
		displayName: 'Data ID',
		name: 'dataId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsPosts'],
			},
		},
		placeholder: 'e.g. 0x89c25a1b7d1a4b3d:0x6f2c3d4e5a6b7c8d',
		description:
			"Hexadecimal Google Maps feature ID in 0x123:0x456 form, taken from a place's posts link",
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
				operation: ['googleMapsPosts'],
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
			{
				displayName: 'Next Page Token',
				name: 'nextPage',
				type: 'string',
				default: '',
				description:
					'Opaque continuation token from a previous Posts response, passed back unchanged',
				routing: {
					send: {
						type: 'query',
						property: 'next_page_token',
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
				operation: ['googleMapsPosts'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Pagination',
				value: 'pagination',
			},
			{
				name: 'Posts',
				value: 'posts',
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

export const googleMapsPostsSpec: OperationSpec = {
	operation: 'googleMapsPosts',
	path: '/api/google/maps/posts',
	allowlist: ['data_id', 'next_page_token', 'google_domain', 'gl', 'hl'],
	flags: [],
	labels: {
		data_id: 'Data ID',
		next_page_token: 'Next Page Token',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
	},
	rules: [],
	responseGroups: ['search_metadata', 'search_parameters', 'posts', 'pagination'],
};

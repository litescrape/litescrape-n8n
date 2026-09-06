// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleMapsPopularTimesFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsPopularTimes'],
			},
		},
		placeholder: 'e.g. ChIJT2h1HKZZwokR0kgzEtsa03k',
		description: 'Google place ID of the business, such as ChIJT2h1HKZZwokR0kgzEtsa03k',
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
				operation: ['googleMapsPopularTimes'],
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
				operation: ['googleMapsPopularTimes'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Place',
				value: 'place',
			},
			{
				name: 'Popular Times',
				value: 'popular_times',
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

export const googleMapsPopularTimesSpec: OperationSpec = {
	operation: 'googleMapsPopularTimes',
	path: '/api/google/maps/popular-times',
	allowlist: ['place_id', 'google_domain', 'gl', 'hl'],
	flags: [],
	labels: {
		place_id: 'Place ID',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
	},
	rules: [],
	responseGroups: ['search_metadata', 'search_parameters', 'place', 'popular_times'],
};

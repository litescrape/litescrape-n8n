// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const appleMapsReviewsFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['appleMapsPlace'],
				operation: ['appleMapsReviews'],
			},
		},
		placeholder: 'e.g. 4372355869446211302',
		description: 'Exactly one Apple Maps place ID, such as 4372355869446211302',
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
				operation: ['appleMapsReviews'],
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
				operation: ['appleMapsReviews'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Place Info',
				value: 'place_info',
			},
			{
				name: 'Rating Summary',
				value: 'rating_summary',
			},
			{
				name: 'Ratings',
				value: 'ratings',
			},
			{
				name: 'Reviews',
				value: 'reviews',
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
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const appleMapsReviewsSpec: OperationSpec = {
	operation: 'appleMapsReviews',
	path: '/api/apple/maps/reviews',
	allowlist: ['muid', 'locale'],
	flags: [],
	labels: {
		muid: 'Place ID',
		locale: 'Locale',
	},
	rules: [
		{
			kind: 'custom',
			id: 'singleMuid',
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'place_info',
		'rating_summary',
		'ratings',
		'reviews',
	],
};

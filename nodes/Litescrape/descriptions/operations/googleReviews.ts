// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleReviewsFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['googleReview'],
				operation: ['googleReviews'],
			},
		},
		placeholder: 'e.g. ChIJT2h1HKZZwokR0kgzEtsa03k',
		description: "Google place ID of the business. Required unless 'Data ID' is set in Options.",
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
				resource: ['googleReview'],
				operation: ['googleReviews'],
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
				displayName: 'Data ID',
				name: 'dataId',
				type: 'string',
				default: '',
				description:
					"Hexadecimal Google Maps feature ID in 0x123:0x456 form. Cannot be combined with 'Place ID'.",
				routing: {
					send: {
						type: 'query',
						property: 'data_id',
					},
				},
			},
			{
				displayName: 'Include Source Metadata',
				name: 'includeSourceMetadata',
				type: 'boolean',
				default: false,
				description: 'Whether to include review-provider icon and scale metadata when available',
				routing: {
					send: {
						type: 'query',
						property: 'source_metadata',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				placeholder: 'e.g. en',
				description: 'Language for review labels and place context, such as en or fr',
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
					"Opaque continuation token from a previous response's pagination group, passed back unchanged",
				routing: {
					send: {
						type: 'query',
						property: 'next_page_token',
					},
				},
			},
			{
				displayName: 'Review Count',
				name: 'reviewCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 8,
				description:
					'Number of unique reviews to return. Initial unfiltered requests accept 1 through 100 and consume Google continuation pages internally; filtered and continuation requests accept 1 through 20.',
				routing: {
					send: {
						type: 'query',
						property: 'num',
					},
				},
			},
			{
				displayName: 'Search Text',
				name: 'searchText',
				type: 'string',
				default: '',
				description: "Returns only reviews matching this text. Cannot be combined with 'Topic ID'.",
				routing: {
					send: {
						type: 'query',
						property: 'query',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{
						name: 'Highest Rating',
						value: 'ratingHigh',
					},
					{
						name: 'Lowest Rating',
						value: 'ratingLow',
					},
					{
						name: 'Most Relevant',
						value: 'qualityScore',
					},
					{
						name: 'Newest First',
						value: 'newestFirst',
					},
				],
				default: 'qualityScore',
				description: 'Order of the returned reviews',
				routing: {
					send: {
						type: 'query',
						property: 'sort_by',
					},
				},
			},
			{
				displayName: 'Topic ID',
				name: 'topicId',
				type: 'string',
				default: '',
				description:
					"Topic ID from the topics response group. Cannot be combined with 'Search Text'.",
				routing: {
					send: {
						type: 'query',
						property: 'topic_id',
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
				resource: ['googleReview'],
				operation: ['googleReviews'],
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
				name: 'Place Info',
				value: 'place_info',
			},
			{
				name: 'Reviews',
				value: 'reviews',
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
				name: 'Source Summaries',
				value: 'source_summaries',
			},
			{
				name: 'Topics',
				value: 'topics',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const googleReviewsSpec: OperationSpec = {
	operation: 'googleReviews',
	path: '/api/google/reviews',
	allowlist: [
		'place_id',
		'data_id',
		'sort_by',
		'hl',
		'gl',
		'query',
		'topic_id',
		'num',
		'next_page_token',
		'source_metadata',
	],
	flags: [],
	labels: {
		place_id: 'Place ID',
		data_id: 'Data ID',
		sort_by: 'Sort By',
		hl: 'Language',
		gl: 'Country',
		query: 'Search Text',
		topic_id: 'Topic ID',
		num: 'Review Count',
		next_page_token: 'Next Page Token',
		source_metadata: 'Include Source Metadata',
	},
	rules: [
		{
			kind: 'exactlyOne',
			params: ['place_id', 'data_id'],
		},
		{
			kind: 'atMostOne',
			params: ['topic_id', 'query'],
		},
		{
			kind: 'custom',
			id: 'reviewsCount',
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'place_info',
		'topics',
		'source_summaries',
		'reviews',
		'pagination',
	],
};

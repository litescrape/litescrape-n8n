// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const yelpReviewsFields: INodeProperties[] = [
	{
		displayName: 'Business ID',
		name: 'businessId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['yelp'],
				operation: ['yelpReviews'],
			},
		},
		placeholder: 'e.g. garaje-san-francisco',
		description: 'Encoded Yelp business ID from the business URL, such as garaje-san-francisco',
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
				resource: ['yelp'],
				operation: ['yelpReviews'],
			},
		},
		options: [
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				placeholder: 'e.g. en',
				description: 'Review language, such as en or fr-FR',
				routing: {
					send: {
						type: 'query',
						property: 'hl',
					},
				},
			},
			{
				displayName: 'Ratings',
				name: 'ratings',
				type: 'string',
				default: '',
				placeholder: 'e.g. 4,5',
				description: 'Comma-separated star ratings from 1 through 5 to include, such as 4,5',
				routing: {
					send: {
						type: 'query',
						property: 'rating',
					},
				},
			},
			{
				displayName: 'Review Count',
				name: 'reviewCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 49,
				},
				default: 49,
				description: 'Number of reviews from 1 through 49',
				routing: {
					send: {
						type: 'query',
						property: 'num',
					},
				},
			},
			{
				displayName: 'Review Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 10000,
				},
				default: 0,
				description: 'Review offset from 0 through 10,000',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{
						name: 'Elite Reviewers First',
						value: 'elites_desc',
					},
					{
						name: 'Highest Rating',
						value: 'rating_desc',
					},
					{
						name: 'Lowest Rating',
						value: 'rating_asc',
					},
					{
						name: 'Most Relevant',
						value: 'relevance_desc',
					},
					{
						name: 'Newest First',
						value: 'date_desc',
					},
					{
						name: 'Oldest First',
						value: 'date_asc',
					},
				],
				default: 'relevance_desc',
				description: 'Yelp review ordering',
				routing: {
					send: {
						type: 'query',
						property: 'sortby',
					},
				},
			},
			{
				displayName: 'Yelp Domain',
				name: 'yelpDomain',
				type: 'string',
				default: 'www.yelp.com',
				description: 'Localized Yelp hostname, such as www.yelp.com or www.yelp.co.uk',
				routing: {
					send: {
						type: 'query',
						property: 'yelp_domain',
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
				resource: ['yelp'],
				operation: ['yelpReviews'],
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
				name: 'Review Languages',
				value: 'review_languages',
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

export const yelpReviewsSpec: OperationSpec = {
	operation: 'yelpReviews',
	path: '/api/yelp/reviews',
	allowlist: ['place_id', 'yelp_domain', 'hl', 'sortby', 'rating', 'start', 'num'],
	flags: [],
	labels: {
		place_id: 'Business ID',
		yelp_domain: 'Yelp Domain',
		hl: 'Language',
		sortby: 'Sort By',
		rating: 'Ratings',
		start: 'Review Offset',
		num: 'Review Count',
	},
	rules: [],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'review_languages',
		'reviews',
		'pagination',
	],
};

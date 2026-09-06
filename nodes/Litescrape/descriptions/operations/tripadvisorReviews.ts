// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const tripadvisorReviewsFields: INodeProperties[] = [
	{
		displayName: 'Place ID',
		name: 'placeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
				operation: ['tripadvisorReviews'],
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
				operation: ['tripadvisorReviews'],
			},
		},
		options: [
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
				displayName: 'Review Count',
				name: 'reviewCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 50,
				},
				default: 10,
				description: 'Number of reviews from 1 through 50',
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
						name: 'Recent',
						value: 'recent',
					},
					{
						name: 'Relevance',
						value: 'relevance',
					},
				],
				default: 'recent',
				description: 'Chronological or relevance ordering',
				routing: {
					send: {
						type: 'query',
						property: 'sort_by',
					},
				},
			},
			{
				displayName: 'Translate',
				name: 'translate',
				type: 'boolean',
				default: false,
				description: 'Whether to request Tripadvisor machine translation',
				routing: {
					send: {
						type: 'query',
						property: 'translate',
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
				operation: ['tripadvisorReviews'],
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
			{
				name: 'Sort',
				value: 'sort',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const tripadvisorReviewsSpec: OperationSpec = {
	operation: 'tripadvisorReviews',
	path: '/api/tripadvisor/reviews',
	allowlist: ['place_id', 'tripadvisor_domain', 'locale', 'start', 'num', 'sort_by', 'translate'],
	flags: [],
	labels: {
		place_id: 'Place ID',
		tripadvisor_domain: 'Tripadvisor Domain',
		locale: 'Locale',
		start: 'Review Offset',
		num: 'Review Count',
		sort_by: 'Sort By',
		translate: 'Translate',
	},
	rules: [],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'sort',
		'reviews',
		'pagination',
	],
};

// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const yelpSearchFields: INodeProperties[] = [
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['yelp'],
				operation: ['yelpSearch'],
			},
		},
		placeholder: 'e.g. San Francisco, CA',
		description: 'Yelp search location, such as San Francisco, CA',
		routing: {
			send: {
				type: 'query',
				property: 'find_loc',
			},
		},
	},
	{
		displayName: 'Search Terms',
		name: 'searchTerms',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['yelp'],
				operation: ['yelpSearch'],
			},
		},
		placeholder: 'e.g. tacos',
		description: 'Business name, category, or search terms',
		routing: {
			send: {
				type: 'query',
				property: 'find_desc',
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
				operation: ['yelpSearch'],
			},
		},
		options: [
			{
				displayName: 'Attribute Filters',
				name: 'attributes',
				type: 'string',
				default: '',
				description: 'Comma-separated Yelp attribute filters',
				routing: {
					send: {
						type: 'query',
						property: 'attrs',
					},
				},
			},
			{
				displayName: 'Category',
				name: 'category',
				type: 'string',
				default: '',
				description: 'Yelp category identifier, such as restaurants',
				routing: {
					send: {
						type: 'query',
						property: 'cflt',
					},
				},
			},
			{
				displayName: 'Map Bounds',
				name: 'mapBounds',
				type: 'string',
				default: '',
				description: 'Yelp-native map bounds token',
				routing: {
					send: {
						type: 'query',
						property: 'l',
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
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{
						name: 'Rating',
						value: 'rating',
					},
					{
						name: 'Recommended',
						value: 'recommended',
					},
					{
						name: 'Review Count',
						value: 'review_count',
					},
				],
				default: 'recommended',
				description: 'Native Yelp ordering',
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
				operation: ['yelpSearch'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Ads Results',
				value: 'ads_results',
			},
			{
				name: 'Filters',
				value: 'filters',
			},
			{
				name: 'Litescrape Pagination',
				value: 'litescrape_pagination',
			},
			{
				name: 'Organic Results',
				value: 'organic_results',
			},
			{
				name: 'Pagination',
				value: 'pagination',
			},
			{
				name: 'Related Links',
				value: 'related_links',
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

export const yelpSearchSpec: OperationSpec = {
	operation: 'yelpSearch',
	path: '/api/yelp/search',
	allowlist: ['find_loc', 'find_desc', 'yelp_domain', 'l', 'cflt', 'sortby', 'attrs', 'start'],
	flags: [],
	labels: {
		find_loc: 'Location',
		find_desc: 'Search Terms',
		yelp_domain: 'Yelp Domain',
		l: 'Map Bounds',
		cflt: 'Category',
		sortby: 'Sort By',
		attrs: 'Attribute Filters',
		start: 'Result Offset',
	},
	rules: [],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'organic_results',
		'ads_results',
		'filters',
		'related_links',
		'pagination',
		'litescrape_pagination',
	],
};

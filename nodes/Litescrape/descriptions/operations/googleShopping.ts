// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleShoppingFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['googleShopping'],
				operation: ['googleShopping'],
			},
		},
		placeholder: 'e.g. wireless headphones',
		description:
			"Product query, up to 2,048 characters. Required unless 'Refinement Token' is set in Options.",
		routing: {
			send: {
				type: 'query',
				property: 'q',
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
				resource: ['googleShopping'],
				operation: ['googleShopping'],
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
				displayName: 'Device',
				name: 'device',
				type: 'options',
				options: [
					{
						name: 'Desktop',
						value: 'desktop',
					},
					{
						name: 'Mobile',
						value: 'mobile',
					},
					{
						name: 'Tablet',
						value: 'tablet',
					},
				],
				default: 'desktop',
				description: 'Device layout the source returns',
				routing: {
					send: {
						type: 'query',
						property: 'device',
					},
				},
			},
			{
				displayName: 'Encoded Location',
				name: 'encodedLocation',
				type: 'string',
				default: '',
				description:
					"Pre-encoded Google location value, up to 2,048 characters. Cannot be combined with 'Location'.",
				routing: {
					send: {
						type: 'query',
						property: 'uule',
					},
				},
			},
			{
				displayName: 'Free Shipping',
				name: 'freeShipping',
				type: 'boolean',
				default: false,
				description:
					'Whether to return only products with free shipping. Cannot be combined with a price range or the other refinements.',
				routing: {
					send: {
						type: 'query',
						property: 'free_shipping',
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
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				placeholder: 'e.g. Austin, Texas, United States',
				description:
					"Named search origin, up to 512 characters. Cannot be combined with 'Encoded Location'.",
				routing: {
					send: {
						type: 'query',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Maximum Price',
				name: 'maxPrice',
				type: 'number',
				typeOptions: {
					minValue: 0,
					numberPrecision: 2,
				},
				default: 0,
				description:
					"Upper price bound at or above 'Minimum Price'. Cannot be combined with 'On Sale', 'Free Shipping', or 'Small Business'.",
				routing: {
					send: {
						type: 'query',
						property: 'max_price',
					},
				},
			},
			{
				displayName: 'Minimum Price',
				name: 'minPrice',
				type: 'number',
				typeOptions: {
					minValue: 0,
					numberPrecision: 2,
				},
				default: 0,
				description:
					"Lower price bound. Cannot be combined with 'On Sale', 'Free Shipping', or 'Small Business'.",
				routing: {
					send: {
						type: 'query',
						property: 'min_price',
					},
				},
			},
			{
				displayName: 'On Sale',
				name: 'onSale',
				type: 'boolean',
				default: false,
				description:
					'Whether to return only products Google marks as on sale. Cannot be combined with a price range or the other refinements.',
				routing: {
					send: {
						type: 'query',
						property: 'on_sale',
					},
				},
			},
			{
				displayName: 'Refinement Token',
				name: 'refinement',
				type: 'string',
				default: '',
				description:
					'Google refinement token from a previous response. An explicit refinement below replaces the one it carries.',
				routing: {
					send: {
						type: 'query',
						property: 'shoprs',
					},
				},
			},
			{
				displayName: 'Result Count',
				name: 'resultCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 40,
				description:
					"Number of products from 1 through 100, consuming Google's fixed 40-product pages when needed",
				routing: {
					send: {
						type: 'query',
						property: 'num',
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 1000,
				},
				default: 0,
				description: 'Result offset from 0 through 1,000',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
			},
			{
				displayName: 'Small Business',
				name: 'smallBusiness',
				type: 'boolean',
				default: false,
				description:
					'Whether to return only products from small businesses. Cannot be combined with a price range or the other refinements.',
				routing: {
					send: {
						type: 'query',
						property: 'small_business',
					},
				},
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				options: [
					{
						name: 'Relevance',
						value: '4',
					},
					{
						name: 'Price: Low to High',
						value: '1',
					},
					{
						name: 'Price: High to Low',
						value: '2',
					},
					{
						name: 'Rating: High to Low',
						value: '3',
					},
				],
				default: '4',
				description: 'Product ordering. Combines with one refinement.',
				routing: {
					send: {
						type: 'query',
						property: 'sort_by',
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
				resource: ['googleShopping'],
				operation: ['googleShopping'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Carousel Filters',
				value: 'carousel_filters',
			},
			{
				name: 'Categorized Shopping Results',
				value: 'categorized_shopping_results',
			},
			{
				name: 'Filters',
				value: 'filters',
			},
			{
				name: 'Inline Shopping Results',
				value: 'inline_shopping_results',
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
				name: 'Shopping Results',
				value: 'shopping_results',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const googleShoppingSpec: OperationSpec = {
	operation: 'googleShopping',
	path: '/api/google/shopping',
	allowlist: [
		'q',
		'shoprs',
		'start',
		'num',
		'min_price',
		'max_price',
		'sort_by',
		'on_sale',
		'free_shipping',
		'small_business',
		'location',
		'uule',
		'google_domain',
		'gl',
		'hl',
		'device',
	],
	flags: [],
	labels: {
		q: 'Query',
		shoprs: 'Refinement Token',
		start: 'Result Offset',
		num: 'Result Count',
		min_price: 'Minimum Price',
		max_price: 'Maximum Price',
		sort_by: 'Sort By',
		on_sale: 'On Sale',
		free_shipping: 'Free Shipping',
		small_business: 'Small Business',
		location: 'Location',
		uule: 'Encoded Location',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
		device: 'Device',
	},
	rules: [
		{
			kind: 'requireAny',
			params: ['q', 'shoprs'],
		},
		{
			kind: 'atMostOne',
			params: ['location', 'uule'],
		},
		{
			kind: 'lte',
			low: 'min_price',
			high: 'max_price',
		},
		{
			kind: 'custom',
			id: 'shoppingRefinement',
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'shopping_results',
		'categorized_shopping_results',
		'inline_shopping_results',
		'filters',
		'carousel_filters',
	],
};

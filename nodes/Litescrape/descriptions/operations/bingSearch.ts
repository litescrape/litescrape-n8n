// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const bingSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['bing'],
				operation: ['bingSearch'],
			},
		},
		placeholder: 'e.g. best espresso machines',
		description:
			'Bing search query, 1 through 2,048 characters. Bing syntax such as quoted phrases and exclusions is supported.',
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
				resource: ['bing'],
				operation: ['bingSearch'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				placeholder: 'e.g. US',
				description: "Two-letter country of origin, such as US. Cannot be combined with 'Market'.",
				routing: {
					send: {
						type: 'query',
						property: 'cc',
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
				displayName: 'Filters',
				name: 'filters',
				type: 'string',
				default: '',
				description: 'Native Bing display or date filter expression, up to 8,192 characters',
				routing: {
					send: {
						type: 'query',
						property: 'filters',
					},
				},
			},
			{
				displayName: 'Latitude',
				name: 'latitude',
				type: 'number',
				typeOptions: {
					minValue: -90,
					maxValue: 90,
					numberPrecision: 6,
				},
				default: 0,
				description: "Latitude from -90 through 90, usable alone or with 'Longitude'",
				routing: {
					send: {
						type: 'query',
						property: 'lat',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				placeholder: 'e.g. Austin, Texas, United States',
				description: 'Named city-level origin used to localize the request, up to 256 characters',
				routing: {
					send: {
						type: 'query',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Longitude',
				name: 'longitude',
				type: 'number',
				typeOptions: {
					minValue: -180,
					maxValue: 180,
					numberPrecision: 6,
				},
				default: 0,
				description: "Longitude from -180 through 180, usable alone or with 'Latitude'",
				routing: {
					send: {
						type: 'query',
						property: 'lon',
					},
				},
			},
			{
				displayName: 'Market',
				name: 'market',
				type: 'string',
				default: '',
				placeholder: 'e.g. en-US',
				description:
					"Bing language-country market token, such as en-US. Cannot be combined with 'Country'.",
				routing: {
					send: {
						type: 'query',
						property: 'mkt',
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 1,
				},
				default: 1,
				description: 'One-based offset of the first organic result',
				routing: {
					send: {
						type: 'query',
						property: 'first',
					},
				},
			},
			{
				displayName: 'Safe Search',
				name: 'safeSearch',
				type: 'options',
				options: [
					{
						name: 'Moderate',
						value: 'moderate',
					},
					{
						name: 'Off',
						value: 'off',
					},
					{
						name: 'Strict',
						value: 'strict',
					},
				],
				default: 'moderate',
				description: 'Bing adult-content policy',
				routing: {
					send: {
						type: 'query',
						property: 'safeSearch',
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
				resource: ['bing'],
				operation: ['bingSearch'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Ads',
				value: 'ads',
			},
			{
				name: 'Answer Box',
				value: 'answer_box',
			},
			{
				name: 'Answer Box List',
				value: 'answer_box_list',
			},
			{
				name: 'Carousel Results',
				value: 'carousel_results',
			},
			{
				name: 'Copilot Answer',
				value: 'copilot_answer',
			},
			{
				name: 'Coupons Results',
				value: 'coupons_results',
			},
			{
				name: 'Events Results',
				value: 'events_results',
			},
			{
				name: 'Inline Images',
				value: 'inline_images',
			},
			{
				name: 'Inline Shopping Results',
				value: 'inline_shopping_results',
			},
			{
				name: 'Inline Videos',
				value: 'inline_videos',
			},
			{
				name: 'Knowledge Graph',
				value: 'knowledge_graph',
			},
			{
				name: 'Knowledge Graph List',
				value: 'knowledge_graph_list',
			},
			{
				name: 'Litescrape Pagination',
				value: 'litescrape_pagination',
			},
			{
				name: 'Local Map',
				value: 'local_map',
			},
			{
				name: 'Local Results',
				value: 'local_results',
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
				name: 'Recipes Results',
				value: 'recipes_results',
			},
			{
				name: 'Related Questions',
				value: 'related_questions',
			},
			{
				name: 'Related Searches',
				value: 'related_searches',
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
				name: 'Short Videos',
				value: 'short_videos',
			},
			{
				name: 'Top Shopping Results',
				value: 'top_shopping_results',
			},
			{
				name: 'Top Stories',
				value: 'top_stories',
			},
			{
				name: 'Top Stories Link',
				value: 'top_stories_link',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const bingSearchSpec: OperationSpec = {
	operation: 'bingSearch',
	path: '/api/bing/search',
	allowlist: [
		'q',
		'location',
		'lat',
		'lon',
		'mkt',
		'cc',
		'first',
		'safeSearch',
		'filters',
		'device',
	],
	flags: [],
	labels: {
		q: 'Query',
		location: 'Location',
		lat: 'Latitude',
		lon: 'Longitude',
		mkt: 'Market',
		cc: 'Country',
		first: 'Result Offset',
		safeSearch: 'Safe Search',
		filters: 'Filters',
		device: 'Device',
	},
	rules: [
		{
			kind: 'atMostOne',
			params: ['mkt', 'cc'],
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'organic_results',
		'ads',
		'answer_box',
		'answer_box_list',
		'carousel_results',
		'copilot_answer',
		'coupons_results',
		'events_results',
		'inline_images',
		'inline_shopping_results',
		'inline_videos',
		'short_videos',
		'knowledge_graph',
		'knowledge_graph_list',
		'local_map',
		'local_results',
		'recipes_results',
		'related_questions',
		'related_searches',
		'top_shopping_results',
		'top_stories',
		'top_stories_link',
		'pagination',
		'litescrape_pagination',
	],
};

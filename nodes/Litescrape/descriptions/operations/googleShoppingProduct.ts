// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleShoppingProductFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleShopping'],
				operation: ['googleShoppingProduct'],
			},
		},
		placeholder: 'e.g. wireless headphones',
		description: 'Search term the product was found with, up to 2,048 characters',
		routing: {
			send: {
				type: 'query',
				property: 'q',
			},
		},
	},
	{
		displayName: 'Product Cluster ID',
		name: 'productClusterId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['googleShopping'],
				operation: ['googleShoppingProduct'],
			},
		},
		description:
			"Product cluster ID from a Shopping result, 1 to 20 digits. Required unless 'Product Selector Token' is set in Options.",
		routing: {
			send: {
				type: 'query',
				property: 'gpcid',
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
				operation: ['googleShoppingProduct'],
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
				displayName: 'Headline Offer ID',
				name: 'headlineOfferId',
				type: 'string',
				default: '',
				description:
					"Headline merchant offer document ID from the same Shopping result, 1 to 20 digits. Requires 'Product Cluster ID'.",
				routing: {
					send: {
						type: 'query',
						property: 'headline_offer_docid',
					},
				},
			},
			{
				displayName: 'Image ID',
				name: 'imageId',
				type: 'string',
				default: '',
				description:
					"Image document ID from the same Shopping result, 1 to 20 digits. Requires 'Product Cluster ID'.",
				routing: {
					send: {
						type: 'query',
						property: 'image_docid',
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
				displayName: 'Product Selector Token',
				name: 'productSelector',
				type: 'string',
				default: '',
				description:
					"Google product selector token from a previous response, up to 2,048 characters. Cannot be combined with 'Product Cluster ID'.",
				routing: {
					send: {
						type: 'query',
						property: 'prds',
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
				operation: ['googleShoppingProduct'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Offers',
				value: 'offers',
			},
			{
				name: 'Product Result',
				value: 'product_result',
			},
			{
				name: 'Product Reviews',
				value: 'product_reviews',
			},
			{
				name: 'Related Products',
				value: 'related_products',
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

export const googleShoppingProductSpec: OperationSpec = {
	operation: 'googleShoppingProduct',
	path: '/api/google/shopping/product',
	allowlist: [
		'q',
		'gpcid',
		'headline_offer_docid',
		'image_docid',
		'prds',
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
		gpcid: 'Product Cluster ID',
		headline_offer_docid: 'Headline Offer ID',
		image_docid: 'Image ID',
		prds: 'Product Selector Token',
		location: 'Location',
		uule: 'Encoded Location',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
		device: 'Device',
	},
	rules: [
		{
			kind: 'exactlyOne',
			params: ['gpcid', 'prds'],
		},
		{
			kind: 'requires',
			param: 'headline_offer_docid',
			anyOf: ['gpcid'],
		},
		{
			kind: 'requires',
			param: 'image_docid',
			anyOf: ['gpcid'],
		},
		{
			kind: 'atMostOne',
			params: ['location', 'uule'],
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'product_result',
		'offers',
		'product_reviews',
		'related_products',
	],
};

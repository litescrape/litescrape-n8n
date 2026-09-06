// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleAiModeFields: INodeProperties[] = [
	{
		displayName: 'Question',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['googleAiMode'],
			},
		},
		placeholder: 'e.g. Which compact espresso machines are quietest?',
		description: 'Question to ask Google AI Mode, up to 2,048 characters',
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
				resource: ['googleSearch'],
				operation: ['googleAiMode'],
			},
		},
		options: [
			{
				displayName: 'Allow Follow-Up',
				name: 'allowFollowUp',
				type: 'boolean',
				default: false,
				description: 'Whether to return a continuation token so this answer can be followed up',
				routing: {
					send: {
						type: 'query',
						property: 'continuable',
					},
				},
			},
			{
				displayName: 'Continuation Token',
				name: 'continuation',
				type: 'string',
				default: '',
				description:
					"Continuation token from a previous answer that allowed follow-up. Requires a new question, cannot be combined with 'Image URL', and expires after 30 minutes.",
				routing: {
					send: {
						type: 'query',
						property: 'subsequent_request_token',
					},
				},
			},
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
				displayName: 'Image URL',
				name: 'imageUrl',
				type: 'string',
				default: '',
				description:
					"Public HTTP or HTTPS image URL to include in the prompt, up to 20 MB. Cannot be combined with 'Continuation Token'.",
				routing: {
					send: {
						type: 'query',
						property: 'image_url',
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
		],
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'multiOptions',
		default: [],
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['googleAiMode'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'References',
				value: 'references',
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
				name: 'Subsequent Request Token',
				value: 'subsequent_request_token',
			},
			{
				name: 'Text Blocks',
				value: 'text_blocks',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const googleAiModeSpec: OperationSpec = {
	operation: 'googleAiMode',
	path: '/api/google/ai-mode',
	allowlist: [
		'q',
		'location',
		'uule',
		'google_domain',
		'gl',
		'hl',
		'device',
		'continuable',
		'subsequent_request_token',
		'image_url',
	],
	flags: [],
	labels: {
		q: 'Question',
		location: 'Location',
		uule: 'Encoded Location',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
		device: 'Device',
		continuable: 'Allow Follow-Up',
		subsequent_request_token: 'Continuation Token',
		image_url: 'Image URL',
	},
	rules: [
		{
			kind: 'atMostOne',
			params: ['location', 'uule'],
		},
		{
			kind: 'atMostOne',
			params: ['image_url', 'subsequent_request_token'],
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'text_blocks',
		'references',
		'subsequent_request_token',
	],
};

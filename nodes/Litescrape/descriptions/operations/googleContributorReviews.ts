// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleContributorReviewsFields: INodeProperties[] = [
	{
		displayName: 'Contributor ID',
		name: 'contributorId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleReview'],
				operation: ['googleContributorReviews'],
			},
		},
		placeholder: 'e.g. 118240102432213123456',
		description: '10 to 32 digit ID from a Google Maps contributor URL',
		routing: {
			send: {
				type: 'query',
				property: 'contributor_id',
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
				operation: ['googleContributorReviews'],
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
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				placeholder: 'e.g. en',
				description: 'Review and interface language, such as en, en-US, or fr',
				routing: {
					send: {
						type: 'query',
						property: 'hl',
					},
				},
			},
			{
				displayName: 'Review Count',
				name: 'reviewCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				default: 200,
				description: 'Number of reviews to return, up to the source maximum of 200',
				routing: {
					send: {
						type: 'query',
						property: 'limit',
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
				operation: ['googleContributorReviews'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Contributor',
				value: 'contributor',
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

export const googleContributorReviewsSpec: OperationSpec = {
	operation: 'googleContributorReviews',
	path: '/api/google/contributor-reviews',
	allowlist: ['contributor_id', 'hl', 'gl', 'limit'],
	flags: [],
	labels: {
		contributor_id: 'Contributor ID',
		hl: 'Language',
		gl: 'Country',
		limit: 'Review Count',
	},
	rules: [],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'contributor',
		'reviews',
	],
};

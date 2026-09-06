// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { googleReviewsFields } from '../operations/googleReviews';
import { googleContributorReviewsFields } from '../operations/googleContributorReviews';

export const googleReviewDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['googleReview'],
			},
		},
		options: [
			{
				name: 'Place Reviews',
				value: 'googleReviews',
				action: 'Get place reviews',
				description:
					'Get the reviews of one Google Maps place with sorting, topic and text filters, and continuation',
				routing: {
					request: {
						url: '/api/google/reviews',
					},
					send: {
						preSend: [prepareRequest],
					},
					output: {
						postReceive: [shapeResponse],
					},
				},
			},
			{
				name: 'Contributor Reviews',
				value: 'googleContributorReviews',
				action: 'Get contributor reviews',
				description: 'Get up to 200 reviews from one Google Maps contributor profile',
				routing: {
					request: {
						url: '/api/google/contributor-reviews',
					},
					send: {
						preSend: [prepareRequest],
					},
					output: {
						postReceive: [shapeResponse],
					},
				},
			},
		],
		default: 'googleReviews',
	},
	...googleReviewsFields,
	...googleContributorReviewsFields,
];

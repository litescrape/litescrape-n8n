// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { yelpSearchFields } from '../operations/yelpSearch';
import { yelpReviewsFields } from '../operations/yelpReviews';

export const yelpDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['yelp'],
			},
		},
		options: [
			{
				name: 'Business Search',
				value: 'yelpSearch',
				action: 'Search businesses',
				description: 'Search Yelp businesses by location, terms, category, map area, and sort',
				routing: {
					request: {
						url: '/api/yelp/search',
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
				name: 'Reviews',
				value: 'yelpReviews',
				action: 'Get reviews',
				description:
					'Get public Yelp reviews for one business with language, rating, sort, and pagination controls',
				routing: {
					request: {
						url: '/api/yelp/reviews',
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
		default: 'yelpSearch',
	},
	...yelpSearchFields,
	...yelpReviewsFields,
];

// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { tripadvisorSearchFields } from '../operations/tripadvisorSearch';
import { tripadvisorPlaceFields } from '../operations/tripadvisorPlace';
import { tripadvisorReviewsFields } from '../operations/tripadvisorReviews';

export const tripadvisorDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['tripadvisor'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'tripadvisorSearch',
				action: 'Search places',
				description: 'Search Tripadvisor by text, geography, coordinates, and place type',
				routing: {
					request: {
						url: '/api/tripadvisor/search',
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
				name: 'Place',
				value: 'tripadvisorPlace',
				action: 'Get a place',
				description: 'Get one Tripadvisor place with its details and price fields',
				routing: {
					request: {
						url: '/api/tripadvisor/place',
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
				value: 'tripadvisorReviews',
				action: 'Get reviews',
				description: 'Get Tripadvisor reviews for one place with reviewer profiles and photos',
				routing: {
					request: {
						url: '/api/tripadvisor/reviews',
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
		default: 'tripadvisorSearch',
	},
	...tripadvisorSearchFields,
	...tripadvisorPlaceFields,
	...tripadvisorReviewsFields,
];

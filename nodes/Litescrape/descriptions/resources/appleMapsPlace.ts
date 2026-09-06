// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { appleMapsPlacesFields } from '../operations/appleMapsPlaces';
import { appleMapsReviewsFields } from '../operations/appleMapsReviews';

export const appleMapsPlaceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['appleMapsPlace'],
			},
		},
		options: [
			{
				name: 'Places',
				value: 'appleMapsPlaces',
				action: 'Get places',
				description: 'Get details for up to 50 Apple Maps places in one call',
				routing: {
					request: {
						url: '/api/apple/maps/places',
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
				value: 'appleMapsReviews',
				action: 'Get reviews',
				description: 'Get the ratings and written reviews Apple attributes to one Apple Maps place',
				routing: {
					request: {
						url: '/api/apple/maps/reviews',
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
		default: 'appleMapsPlaces',
	},
	...appleMapsPlacesFields,
	...appleMapsReviewsFields,
];

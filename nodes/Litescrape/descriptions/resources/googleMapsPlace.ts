// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { googleMapsSearchFields } from '../operations/googleMapsSearch';
import { googleMapsPlaceFields } from '../operations/googleMapsPlace';
import { googleMapsPopularTimesFields } from '../operations/googleMapsPopularTimes';
import { googleMapsPostsFields } from '../operations/googleMapsPosts';
import { googleMapsPhotoMetaFields } from '../operations/googleMapsPhotoMeta';

export const googleMapsPlaceDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
			},
		},
		options: [
			{
				name: 'Get Place',
				value: 'googleMapsPlace',
				action: 'Get a place',
				description: 'Get one exact Google Maps place by place ID, CID, or data sequence',
				routing: {
					request: {
						url: '/api/google/maps',
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
				name: 'Photo Metadata',
				value: 'googleMapsPhotoMeta',
				action: 'Get photo metadata',
				description: 'Get contributor, place, and coordinate metadata for one Google Maps photo',
				routing: {
					request: {
						url: '/api/google/maps/photo-meta',
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
				name: 'Popular Times',
				value: 'googleMapsPopularTimes',
				action: 'Get popular times',
				description: 'Get live and usual foot traffic for one Google Maps place',
				routing: {
					request: {
						url: '/api/google/maps/popular-times',
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
				name: 'Posts',
				value: 'googleMapsPosts',
				action: 'Get posts',
				description: 'Get the posts a business published on its Google Maps profile',
				routing: {
					request: {
						url: '/api/google/maps/posts',
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
				name: 'Search',
				value: 'googleMapsSearch',
				action: 'Search places',
				description:
					'Search Google Maps for places matching a query within a viewport or named location',
				routing: {
					request: {
						url: '/api/google/maps',
						qs: {
							type: 'search',
						},
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
		default: 'googleMapsSearch',
	},
	...googleMapsSearchFields,
	...googleMapsPlaceFields,
	...googleMapsPopularTimesFields,
	...googleMapsPostsFields,
	...googleMapsPhotoMetaFields,
];

// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { bingSearchFields } from '../operations/bingSearch';
import { bingMapsFields } from '../operations/bingMaps';

export const bingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bing'],
			},
		},
		options: [
			{
				name: 'Web Search',
				value: 'bingSearch',
				action: 'Search the web',
				description: 'Get organic results, ads, and answer modules for a Bing web search',
				routing: {
					request: {
						url: '/api/bing/search',
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
				name: 'Maps Search',
				value: 'bingMaps',
				action: 'Search maps',
				description: 'Search Bing Maps listings or resolve one Bing Maps entity',
				routing: {
					request: {
						url: '/api/bing/maps',
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
		default: 'bingSearch',
	},
	...bingSearchFields,
	...bingMapsFields,
];

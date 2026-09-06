// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { duckduckgoSearchFields } from '../operations/duckduckgoSearch';
import { duckduckgoMapsFields } from '../operations/duckduckgoMaps';

export const duckduckgoDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['duckduckgo'],
			},
		},
		options: [
			{
				name: 'Web Search',
				value: 'duckduckgoSearch',
				action: 'Search the web',
				description:
					'Get ranked DuckDuckGo web results with region, safety, date, and pagination controls',
				routing: {
					request: {
						url: '/api/duckduckgo/search',
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
				value: 'duckduckgoMaps',
				action: 'Search maps',
				description: 'Get DuckDuckGo local results inside a map viewport',
				routing: {
					request: {
						url: '/api/duckduckgo/maps',
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
		default: 'duckduckgoSearch',
	},
	...duckduckgoSearchFields,
	...duckduckgoMapsFields,
];

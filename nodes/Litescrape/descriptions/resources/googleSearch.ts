// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { googleSearchFields } from '../operations/googleSearch';
import { googleAiOverviewFields } from '../operations/googleAiOverview';
import { googleAiModeFields } from '../operations/googleAiMode';

export const googleSearchDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['googleSearch'],
			},
		},
		options: [
			{
				name: 'Web Search',
				value: 'googleSearch',
				action: 'Search the web',
				description: 'Get organic results, ads, and rich modules for a Google Search query',
				routing: {
					request: {
						url: '/api/google/search',
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
				name: 'AI Overview',
				value: 'googleAiOverview',
				action: 'Get an AI overview',
				description: 'Get only the AI Overview Google shows for a search query',
				routing: {
					request: {
						url: '/api/google/ai-overview',
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
				name: 'AI Mode',
				value: 'googleAiMode',
				action: 'Ask AI mode',
				description:
					'Get the generated answer and cited sources Google AI Mode returns for a question',
				routing: {
					request: {
						url: '/api/google/ai-mode',
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
		default: 'googleSearch',
	},
	...googleSearchFields,
	...googleAiOverviewFields,
	...googleAiModeFields,
];

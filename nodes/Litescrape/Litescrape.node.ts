import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

import { resourceDescriptions, resourceOptions } from './descriptions';

export class Litescrape implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Litescrape',
		name: 'litescrape',
		icon: { light: 'file:litescrape.svg', dark: 'file:litescrape.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'Get Google Search, Google Maps, reviews, Bing, DuckDuckGo, Yelp, Tripadvisor, and Apple Maps data from Litescrape',
		defaults: {
			name: 'Litescrape',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'litescrapeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.litescrape.com',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: resourceOptions,
				default: 'googleSearch',
			},
			...resourceDescriptions,
			{
				displayName: 'Simplify',
				name: 'simple',
				type: 'boolean',
				default: true,
				description:
					'Whether to return a simplified version of the response instead of the raw data',
				displayOptions: {
					show: {
						'@tool': [false],
					},
				},
			},
			{
				displayName: 'Output',
				name: 'output',
				type: 'options',
				options: [
					{
						name: 'Simplified',
						value: 'simplified',
						description: 'Return the result groups without the request metadata',
					},
					{
						name: 'Raw',
						value: 'raw',
						description: 'Return the complete response',
					},
					{
						name: 'Selected Fields',
						value: 'selected',
						description: 'Return only the response groups chosen below',
					},
				],
				default: 'simplified',
				description: 'How much of the response to hand to the agent',
				displayOptions: {
					show: {
						'@tool': [true],
					},
				},
			},
			{
				displayName: 'Auto Retry',
				name: 'autoRetry',
				type: 'boolean',
				default: true,
				description:
					'Whether to retry the request automatically when the API reports a temporary error, waiting with backoff and honoring Retry-After. Only successful responses consume a call.',
			},
			{
				displayName: 'Max Retries',
				name: 'maxRetries',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 5,
				},
				default: 2,
				description:
					'Number of additional attempts after the first request before the error is raised',
				displayOptions: {
					show: {
						autoRetry: [true],
					},
				},
			},
		],
	};
}

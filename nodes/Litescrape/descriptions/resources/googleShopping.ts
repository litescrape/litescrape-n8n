// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { prepareRequest } from '../../helpers/request';
import { shapeResponse } from '../../helpers/response';
import { googleShoppingFields } from '../operations/googleShopping';
import { googleShoppingProductFields } from '../operations/googleShoppingProduct';

export const googleShoppingDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['googleShopping'],
			},
		},
		options: [
			{
				name: 'Search',
				value: 'googleShopping',
				action: 'Search products',
				description:
					'Get the Google Shopping product grid, category blocks, sponsored listings, and refinement chips for a query',
				routing: {
					request: {
						url: '/api/google/shopping',
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
				name: 'Product',
				value: 'googleShoppingProduct',
				action: 'Get a product',
				description:
					'Get one Google Shopping product page with merchant offers, specifications, reviews, and related products',
				routing: {
					request: {
						url: '/api/google/shopping/product',
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
		default: 'googleShopping',
	},
	...googleShoppingFields,
	...googleShoppingProductFields,
];

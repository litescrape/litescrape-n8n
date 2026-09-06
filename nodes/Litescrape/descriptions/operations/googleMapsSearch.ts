// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleMapsSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsSearch'],
			},
		},
		placeholder: 'e.g. coffee shops in Austin, TX',
		description: 'Business, category, address, or natural-language query',
		routing: {
			send: {
				type: 'query',
				property: 'q',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsSearch'],
			},
		},
		options: [
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				placeholder: 'e.g. us',
				description: 'Two-letter country code for regional localization, such as us or gb',
				routing: {
					send: {
						type: 'query',
						property: 'gl',
					},
				},
			},
			{
				displayName: 'Data Sequence',
				name: 'dataSequence',
				type: 'string',
				default: '',
				description:
					'Google Maps protobuf parameter sequence carrying search filters, up to 8,192 characters',
				routing: {
					send: {
						type: 'query',
						property: 'data',
					},
				},
			},
			{
				displayName: 'Google Domain',
				name: 'googleDomain',
				type: 'string',
				default: 'google.com',
				description: 'Google domain the request is served from, such as google.com or google.co.uk',
				routing: {
					send: {
						type: 'query',
						property: 'google_domain',
					},
				},
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				placeholder: 'e.g. en',
				description: 'Language code for the interface and returned text, such as en, en-GB, or de',
				routing: {
					send: {
						type: 'query',
						property: 'hl',
					},
				},
			},
			{
				displayName: 'Latitude',
				name: 'latitude',
				type: 'number',
				typeOptions: {
					minValue: -90,
					maxValue: 90,
					numberPrecision: 6,
				},
				default: 0,
				description:
					"Latitude of a coordinate viewport. Requires 'Longitude' plus 'Zoom Level' or 'Radius', and cannot be combined with 'Viewport' or 'Location'.",
				routing: {
					send: {
						type: 'query',
						property: 'lat',
					},
				},
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				placeholder: 'e.g. Austin, Texas, United States',
				description:
					"Named location resolved by the API. Requires 'Zoom Level' or 'Radius' and cannot be combined with 'Viewport' or coordinates.",
				routing: {
					send: {
						type: 'query',
						property: 'location',
					},
				},
			},
			{
				displayName: 'Longitude',
				name: 'longitude',
				type: 'number',
				typeOptions: {
					minValue: -180,
					maxValue: 180,
					numberPrecision: 6,
				},
				default: 0,
				description:
					"Longitude of a coordinate viewport. Requires 'Latitude' plus 'Zoom Level' or 'Radius', and cannot be combined with 'Viewport' or 'Location'.",
				routing: {
					send: {
						type: 'query',
						property: 'lon',
					},
				},
			},
			{
				displayName: 'Maximum Price Level',
				name: 'maxPrice',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				default: 0,
				description: "Maximum price level for returned places, at or above 'Minimum Price Level'",
				routing: {
					send: {
						type: 'query',
						property: 'max_price',
					},
				},
			},
			{
				displayName: 'Minimum Price Level',
				name: 'minPrice',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				default: 0,
				description: 'Minimum price level for returned places',
				routing: {
					send: {
						type: 'query',
						property: 'min_price',
					},
				},
			},
			{
				displayName: 'Minimum Rating',
				name: 'minRating',
				type: 'options',
				options: [
					{
						name: '2.0',
						value: '2.0',
					},
					{
						name: '2.5',
						value: '2.5',
					},
					{
						name: '3.0',
						value: '3.0',
					},
					{
						name: '3.5',
						value: '3.5',
					},
					{
						name: '4.0',
						value: '4.0',
					},
					{
						name: '4.5',
						value: '4.5',
					},
				],
				default: '4.0',
				description: 'Preferred minimum Google rating, treated by Google as a relevance preference',
				routing: {
					send: {
						type: 'query',
						property: 'min_rating',
					},
				},
			},
			{
				displayName: 'Nearby Search',
				name: 'nearby',
				type: 'boolean',
				default: false,
				description: 'Whether to use the supplied geography as a nearby-search scope',
				routing: {
					send: {
						type: 'query',
						property: 'nearby',
					},
				},
			},
			{
				displayName: 'Open Day',
				name: 'openDay',
				type: 'options',
				options: [
					{
						name: 'Friday',
						value: 'fri',
					},
					{
						name: 'Monday',
						value: 'mon',
					},
					{
						name: 'Saturday',
						value: 'sat',
					},
					{
						name: 'Sunday',
						value: 'sun',
					},
					{
						name: 'Thursday',
						value: 'thu',
					},
					{
						name: 'Tuesday',
						value: 'tue',
					},
					{
						name: 'Wednesday',
						value: 'wed',
					},
				],
				default: 'mon',
				description:
					"Day of the week that places must be open on. Cannot be combined with 'Open State'.",
				routing: {
					send: {
						type: 'query',
						property: 'open_on_day',
					},
				},
			},
			{
				displayName: 'Open Hour',
				name: 'openHour',
				type: 'number',
				typeOptions: {
					minValue: 0,
					maxValue: 23,
				},
				default: 9,
				description:
					"Hour in 24-hour time that places must be open at. Requires 'Open Day' and cannot be combined with 'Open State'.",
				routing: {
					send: {
						type: 'query',
						property: 'open_at_hour',
					},
				},
			},
			{
				displayName: 'Open State',
				name: 'openState',
				type: 'options',
				options: [
					{
						name: 'Open 24 Hours',
						value: '24h',
					},
					{
						name: 'Open Now',
						value: 'now',
					},
				],
				default: 'now',
				description:
					"Filters by the current open state. Cannot be combined with 'Open Day' or 'Open Hour'.",
				routing: {
					send: {
						type: 'query',
						property: 'open_state',
					},
				},
			},
			{
				displayName: 'Radius',
				name: 'radiusMeters',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 15028132,
				},
				default: 5000,
				description:
					"Search radius in meters for 'Location' or coordinates. Cannot be combined with 'Zoom Level'.",
				routing: {
					send: {
						type: 'query',
						property: 'm',
					},
				},
			},
			{
				displayName: 'Result Offset',
				name: 'offset',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				default: 0,
				description: 'Native Maps result offset. A normal page contains 20 places.',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
			},
			{
				displayName: 'Viewport',
				name: 'viewport',
				type: 'string',
				default: '',
				placeholder: 'e.g. @30.2672,-97.7431,14z',
				description:
					"Complete viewport as @lat,lon,14z or @lat,lon,5000m. Cannot be combined with 'Location' or coordinates.",
				routing: {
					send: {
						type: 'query',
						property: 'll',
					},
				},
			},
			{
				displayName: 'Zoom Level',
				name: 'zoom',
				type: 'number',
				typeOptions: {
					minValue: 3,
					maxValue: 30,
				},
				default: 14,
				description:
					"Google Maps zoom level from 3 through 30 for 'Location' or coordinates. Cannot be combined with 'Radius'.",
				routing: {
					send: {
						type: 'query',
						property: 'z',
					},
				},
			},
		],
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'multiOptions',
		default: [],
		displayOptions: {
			show: {
				resource: ['googleMapsPlace'],
				operation: ['googleMapsSearch'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Local Results',
				value: 'local_results',
			},
			{
				name: 'Pagination',
				value: 'pagination',
			},
			{
				name: 'Search Information',
				value: 'search_information',
			},
			{
				name: 'Search Metadata',
				value: 'search_metadata',
			},
			{
				name: 'Search Parameters',
				value: 'search_parameters',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const googleMapsSearchSpec: OperationSpec = {
	operation: 'googleMapsSearch',
	path: '/api/google/maps',
	allowlist: [
		'q',
		'll',
		'location',
		'lat',
		'lon',
		'z',
		'm',
		'nearby',
		'data',
		'google_domain',
		'gl',
		'hl',
		'min_price',
		'max_price',
		'min_rating',
		'open_state',
		'open_on_day',
		'open_at_hour',
		'start',
		'type',
	],
	flags: [],
	labels: {
		q: 'Query',
		ll: 'Viewport',
		location: 'Location',
		lat: 'Latitude',
		lon: 'Longitude',
		z: 'Zoom Level',
		m: 'Radius',
		nearby: 'Nearby Search',
		data: 'Data Sequence',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
		min_price: 'Minimum Price Level',
		max_price: 'Maximum Price Level',
		min_rating: 'Minimum Rating',
		open_state: 'Open State',
		open_on_day: 'Open Day',
		open_at_hour: 'Open Hour',
		start: 'Result Offset',
	},
	rules: [
		{
			kind: 'paired',
			params: ['lat', 'lon'],
		},
		{
			kind: 'atMostOne',
			params: ['ll', 'lat', 'location'],
		},
		{
			kind: 'atMostOne',
			params: ['z', 'm'],
		},
		{
			kind: 'requires',
			param: 'location',
			anyOf: ['z', 'm'],
		},
		{
			kind: 'requires',
			param: 'lat',
			anyOf: ['z', 'm'],
		},
		{
			kind: 'requires',
			param: 'nearby',
			anyOf: ['ll', 'location', 'lat'],
		},
		{
			kind: 'atMostOne',
			params: ['open_state', 'open_on_day'],
		},
		{
			kind: 'atMostOne',
			params: ['open_state', 'open_at_hour'],
		},
		{
			kind: 'requires',
			param: 'open_at_hour',
			anyOf: ['open_on_day'],
		},
		{
			kind: 'lte',
			low: 'min_price',
			high: 'max_price',
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'local_results',
		'pagination',
	],
};

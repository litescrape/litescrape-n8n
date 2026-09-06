// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import type { OperationSpec } from '../../helpers/types';

export const googleSearchFields: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'q',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['googleSearch'],
				operation: ['googleSearch'],
			},
		},
		placeholder: 'e.g. best espresso machines',
		description:
			"Google Search query, up to 2,048 characters. Required unless 'Local CID' or 'Knowledge Graph ID' is set in Options.",
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
				resource: ['googleSearch'],
				operation: ['googleSearch'],
			},
		},
		options: [
			{
				displayName: 'Additional Words',
				name: 'additionalWords',
				type: 'string',
				default: '',
				description: 'Additional words that all results must contain',
				routing: {
					send: {
						type: 'query',
						property: 'as_q',
					},
				},
			},
			{
				displayName: 'Color Scheme',
				name: 'colorScheme',
				type: 'options',
				options: [
					{
						name: 'Dark',
						value: 'dark',
					},
					{
						name: 'Light',
						value: 'light',
					},
				],
				default: 'light',
				description: 'Color presentation Google renders the results in',
				routing: {
					send: {
						type: 'query',
						property: 'color_scheme',
					},
				},
			},
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
				displayName: 'Country Restriction',
				name: 'countryRestriction',
				type: 'string',
				default: '',
				description:
					'One or more countryXX restrictions joined with |, such as countryUS|countryCA',
				routing: {
					send: {
						type: 'query',
						property: 'cr',
					},
				},
			},
			{
				displayName: 'Date Range',
				name: 'dateRange',
				type: 'string',
				default: '',
				description:
					'Quick date range d, w, m, or y with an optional count, such as w2 for the last two weeks',
				routing: {
					send: {
						type: 'query',
						property: 'as_qdr',
					},
				},
			},
			{
				displayName: 'Device',
				name: 'device',
				type: 'options',
				options: [
					{
						name: 'Desktop',
						value: 'desktop',
					},
					{
						name: 'Mobile',
						value: 'mobile',
					},
					{
						name: 'Tablet',
						value: 'tablet',
					},
				],
				default: 'desktop',
				description: 'Device layout the source returns',
				routing: {
					send: {
						type: 'query',
						property: 'device',
					},
				},
			},
			{
				displayName: 'Disable Auto-Correction',
				name: 'disableAutoCorrection',
				type: 'boolean',
				default: false,
				description: 'Whether to stop Google from auto-correcting the query spelling',
				routing: {
					send: {
						type: 'query',
						property: 'nfpr',
					},
				},
			},
			{
				displayName: 'Encoded Location',
				name: 'encodedLocation',
				type: 'string',
				default: '',
				description:
					"Pre-encoded Google location value. Cannot be combined with 'Location' or coordinates.",
				routing: {
					send: {
						type: 'query',
						property: 'uule',
					},
				},
			},
			{
				displayName: 'Exact Phrase',
				name: 'exactPhrase',
				type: 'string',
				default: '',
				description: 'Phrase that results must contain exactly',
				routing: {
					send: {
						type: 'query',
						property: 'as_epq',
					},
				},
			},
			{
				displayName: 'Excluded Words',
				name: 'excludedWords',
				type: 'string',
				default: '',
				description: 'Words that results must not contain',
				routing: {
					send: {
						type: 'query',
						property: 'as_eq',
					},
				},
			},
			{
				displayName: 'Filter Similar Results',
				name: 'filterSimilar',
				type: 'boolean',
				default: true,
				description: 'Whether to let Google hide near-duplicate results',
				routing: {
					send: {
						type: 'query',
						property: 'filter',
					},
				},
			},
			{
				displayName: 'Filter Token',
				name: 'udsFilter',
				type: 'string',
				default: '',
				description: 'Opaque Google filter token from a previous response',
				routing: {
					send: {
						type: 'query',
						property: 'uds',
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
				displayName: 'Knowledge Graph ID',
				name: 'knowledgeGraphId',
				type: 'string',
				default: '',
				description: 'Google Knowledge Graph machine ID, such as /m/0k8z',
				routing: {
					send: {
						type: 'query',
						property: 'kgmid',
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
				displayName: 'Language Restriction',
				name: 'languageRestriction',
				type: 'string',
				default: '',
				description: 'One or more lang_xx restrictions joined with |, such as lang_en|lang_fr',
				routing: {
					send: {
						type: 'query',
						property: 'lr',
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
					"Latitude from -90 through 90. Requires 'Longitude' and cannot be combined with 'Location' or 'Encoded Location'.",
				routing: {
					send: {
						type: 'query',
						property: 'lat',
					},
				},
			},
			{
				displayName: 'Layout Control',
				name: 'layoutControl',
				type: 'string',
				default: '',
				description: 'Google layout or expansion control value',
				routing: {
					send: {
						type: 'query',
						property: 'ibp',
					},
				},
			},
			{
				displayName: 'Linking URL',
				name: 'linkingUrl',
				type: 'string',
				default: '',
				description: 'Require results that link to this URL',
				routing: {
					send: {
						type: 'query',
						property: 'as_lq',
					},
				},
			},
			{
				displayName: 'Local CID',
				name: 'localCid',
				type: 'string',
				default: '',
				description: 'Google local CID that selects one business entity instead of a query',
				routing: {
					send: {
						type: 'query',
						property: 'ludocid',
					},
				},
			},
			{
				displayName: 'Local Signature',
				name: 'localSignature',
				type: 'string',
				default: '',
				description: 'Opaque Knowledge Graph or local-pack signature from a previous response',
				routing: {
					send: {
						type: 'query',
						property: 'lsig',
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
					"Named city-level search origin encoded to UULE by Litescrape. Cannot be combined with 'Encoded Location' or coordinates.",
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
					"Longitude from -180 through 180. Requires 'Latitude' and cannot be combined with 'Location' or 'Encoded Location'.",
				routing: {
					send: {
						type: 'query',
						property: 'lon',
					},
				},
			},
			{
				displayName: 'Number Range From',
				name: 'numberRangeFrom',
				type: 'number',
				default: 0,
				description: "Inclusive lower bound of a number range. Requires 'Number Range To'.",
				routing: {
					send: {
						type: 'query',
						property: 'as_nlo',
					},
				},
			},
			{
				displayName: 'Number Range To',
				name: 'numberRangeTo',
				type: 'number',
				default: 0,
				description: "Inclusive upper bound of a number range. Requires 'Number Range From'.",
				routing: {
					send: {
						type: 'query',
						property: 'as_nhi',
					},
				},
			},
			{
				displayName: 'Optional Words',
				name: 'optionalWords',
				type: 'string',
				default: '',
				description: 'Words of which at least one must appear in results',
				routing: {
					send: {
						type: 'query',
						property: 'as_oq',
					},
				},
			},
			{
				displayName: 'Original Query',
				name: 'originalQuery',
				type: 'string',
				default: '',
				description: 'Original query text Google receives alongside the query',
				routing: {
					send: {
						type: 'query',
						property: 'oq',
					},
				},
			},
			{
				displayName: 'Radius',
				name: 'radius',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 1000,
					numberPrecision: 3,
				},
				default: 1,
				description:
					"Search-bias radius in meters. Requires 'Location' or coordinates; desktop accepts 1 through 199 and tablet or mobile accept 1 through 1,000.",
				routing: {
					send: {
						type: 'query',
						property: 'radius',
					},
				},
			},
			{
				displayName: 'Related URL',
				name: 'relatedUrl',
				type: 'string',
				default: '',
				description: 'Find pages related to this URL',
				routing: {
					send: {
						type: 'query',
						property: 'as_rq',
					},
				},
			},
			{
				displayName: 'Result Count',
				name: 'resultCount',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 10,
				description: 'Requested number of results from 1 through 100, treated by Google as a hint',
				routing: {
					send: {
						type: 'query',
						property: 'num',
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
				description: 'Zero-based result offset',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
			},
			{
				displayName: 'Safe Search',
				name: 'safeSearch',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Off',
						value: 'off',
					},
				],
				default: 'active',
				description: 'Google adult-content filtering',
				routing: {
					send: {
						type: 'query',
						property: 'safe',
					},
				},
			},
			{
				displayName: 'Search Client',
				name: 'searchClient',
				type: 'string',
				default: '',
				description: 'Google search client identifier',
				routing: {
					send: {
						type: 'query',
						property: 'sclient',
					},
				},
			},
			{
				displayName: 'Search Context',
				name: 'searchContext',
				type: 'string',
				default: '',
				description: 'Opaque cached Google search context from a previous response',
				routing: {
					send: {
						type: 'query',
						property: 'si',
					},
				},
			},
			{
				displayName: 'Search Filter',
				name: 'searchFilter',
				type: 'string',
				default: '',
				description: 'Native Google date or search filter string, such as qdr:w',
				routing: {
					send: {
						type: 'query',
						property: 'tbs',
					},
				},
			},
			{
				displayName: 'Session Data',
				name: 'sessionData',
				type: 'string',
				default: '',
				description: 'Opaque Google search session value',
				routing: {
					send: {
						type: 'query',
						property: 'gs_lp',
					},
				},
			},
			{
				displayName: 'Site Search',
				name: 'siteSearch',
				type: 'string',
				default: '',
				description: 'Hostname to include or exclude, such as example.com',
				routing: {
					send: {
						type: 'query',
						property: 'as_sitesearch',
					},
				},
			},
			{
				displayName: 'Site Search Mode',
				name: 'siteSearchMode',
				type: 'options',
				options: [
					{
						name: 'Exclude',
						value: 'e',
					},
					{
						name: 'Include',
						value: 'i',
					},
				],
				default: 'i',
				description: "Includes or excludes the 'Site Search' hostname. Requires 'Site Search'.",
				routing: {
					send: {
						type: 'query',
						property: 'as_dt',
					},
				},
			},
			{
				displayName: 'Vertical',
				name: 'vertical',
				type: 'options',
				options: [
					{
						name: 'Local',
						value: 'lcl',
					},
					{
						name: 'News',
						value: 'nws',
					},
					{
						name: 'Patents',
						value: 'pts',
					},
					{
						name: 'Shopping',
						value: 'shop',
					},
					{
						name: 'Videos',
						value: 'vid',
					},
				],
				default: 'lcl',
				description: 'Google search vertical to query. Google Images is not supported.',
				routing: {
					send: {
						type: 'query',
						property: 'tbm',
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
				resource: ['googleSearch'],
				operation: ['googleSearch'],
				output: ['selected'],
				'@tool': [true],
			},
		},
		options: [
			{
				name: 'Ads',
				value: 'ads',
			},
			{
				name: 'AI Overview',
				value: 'ai_overview',
			},
			{
				name: 'Answer Box',
				value: 'answer_box',
			},
			{
				name: 'Discussions And Forums',
				value: 'discussions_and_forums',
			},
			{
				name: 'Events Results',
				value: 'events_results',
			},
			{
				name: 'Filters',
				value: 'filters',
			},
			{
				name: 'Immersive Products',
				value: 'immersive_products',
			},
			{
				name: 'Inline Images',
				value: 'inline_images',
			},
			{
				name: 'Inline Videos',
				value: 'inline_videos',
			},
			{
				name: 'Knowledge Graph',
				value: 'knowledge_graph',
			},
			{
				name: 'Local Map',
				value: 'local_map',
			},
			{
				name: 'Local Results',
				value: 'local_results',
			},
			{
				name: 'Menu Highlights',
				value: 'menu_highlights',
			},
			{
				name: 'News Results',
				value: 'news_results',
			},
			{
				name: 'Organic Results',
				value: 'organic_results',
			},
			{
				name: 'Pagination',
				value: 'pagination',
			},
			{
				name: 'Popular Destinations',
				value: 'popular_destinations',
			},
			{
				name: 'Related Questions',
				value: 'related_questions',
			},
			{
				name: 'Related Searches',
				value: 'related_searches',
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
			{
				name: 'Shopping Results',
				value: 'shopping_results',
			},
			{
				name: 'Sports Results',
				value: 'sports_results',
			},
			{
				name: 'Things To Know',
				value: 'things_to_know',
			},
			{
				name: 'Top Sights',
				value: 'top_sights',
			},
			{
				name: 'Top Stories',
				value: 'top_stories',
			},
			{
				name: 'Video Results',
				value: 'video_results',
			},
		],
		description: 'Top-level response groups to return. The search metadata ID is always included.',
	},
];

export const googleSearchSpec: OperationSpec = {
	operation: 'googleSearch',
	path: '/api/google/search',
	allowlist: [
		'q',
		'ludocid',
		'kgmid',
		'location',
		'uule',
		'lat',
		'lon',
		'radius',
		'lsig',
		'si',
		'ibp',
		'uds',
		'color_scheme',
		'google_domain',
		'gl',
		'hl',
		'cr',
		'lr',
		'tbs',
		'safe',
		'nfpr',
		'filter',
		'tbm',
		'start',
		'num',
		'device',
		'oq',
		'gs_lp',
		'sclient',
		'as_dt',
		'as_epq',
		'as_eq',
		'as_lq',
		'as_nlo',
		'as_nhi',
		'as_oq',
		'as_q',
		'as_qdr',
		'as_rq',
		'as_sitesearch',
	],
	flags: ['nfpr', 'filter'],
	labels: {
		q: 'Query',
		ludocid: 'Local CID',
		kgmid: 'Knowledge Graph ID',
		location: 'Location',
		uule: 'Encoded Location',
		lat: 'Latitude',
		lon: 'Longitude',
		radius: 'Radius',
		lsig: 'Local Signature',
		si: 'Search Context',
		ibp: 'Layout Control',
		uds: 'Filter Token',
		color_scheme: 'Color Scheme',
		google_domain: 'Google Domain',
		gl: 'Country',
		hl: 'Language',
		cr: 'Country Restriction',
		lr: 'Language Restriction',
		tbs: 'Search Filter',
		safe: 'Safe Search',
		nfpr: 'Disable Auto-Correction',
		filter: 'Filter Similar Results',
		tbm: 'Vertical',
		start: 'Result Offset',
		num: 'Result Count',
		device: 'Device',
		oq: 'Original Query',
		gs_lp: 'Session Data',
		sclient: 'Search Client',
		as_dt: 'Site Search Mode',
		as_epq: 'Exact Phrase',
		as_eq: 'Excluded Words',
		as_lq: 'Linking URL',
		as_nlo: 'Number Range From',
		as_nhi: 'Number Range To',
		as_oq: 'Optional Words',
		as_q: 'Additional Words',
		as_qdr: 'Date Range',
		as_rq: 'Related URL',
		as_sitesearch: 'Site Search',
	},
	rules: [
		{
			kind: 'requireAny',
			params: ['q', 'ludocid', 'kgmid'],
		},
		{
			kind: 'paired',
			params: ['lat', 'lon'],
		},
		{
			kind: 'atMostOne',
			params: ['location', 'uule', 'lat'],
		},
		{
			kind: 'paired',
			params: ['as_nlo', 'as_nhi'],
		},
		{
			kind: 'requires',
			param: 'as_dt',
			anyOf: ['as_sitesearch'],
		},
		{
			kind: 'requires',
			param: 'radius',
			anyOf: ['location', 'lat'],
		},
		{
			kind: 'custom',
			id: 'searchRadius',
		},
	],
	responseGroups: [
		'search_metadata',
		'search_parameters',
		'search_information',
		'organic_results',
		'related_questions',
		'related_searches',
		'pagination',
		'ads',
		'knowledge_graph',
		'answer_box',
		'local_map',
		'local_results',
		'ai_overview',
		'top_stories',
		'inline_videos',
		'inline_images',
		'things_to_know',
		'discussions_and_forums',
		'immersive_products',
		'sports_results',
		'popular_destinations',
		'shopping_results',
		'news_results',
		'video_results',
		'top_sights',
		'menu_highlights',
		'events_results',
		'filters',
	],
};

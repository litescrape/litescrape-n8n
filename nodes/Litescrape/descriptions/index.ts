// Generated from the Litescrape API reference. Do not edit by hand.
import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';
import type { OperationSpec } from '../helpers/types';
import { appleMapsPlaceDescription } from './resources/appleMapsPlace';
import { bingDescription } from './resources/bing';
import { duckduckgoDescription } from './resources/duckduckgo';
import { googleMapsPlaceDescription } from './resources/googleMapsPlace';
import { googleReviewDescription } from './resources/googleReview';
import { googleSearchDescription } from './resources/googleSearch';
import { googleShoppingDescription } from './resources/googleShopping';
import { tripadvisorDescription } from './resources/tripadvisor';
import { yelpDescription } from './resources/yelp';
import { googleSearchSpec } from './operations/googleSearch';
import { googleAiOverviewSpec } from './operations/googleAiOverview';
import { googleAiModeSpec } from './operations/googleAiMode';
import { googleShoppingSpec } from './operations/googleShopping';
import { googleShoppingProductSpec } from './operations/googleShoppingProduct';
import { googleMapsSearchSpec } from './operations/googleMapsSearch';
import { googleMapsPlaceSpec } from './operations/googleMapsPlace';
import { googleMapsPopularTimesSpec } from './operations/googleMapsPopularTimes';
import { googleMapsPostsSpec } from './operations/googleMapsPosts';
import { googleMapsPhotoMetaSpec } from './operations/googleMapsPhotoMeta';
import { googleReviewsSpec } from './operations/googleReviews';
import { googleContributorReviewsSpec } from './operations/googleContributorReviews';
import { bingSearchSpec } from './operations/bingSearch';
import { bingMapsSpec } from './operations/bingMaps';
import { duckduckgoSearchSpec } from './operations/duckduckgoSearch';
import { duckduckgoMapsSpec } from './operations/duckduckgoMaps';
import { yelpSearchSpec } from './operations/yelpSearch';
import { yelpReviewsSpec } from './operations/yelpReviews';
import { tripadvisorSearchSpec } from './operations/tripadvisorSearch';
import { tripadvisorPlaceSpec } from './operations/tripadvisorPlace';
import { tripadvisorReviewsSpec } from './operations/tripadvisorReviews';
import { appleMapsPlacesSpec } from './operations/appleMapsPlaces';
import { appleMapsReviewsSpec } from './operations/appleMapsReviews';

export const resourceOptions: INodePropertyOptions[] = [
	{
		name: 'Apple Maps Place',
		value: 'appleMapsPlace',
		description: 'Apple Maps place details and Apple-attributed reviews',
	},
	{
		name: 'Bing',
		value: 'bing',
		description: 'Bing web search and Bing Maps listings',
	},
	{
		name: 'DuckDuckGo',
		value: 'duckduckgo',
		description: 'DuckDuckGo web and map results',
	},
	{
		name: 'Google Maps Place',
		value: 'googleMapsPlace',
		description: 'Google Maps search, place details, popular times, posts, and photos',
	},
	{
		name: 'Google Review',
		value: 'googleReview',
		description: 'Google Maps place reviews and contributor review histories',
	},
	{
		name: 'Google Search',
		value: 'googleSearch',
		description: 'Google Search results, AI Overviews, and AI Mode answers',
	},
	{
		name: 'Google Shopping',
		value: 'googleShopping',
		description: 'Google Shopping product grids and product pages',
	},
	{
		name: 'Tripadvisor',
		value: 'tripadvisor',
		description: 'Tripadvisor search, place details, and reviews',
	},
	{
		name: 'Yelp',
		value: 'yelp',
		description: 'Yelp business search and reviews',
	},
];

export const resourceDescriptions: INodeProperties[] = [
	...appleMapsPlaceDescription,
	...bingDescription,
	...duckduckgoDescription,
	...googleMapsPlaceDescription,
	...googleReviewDescription,
	...googleSearchDescription,
	...googleShoppingDescription,
	...tripadvisorDescription,
	...yelpDescription,
];

export const OPERATIONS: Record<string, OperationSpec> = {
	googleSearch: googleSearchSpec,
	googleAiOverview: googleAiOverviewSpec,
	googleAiMode: googleAiModeSpec,
	googleShopping: googleShoppingSpec,
	googleShoppingProduct: googleShoppingProductSpec,
	googleMapsSearch: googleMapsSearchSpec,
	googleMapsPlace: googleMapsPlaceSpec,
	googleMapsPopularTimes: googleMapsPopularTimesSpec,
	googleMapsPosts: googleMapsPostsSpec,
	googleMapsPhotoMeta: googleMapsPhotoMetaSpec,
	googleReviews: googleReviewsSpec,
	googleContributorReviews: googleContributorReviewsSpec,
	bingSearch: bingSearchSpec,
	bingMaps: bingMapsSpec,
	duckduckgoSearch: duckduckgoSearchSpec,
	duckduckgoMaps: duckduckgoMapsSpec,
	yelpSearch: yelpSearchSpec,
	yelpReviews: yelpReviewsSpec,
	tripadvisorSearch: tripadvisorSearchSpec,
	tripadvisorPlace: tripadvisorPlaceSpec,
	tripadvisorReviews: tripadvisorReviewsSpec,
	appleMapsPlaces: appleMapsPlacesSpec,
	appleMapsReviews: appleMapsReviewsSpec,
};

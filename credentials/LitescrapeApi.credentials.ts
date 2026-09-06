import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LitescrapeApi implements ICredentialType {
	name = 'litescrapeApi';

	displayName = 'Litescrape API';

	icon: Icon = { light: 'file:litescrape.svg', dark: 'file:litescrape.dark.svg' };

	documentationUrl = 'https://github.com/litescrape/litescrape-n8n#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'API key from your Litescrape dashboard, sent as a bearer token',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.litescrape.com',
			url: '/api/keys/status',
			method: 'GET',
		},
	};
}

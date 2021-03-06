export const jpoConnectSchema = {
	type: 'object',
	additionalProperties: false,
	patternProperties: {
		'^.+$': {
			type: 'object',
			properties: {
				authorizeError: { type: 'boolean' },
				authorizeSuccess: { type: 'boolean' },
				isAuthorizing: { type: 'boolean' },
				siteSlug: { type: 'string' },
				timestamp: { type: 'number' },
				userAlreadyConnected: { type: 'boolean' },
				queryObject: {
					type: 'object',
					properties: {
						_wp_nonce: { type: 'string' },
						_ui: { type: 'string' },
						_ut: { type: 'string' },
						blogname: { type: 'string' },
						calypso_env: { type: 'string' },
						client_id: { type: 'string' },
						from: { type: 'string' },
						home_url: { type: 'string' },
						jp_version: { type: 'string' },
						locale: { type: 'string' },
						onboarding: { type: 'string' },
						redirect_after_auth: { type: 'string' },
						redirect_uri: { type: 'string' },
						scope: { type: 'string' },
						secret: { type: 'string' },
						site: { type: 'string' },
						site_icon: { type: 'string' },
						site_lang: { type: 'string' },
						site_url: { type: 'string' },
						state: { type: 'string' },
						user_email: { type: 'string' },
						user_login: { type: 'string' },
					},
					additionalProperties: false
				}
			},
			additionalProperties: false
		}
	}
};

import { OAuth } from 'oauth';
import { Authentication } from '../../interfaces';

// eslint-disable-next-line import/prefer-default-export
export function createOAuthAuthenticationToken(
  authenticationData: Authentication.OAuth,
  requestData: { baseURL: string; url: string; method: string; },
) {
  const {
    baseURL,
    url,
    method,
  } = requestData;

  const oauthUrl = `${baseURL}/plugins/servlet/oauth/`;
  const oauth = new OAuth(
    `${oauthUrl}request-token`,
    `${oauthUrl}access-token`,
    authenticationData.consumerKey,
    authenticationData.consumerSecret,
    '1.0',
    null,
    'RSA-SHA1',
  );

  return oauth.authHeader(
    new URL(url, baseURL).toString(),
    authenticationData.accessToken,
    authenticationData.tokenSecret,
    method,
  );
}

export default createOAuthAuthenticationToken;

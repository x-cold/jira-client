import { Authentication } from '../../interfaces';

// eslint-disable-next-line import/prefer-default-export
export function createOAuth2AuthenticationToken(authenticationData: Authentication.OAuth2) {
  return `Bearer ${authenticationData.accessToken}`;
}

export default createOAuth2AuthenticationToken;

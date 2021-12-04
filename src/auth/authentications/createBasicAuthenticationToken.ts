import { Authentication } from '../../interfaces';
import { Base64Encoder } from '../base64Encoder';

// eslint-disable-next-line import/prefer-default-export
export function createBasicAuthenticationToken(authenticationData: Authentication.Basic) {
  let login;
  let secret;

  if ('username' in authenticationData) {
    login = authenticationData.username;
    secret = authenticationData.password;
  } else {
    login = authenticationData.email;
    secret = authenticationData.apiToken;
  }

  const token = Base64Encoder.encode(`${login}:${secret}`);

  return `Basic ${token}`;
}

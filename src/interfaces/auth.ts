import { UtilityTypes } from './utility';

export namespace Authentication {
  export type JWT = {
    /** The key from the app descriptor. */
    issuer: string;
    /** The sharedsecret key received during the app installation handshake */
    secret: string;
    /** Token expiry time (default 3 minutes after issuing) */
    expiryTimeSeconds?: number;
  };

  export type Basic = UtilityTypes.XOR<{
    email: string;
    apiToken: string;
  }, {
    username: string;
    password: string;
  }>;

  export interface OAuth {
    consumerKey: string;
    consumerSecret: string;
    accessToken: string;
    tokenSecret: string;
  }

  export type OAuth2 = {
    accessToken: string;
  };

  export type Types = UtilityTypes.XOR<{
    jwt: Authentication.JWT;
  }, UtilityTypes.XOR<{
    oauth: Authentication.OAuth;
  }, UtilityTypes.XOR<{
    basic: Authentication.Basic;
  }, {
    oauth2: Authentication.OAuth2;
  }>>>;
}

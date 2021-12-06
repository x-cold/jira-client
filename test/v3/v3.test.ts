import { Version3Client } from '../../src';

/**
 * Dummy test
 */
describe('V3 test', () => {
  const client = new Version3Client({
    baseURL: 'https://x-cold.atlassian.net/',
    authentication: {
      basic: {
        username: 'yyyyy',
        password: 'xxxxx',
      },
    },
  });

  it('client should be a Version3Client instance', () => {
    expect(client).toBeInstanceOf(Version3Client);
  });

  // GET success
  it('should get fields', async () => {
    try {
      const data = await client.getFields();
      expect(data).toBeInstanceOf(Array);
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  // POST success
  it('should create field', async () => {
    try {
      // No permission
      await client.createCustomField({
        name: 'test-field-pengfei',
        description: 'test',
        type: 'string',
      });
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  it('should use api token to auth', () => {
    const myClient = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
      authentication: {
        basic: {
          email: 'YOUR@EMAIL.ORG',
          apiToken: 'YOUR_API_TOKEN',
        },
      },
    });
    expect(myClient).toBeInstanceOf(Version3Client);
  });

  it('should use oauth to auth', () => {
    const myClient = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
      authentication: {
        oauth: {
          consumerKey: 'your consumer key',
          consumerSecret: '-----BEGIN RSA PRIVATE KEY-----\n" + "some private key\n" + "-----END RSA PRIVATE KEY-----',
          accessToken: 'your access token',
          tokenSecret: 'your token secret',
        },
      },
    });
    expect(myClient).toBeInstanceOf(Version3Client);
  });

  it('should use oauth2 to auth', () => {
    const myClient = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
      authentication: {
        oauth2: {
          accessToken: 'YOUR_ACCESS_TOKEN',
        },
      },
    });
    expect(myClient).toBeInstanceOf(Version3Client);
  });

  it('should use jwt to auth', () => {
    const myClient = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
      authentication: {
        jwt: {
          issuer: 'ISSUER',
          secret: 'shhhh',
          expiryTimeSeconds: 180,
        },
      },
    });
    expect(myClient).toBeInstanceOf(Version3Client);
  });
});

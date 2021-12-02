import { Version3Client } from '../src';

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('Version3Client is instantiable', () => {
    expect(Version3Client).toBeInstanceOf(Object);
  });

  it('Version3Client instance', () => {
    const client = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
      securityWorker: () => ({
      }),
    });
    expect(client).toBeInstanceOf(Object);
  });
});

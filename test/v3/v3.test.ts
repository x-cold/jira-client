import { Version3Client } from '../../src';

/**
 * Dummy test
 */
describe('V3 test', () => {
  it('Version3Client instance', () => {
    const client = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
    });
    expect(client).toBeInstanceOf(Object);
  });
});

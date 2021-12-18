import { Version3Client, V3Types as JiraTypes } from '../src';

const obj: JiraTypes.IssueTypeSchemeUpdateDetails = {};

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('Version3Client is instantiable', () => {
    expect(Version3Client).toBeInstanceOf(Object);
    expect(obj).toBeInstanceOf(Object);
  });

  it('Version3Client instance', () => {
    const client = new Version3Client({
      baseURL: 'https://your-domain.atlassian.net',
    });
    expect(client).toBeInstanceOf(Object);
  });
});

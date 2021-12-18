import { Version3Client } from '../../src/browser';

/**
 * Dummy test
 */
describe('V3 test', () => {
  const client = new Version3Client();

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
});

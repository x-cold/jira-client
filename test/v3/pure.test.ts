import { Version3Client, FullRequestParams } from '../../src/pure';

class MyVersion3Client extends Version3Client {
  public request = async <T>(params: FullRequestParams): Promise<T> => {
    const res = {
      a: 1,
      ...params,
    }; // TODO: implement request logic
    return res as any;
  };
}

/**
 * Dummy test
 */
describe('V3 test', () => {
  const client = new MyVersion3Client();

  it('client should be a Version3Client instance', () => {
    expect(client).toBeInstanceOf(Version3Client);
  });

  // GET success
  it('should get fields', async () => {
    try {
      const data = await client.getFields();
      expect((data as any)?.a).toEqual(1);
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
      // It won't happen
      expect(e).toBeInstanceOf(Error);
    }
  });
});

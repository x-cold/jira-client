import { FullRequestParams, ContentType } from '../interfaces';

export {
  ContentType,
};

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

// @override
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export class HttpClient<SecurityDataType = unknown> {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public request = async <T, E>(params: FullRequestParams): Promise<T> => params as any;
}

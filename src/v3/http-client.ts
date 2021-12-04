/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { BaseClient } from '../client';
import { FullRequestParams, ContentType } from '../interfaces';

export {
  ContentType
};

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export class HttpClient<SecurityDataType = unknown> extends BaseClient {
  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T, E>({
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const responseFormat = format || void 0;
    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }
    const modifiedRequestConfig = await this.wrapRequestConfig({
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(params.headers || {}),
      },
      params: query,
      data: body,
      url: path,
      responseType: responseFormat,
    });
    return this.instance.request(modifiedRequestConfig);
  };
}

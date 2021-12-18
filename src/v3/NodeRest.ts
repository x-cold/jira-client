import axios, { AxiosInstance } from 'axios';
import {
  Authentication,
  RequestConfig,
  FullRequestParams,
  ContentType,
} from '../interfaces';
import { AuthenticationService } from '../auth/authenticationService';
import { paramSerializer, removeUndefinedProperties, createFormData } from '../utils';
import { Rest } from './Rest';

const STRICT_GDPR_FLAG = 'x-atlassian-force-account-id';
const ATLASSIAN_TOKEN_CHECK_FLAG = 'X-Atlassian-Token';
const ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE = 'no-check';

export interface Config {
  baseURL: string;
  strictGDPR?: boolean;
  /**
   * Adds `'X-Atlassian-Token': 'no-check'` to each request header
   */
  noCheckAtlassianToken?: boolean;
  baseRequestConfig?: RequestConfig;
  authentication?: Authentication.Types;
}

class NodeJsVersion3Client extends Rest {
  instance: AxiosInstance;

  constructor(protected readonly config: Config) {
    super();
    const { baseRequestConfig = {} } = config;
    this.instance = axios.create({
      ...baseRequestConfig,
      paramsSerializer: paramSerializer.bind(this),
      baseURL: config.baseURL,
      headers: removeUndefinedProperties({
        [STRICT_GDPR_FLAG]: config.strictGDPR,
        [ATLASSIAN_TOKEN_CHECK_FLAG]: config.noCheckAtlassianToken
          ? ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE : undefined,
        ...(baseRequestConfig?.headers || {}),
      }),
    });
  }

  async wrapRequestConfig(requestConfig: RequestConfig): Promise<RequestConfig> {
    const modifiedRequestConfig = {
      ...requestConfig,
      headers: removeUndefinedProperties({
        Authorization: await AuthenticationService
          .getAuthenticationToken(this.config.authentication, {
            baseURL: this.config.baseURL,
            url: this.instance.getUri(requestConfig),
            method: requestConfig.method!,
          }),
        ...requestConfig.headers,
      }),
    };
    return modifiedRequestConfig;
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public request = async <T, E>({
    path,
    type,
    query,
    format,
    body,
    method,
    ...params
  }: FullRequestParams): Promise<T> => {
    const responseFormat = format || undefined;
    let newBody = body;
    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      newBody = createFormData(body as Record<string, unknown>);
    }
    const modifiedRequestConfig = await this.wrapRequestConfig({
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(params.headers || {}),
      },
      params: query,
      data: newBody,
      url: path,
      method,
      responseType: responseFormat,
    });
    const response = await this.instance.request<T>(modifiedRequestConfig);
    return response.data;
  };
  // async request<T>(requestConfig: RequestConfig): Promise<T> {
  //   /* istanbul ignore */
  //   try {
  //     const modifiedRequestConfig = await this.wrapRequestConfig(requestConfig);
  //     const response = await this.instance.request<T>(modifiedRequestConfig);
  //     return response.data;
  //   } catch (e: unknown) {
  //     console.error('Jira rest sdk request error', e);
  //     throw e;
  //   }
  // }
}

export default NodeJsVersion3Client;

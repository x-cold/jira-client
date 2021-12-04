import axios, { AxiosInstance } from 'axios';
import { Authentication, RequestConfig } from '../interfaces';
import type { Client } from './client';
import { AuthenticationService } from '../auth/authenticationService';
import { paramSerializer, removeUndefinedProperties } from '../util';

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

export default class BaseClient implements Client {
  private instance: AxiosInstance;

  constructor(protected readonly config: Config) {
    this.instance = axios.create({
      paramsSerializer: paramSerializer.bind(this),
      ...config.baseRequestConfig,
      baseURL: config.baseURL,
      headers: removeUndefinedProperties({
        [STRICT_GDPR_FLAG]: config.strictGDPR,
        [ATLASSIAN_TOKEN_CHECK_FLAG]: config.noCheckAtlassianToken
          ? ATLASSIAN_TOKEN_CHECK_NOCHECK_VALUE : undefined,
        ...config.baseRequestConfig?.headers,
      }),
    });
  }

  async request<T>(requestConfig: RequestConfig): Promise<T> {
    try {
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

      const response = await this.instance.request<T>(modifiedRequestConfig);
      return response.data;
    } catch (e: unknown) {
      console.error('Jira rest sdk request error', e);
      throw e;
    }
  }
}

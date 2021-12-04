import { RequestConfig } from '../interfaces';

export interface Client {
  request<T>(requestConfig: RequestConfig): Promise<T>;
}

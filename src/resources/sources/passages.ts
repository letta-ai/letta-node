// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SourcesAPI from './sources';

export class Passages extends APIResource {
  /**
   * List all passages associated with a data source.
   */
  list(
    sourceId: string,
    params?: PassageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PassageListResponse>;
  list(sourceId: string, options?: Core.RequestOptions): Core.APIPromise<PassageListResponse>;
  list(
    sourceId: string,
    params: PassageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PassageListResponse> {
    if (isRequestOptions(params)) {
      return this.list(sourceId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/sources/${sourceId}/passages`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type PassageListResponse = Array<SourcesAPI.Passage>;

export interface PassageListParams {
  user_id?: string;
}

export declare namespace Passages {
  export { type PassageListResponse as PassageListResponse, type PassageListParams as PassageListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Active extends APIResource {
  /**
   * List all active jobs.
   */
  list(params?: ActiveListParams, options?: Core.RequestOptions): Core.APIPromise<ActiveListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ActiveListResponse>;
  list(
    params: ActiveListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActiveListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { user_id } = params;
    return this._client.get('/v1/jobs/active', {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type ActiveListResponse = Array<Shared.Job>;

export interface ActiveListParams {
  user_id?: string;
}

export declare namespace Active {
  export { type ActiveListResponse as ActiveListResponse, type ActiveListParams as ActiveListParams };
}

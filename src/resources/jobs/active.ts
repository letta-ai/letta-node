// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Active extends APIResource {
  /**
   * List all active jobs.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ActiveListResponse> {
    return this._client.get('/v1/jobs/active', options);
  }
}

export type ActiveListResponse = Array<Shared.Job>;

export declare namespace Active {
  export { type ActiveListResponse as ActiveListResponse };
}

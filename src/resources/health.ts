// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Health extends APIResource {
  /**
   * Health Check
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Health> {
    return this._client.get('/v1/health/', options);
  }
}

/**
 * Health check response body
 */
export interface Health {
  status: string;

  version: string;
}

export declare namespace Health {
  export { type Health as Health };
}

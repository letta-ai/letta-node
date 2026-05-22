// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

/**
 * Health check response body
 */
export interface HealthResponse {
  status: string;

  version: string;
}

export declare namespace TopLevel {
  export {
    type HealthResponse as HealthResponse
  };
}

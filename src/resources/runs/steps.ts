// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StepsStepsAPI from '../steps/steps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Steps extends APIResource {
  /**
   * Get steps associated with a run with filtering options.
   */
  list(
    runID: string,
    query: StepListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StepListResponse> {
    return this._client.get(path`/v1/runs/${runID}/steps`, { query, ...options });
  }
}

export type StepListResponse = Array<StepsStepsAPI.Step>;

export interface StepListParams {
  /**
   * Cursor for pagination
   */
  after?: string | null;

  /**
   * Cursor for pagination
   */
  before?: string | null;

  /**
   * Maximum number of messages to return
   */
  limit?: number | null;

  /**
   * Sort order for steps by creation time. 'asc' for oldest first, 'desc' for newest
   * first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export declare namespace Steps {
  export { type StepListResponse as StepListResponse, type StepListParams as StepListParams };
}

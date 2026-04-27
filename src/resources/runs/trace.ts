// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trace extends APIResource {
  /**
   * Retrieve OTEL trace spans for a run.
   *
   * Returns a filtered set of spans relevant for observability:
   *
   * - agent_step: Individual agent reasoning steps
   * - tool executions: Tool call spans
   * - Root span: The top-level request span
   * - time_to_first_token: TTFT measurement span
   *
   * Requires ClickHouse to be configured for trace storage.
   */
  retrieve(
    runID: string,
    query: TraceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TraceRetrieveResponse> {
    return this._client.get(path`/v1/runs/${runID}/trace`, { query, ...options });
  }
}

export type TraceRetrieveResponse = Array<{ [key: string]: unknown }>;

export interface TraceRetrieveParams {
  /**
   * Maximum number of spans to return
   */
  limit?: number;
}

export declare namespace Trace {
  export {
    type TraceRetrieveResponse as TraceRetrieveResponse,
    type TraceRetrieveParams as TraceRetrieveParams,
  };
}

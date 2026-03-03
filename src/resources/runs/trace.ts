// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
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
    params: TraceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TraceRetrieveResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.get(path`/v1/runs/${runID}/trace`, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type TraceRetrieveResponse = Array<{ [key: string]: unknown }>;

export interface TraceRetrieveParams {
  /**
   * Query param: Maximum number of spans to return
   */
  limit?: number;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export declare namespace Trace {
  export {
    type TraceRetrieveResponse as TraceRetrieveResponse,
    type TraceRetrieveParams as TraceRetrieveParams,
  };
}

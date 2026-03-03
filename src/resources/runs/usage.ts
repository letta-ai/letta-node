// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Get usage statistics for a run.
   */
  retrieve(
    runID: string,
    params: UsageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageRetrieveResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/runs/${runID}/usage`, {
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

export interface UsageRetrieveResponse {
  completion_tokens?: number;

  completion_tokens_details?: UsageRetrieveResponse.CompletionTokensDetails | null;

  prompt_tokens?: number;

  prompt_tokens_details?: UsageRetrieveResponse.PromptTokensDetails | null;

  total_tokens?: number;
}

export namespace UsageRetrieveResponse {
  export interface CompletionTokensDetails {
    reasoning_tokens?: number | null;
  }

  export interface PromptTokensDetails {
    cache_creation_tokens?: number | null;

    cache_read_tokens?: number | null;

    cached_tokens?: number | null;
  }
}

export interface UsageRetrieveParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export declare namespace Usage {
  export {
    type UsageRetrieveResponse as UsageRetrieveResponse,
    type UsageRetrieveParams as UsageRetrieveParams,
  };
}

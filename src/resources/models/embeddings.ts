// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ModelsAPI from './models';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * List available embedding models using the asynchronous implementation for
   * improved performance.
   *
   * Returns EmbeddingModel format which extends EmbeddingConfig with additional
   * metadata fields. Legacy EmbeddingConfig fields are marked as deprecated but
   * still available for backward compatibility.
   */
  list(
    params: EmbeddingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmbeddingListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get('/v1/models/embedding', {
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

export type EmbeddingListResponse = Array<ModelsAPI.EmbeddingModel>;

export interface EmbeddingListParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingListResponse as EmbeddingListResponse,
    type EmbeddingListParams as EmbeddingListParams,
  };
}

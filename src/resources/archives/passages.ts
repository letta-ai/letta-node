// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PassagesAPI from '../passages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Passages extends APIResource {
  /**
   * Create a new passage in an archive.
   *
   * This adds a passage to the archive and creates embeddings for vector storage.
   */
  create(
    archiveID: string,
    params: PassageCreateParams,
    options?: RequestOptions,
  ): APIPromise<PassagesAPI.Passage> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post(path`/v1/archives/${archiveID}/passages`, {
      body,
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

  /**
   * Delete a passage from an archive.
   *
   * This permanently removes the passage from both the database and vector storage
   * (if applicable).
   */
  delete(passageID: string, params: PassageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const {
      archive_id,
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params;
    return this._client.delete(path`/v1/archives/${archive_id}/passages/${passageID}`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Create multiple passages in an archive.
   *
   * This adds passages to the archive and creates embeddings for vector storage.
   */
  createMany(
    archiveID: string,
    params: PassageCreateManyParams,
    options?: RequestOptions,
  ): APIPromise<PassageCreateManyResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post(path`/v1/archives/${archiveID}/passages/batch`, {
      body,
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

export type PassageCreateManyResponse = Array<PassagesAPI.Passage>;

export interface PassageCreateParams {
  /**
   * Body param: The text content of the passage
   */
  text: string;

  /**
   * Body param: Optional creation datetime for the passage (ISO 8601 format)
   */
  created_at?: string | null;

  /**
   * Body param: Optional metadata for the passage
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional tags for categorizing the passage
   */
  tags?: Array<string> | null;

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

export interface PassageDeleteParams {
  /**
   * Path param: The ID of the archive in the format 'archive-<uuid4>'
   */
  archive_id: string;

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

export interface PassageCreateManyParams {
  /**
   * Body param: Passages to create in the archive
   */
  passages: Array<PassageCreateManyParams.Passage>;

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

export namespace PassageCreateManyParams {
  /**
   * Request model for creating a passage in an archive.
   */
  export interface Passage {
    /**
     * The text content of the passage
     */
    text: string;

    /**
     * Optional creation datetime for the passage (ISO 8601 format)
     */
    created_at?: string | null;

    /**
     * Optional metadata for the passage
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Optional tags for categorizing the passage
     */
    tags?: Array<string> | null;
  }
}

export declare namespace Passages {
  export {
    type PassageCreateManyResponse as PassageCreateManyResponse,
    type PassageCreateParams as PassageCreateParams,
    type PassageDeleteParams as PassageDeleteParams,
    type PassageCreateManyParams as PassageCreateManyParams,
  };
}

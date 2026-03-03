// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PassagesAPI from './passages';
import {
  PassageCreateManyParams,
  PassageCreateManyResponse,
  PassageCreateParams,
  PassageDeleteParams,
  Passages,
} from './passages';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Archives extends APIResource {
  passages: PassagesAPI.Passages = new PassagesAPI.Passages(this._client);

  /**
   * Create a new archive.
   */
  create(params: ArchiveCreateParams, options?: RequestOptions): APIPromise<Archive> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post('/v1/archives/', {
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
   * Get a single archive by its ID.
   */
  retrieve(
    archiveID: string,
    params: ArchiveRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Archive> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/archives/${archiveID}`, {
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
   * Update an existing archive's name and/or description.
   */
  update(archiveID: string, params: ArchiveUpdateParams, options?: RequestOptions): APIPromise<Archive> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.patch(path`/v1/archives/${archiveID}`, {
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
   * Get a list of all archives for the current organization with optional filters
   * and pagination.
   */
  list(
    params: ArchiveListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ArchivesArrayPage, Archive> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList('/v1/archives/', ArrayPage<Archive>, {
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

  /**
   * Delete an archive by its ID.
   */
  delete(
    archiveID: string,
    params: ArchiveDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.delete(path`/v1/archives/${archiveID}`, {
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
}

export type ArchivesArrayPage = ArrayPage<Archive>;

/**
 * Representation of an archive - a collection of archival passages that can be
 * shared between agents.
 */
export interface Archive {
  /**
   * The human-friendly ID of the Archive
   */
  id: string;

  /**
   * The creation date of the archive
   */
  created_at: string;

  /**
   * The name of the archive
   */
  name: string;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * A description of the archive
   */
  description?: string | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;

  /**
   * The vector database provider used for this archive's passages
   */
  vector_db_provider?: VectorDBProvider;
}

/**
 * Supported vector database providers for archival memory
 */
export type VectorDBProvider = 'native' | 'tpuf' | 'pinecone';

export interface ArchiveCreateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Embedding model handle for the archive
   */
  embedding?: string | null;

  /**
   * Body param: Configuration for embedding model connection and processing
   * parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

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

export interface ArchiveRetrieveParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface ArchiveUpdateParams {
  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  name?: string | null;

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

export interface ArchiveListParams extends ArrayPageParams {
  /**
   * Query param: Only archives attached to this agent ID
   */
  agent_id?: string | null;

  /**
   * Query param: Filter by archive name (exact match)
   */
  name?: string | null;

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

export interface ArchiveDeleteParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

Archives.Passages = Passages;

export declare namespace Archives {
  export {
    type Archive as Archive,
    type VectorDBProvider as VectorDBProvider,
    type ArchivesArrayPage as ArchivesArrayPage,
    type ArchiveCreateParams as ArchiveCreateParams,
    type ArchiveRetrieveParams as ArchiveRetrieveParams,
    type ArchiveUpdateParams as ArchiveUpdateParams,
    type ArchiveListParams as ArchiveListParams,
    type ArchiveDeleteParams as ArchiveDeleteParams,
  };

  export {
    Passages as Passages,
    type PassageCreateManyResponse as PassageCreateManyResponse,
    type PassageCreateParams as PassageCreateParams,
    type PassageDeleteParams as PassageDeleteParams,
    type PassageCreateManyParams as PassageCreateManyParams,
  };
}

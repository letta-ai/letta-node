// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { AgentListParams, AgentListResponse, Agents } from './agents';
import * as FilesAPI from './files';
import {
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileListResponsesArrayPage,
  FileRetrieveParams,
  FileRetrieveResponse,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './files';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Create a new data folder.
   */
  create(params: FolderCreateParams, options?: RequestOptions): APIPromise<Folder> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post('/v1/folders/', {
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
   * Get a folder by ID
   */
  retrieve(
    folderID: string,
    params: FolderRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Folder> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/folders/${folderID}`, {
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
   * Update the name or documentation of an existing data folder.
   */
  update(folderID: string, params: FolderUpdateParams, options?: RequestOptions): APIPromise<Folder> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.patch(path`/v1/folders/${folderID}`, {
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
   * List all data folders created by a user.
   */
  list(
    params: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FoldersArrayPage, Folder> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList('/v1/folders/', ArrayPage<Folder>, {
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
   * Delete a data folder.
   */
  delete(
    folderID: string,
    params: FolderDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.delete(path`/v1/folders/${folderID}`, {
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

export type FoldersArrayPage = ArrayPage<Folder>;

/**
 * Representation of a folder, which is a collection of files and passages.
 */
export interface Folder {
  /**
   * The human-friendly ID of the Source
   */
  id: string;

  /**
   * The embedding configuration used by the folder.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The name of the folder.
   */
  name: string;

  /**
   * The timestamp when the folder was created.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this Tool.
   */
  created_by_id?: string | null;

  /**
   * The description of the folder.
   */
  description?: string | null;

  /**
   * Instructions for how to use the folder.
   */
  instructions?: string | null;

  /**
   * The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;

  /**
   * Metadata associated with the folder.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The timestamp when the folder was last updated.
   */
  updated_at?: string | null;
}

export type FolderDeleteResponse = unknown;

export interface FolderCreateParams {
  /**
   * Body param: The name of the source.
   */
  name: string;

  /**
   * Body param: The description of the source.
   */
  description?: string | null;

  /**
   * Body param: The handle for the embedding config used by the source.
   */
  embedding?: string | null;

  /**
   * Body param: The chunk size of the embedding.
   */
  embedding_chunk_size?: number | null;

  /**
   * Body param: Configuration for embedding model connection and processing
   * parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Body param: Instructions for how to use the source.
   */
  instructions?: string | null;

  /**
   * Body param: Metadata associated with the source.
   */
  metadata?: { [key: string]: unknown } | null;

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

export interface FolderRetrieveParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface FolderUpdateParams {
  /**
   * Body param: The description of the source.
   */
  description?: string | null;

  /**
   * Body param: Configuration for embedding model connection and processing
   * parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Body param: Instructions for how to use the source.
   */
  instructions?: string | null;

  /**
   * Body param: Metadata associated with the source.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: The name of the source.
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

export interface FolderListParams extends ArrayPageParams {
  /**
   * Query param: Folder name to filter by
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

export interface FolderDeleteParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

Folders.Files = Files;
Folders.Agents = Agents;

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FoldersArrayPage as FoldersArrayPage,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderListParams as FolderListParams,
    type FolderDeleteParams as FolderDeleteParams,
  };

  export {
    Files as Files,
    type FileRetrieveResponse as FileRetrieveResponse,
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileListResponsesArrayPage as FileListResponsesArrayPage,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Agents as Agents,
    type AgentListResponse as AgentListResponse,
    type AgentListParams as AgentListParams,
  };
}

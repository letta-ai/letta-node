// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as ArchivesAPI from '../archives/archives';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Get the folders associated with an agent.
   */
  list(
    agentID: string,
    params: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FolderListResponsesArrayPage, FolderListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList(path`/v1/agents/${agentID}/folders`, ArrayPage<FolderListResponse>, {
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
   * Attach a folder to an agent.
   */
  attach(
    folderID: string,
    params: FolderAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState | null> {
    const {
      agent_id,
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/folders/attach/${folderID}`, {
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
   * Detach a folder from an agent.
   */
  detach(
    folderID: string,
    params: FolderDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState | null> {
    const {
      agent_id,
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/folders/detach/${folderID}`, {
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

export type FolderListResponsesArrayPage = ArrayPage<FolderListResponse>;

/**
 * (Deprecated: Use Folder) Representation of a source, which is a collection of
 * files and passages.
 */
export interface FolderListResponse {
  /**
   * The human-friendly ID of the Source
   */
  id: string;

  /**
   * The embedding configuration used by the source.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The name of the source.
   */
  name: string;

  /**
   * The timestamp when the source was created.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this Tool.
   */
  created_by_id?: string | null;

  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * Instructions for how to use the source.
   */
  instructions?: string | null;

  /**
   * The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;

  /**
   * Metadata associated with the source.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The timestamp when the source was last updated.
   */
  updated_at?: string | null;

  /**
   * The vector database provider used for this source's passages
   */
  vector_db_provider?: ArchivesAPI.VectorDBProvider;
}

export interface FolderListParams extends ArrayPageParams {
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

export interface FolderAttachParams {
  /**
   * Path param: The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;

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

export interface FolderDetachParams {
  /**
   * Path param: The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;

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

export declare namespace Folders {
  export {
    type FolderListResponse as FolderListResponse,
    type FolderListResponsesArrayPage as FolderListResponsesArrayPage,
    type FolderListParams as FolderListParams,
    type FolderAttachParams as FolderAttachParams,
    type FolderDetachParams as FolderDetachParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArchivesAPI from '../archives';
import * as AgentsAPI from './agents';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Get the folders associated with an agent.
   */
  list(
    agentID: string,
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FolderListResponsesArrayPage, FolderListResponse> {
    return this._client.getAPIList(path`/v1/agents/${agentID}/folders`, ArrayPage<FolderListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Attach a folder to an agent.
   */
  attach(
    folderID: string,
    params: FolderAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/folders/attach/${folderID}`, options);
  }

  /**
   * Detach a folder from an agent.
   */
  detach(
    folderID: string,
    params: FolderDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/folders/detach/${folderID}`, options);
  }
}

export type FolderListResponsesArrayPage = ArrayPage<FolderListResponse>;

/**
 * Representation of a source, which is a collection of files and passages.
 *
 * Parameters: id (str): The ID of the source name (str): The name of the source.
 * embedding_config (EmbeddingConfig): The embedding configuration used by the
 * source. user_id (str): The ID of the user that created the source. metadata
 * (dict): Metadata associated with the source. description (str): The description
 * of the source.
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

export interface FolderListParams extends ArrayPageParams {}

export interface FolderAttachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface FolderDetachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
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

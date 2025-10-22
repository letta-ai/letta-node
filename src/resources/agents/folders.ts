// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArchivesAPI from '../archives';
import * as AgentsAPI from './agents';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
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
  ): APIPromise<FolderListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/folders`, { query, ...options });
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

export type FolderListResponse = Array<FolderListResponse.FolderListResponseItem>;

export namespace FolderListResponse {
  /**
   * Representation of a source, which is a collection of files and passages.
   *
   * Parameters: id (str): The ID of the source name (str): The name of the source.
   * embedding_config (EmbeddingConfig): The embedding configuration used by the
   * source. user_id (str): The ID of the user that created the source. metadata
   * (dict): Metadata associated with the source. description (str): The description
   * of the source.
   */
  export interface FolderListResponseItem {
    /**
     * The embedding configuration used by the source.
     */
    embedding_config: ModelsAPI.EmbeddingConfig;

    /**
     * The name of the source.
     */
    name: string;

    /**
     * The human-friendly ID of the Source
     */
    id?: string;

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
}

export interface FolderListParams {
  /**
   * Source ID cursor for pagination. Returns sources that come after this source ID
   * in the specified sort order
   */
  after?: string | null;

  /**
   * Source ID cursor for pagination. Returns sources that come before this source ID
   * in the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of sources to return
   */
  limit?: number | null;

  /**
   * Sort order for sources by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

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
    type FolderListParams as FolderListParams,
    type FolderAttachParams as FolderAttachParams,
    type FolderDetachParams as FolderDetachParams,
  };
}

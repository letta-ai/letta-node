// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { AgentListParams, AgentListResponse, Agents } from './agents';
import * as FilesAPI from './files';
import {
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './files';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Create a new data folder.
   */
  create(body: FolderCreateParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.post('/v1/folders/', { body, ...options });
  }

  /**
   * Get a folder by ID
   */
  retrieve(folderID: string, options?: RequestOptions): APIPromise<Folder> {
    return this._client.get(path`/v1/folders/${folderID}`, options);
  }

  /**
   * Update the name or documentation of an existing data folder.
   */
  update(folderID: string, body: FolderUpdateParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.patch(path`/v1/folders/${folderID}`, { body, ...options });
  }

  /**
   * List all data folders created by a user.
   */
  list(
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListResponse> {
    return this._client.get('/v1/folders/', { query, ...options });
  }

  /**
   * Delete a data folder.
   */
  delete(folderID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/folders/${folderID}`, options);
  }

  /**
   * Count all data folders created by a user.
   */
  count(options?: RequestOptions): APIPromise<FolderCountResponse> {
    return this._client.get('/v1/folders/count', options);
  }
}

/**
 * Representation of a folder, which is a collection of files and passages.
 *
 * Parameters: id (str): The ID of the folder name (str): The name of the folder.
 * embedding_config (EmbeddingConfig): The embedding configuration used by the
 * folder. user_id (str): The ID of the user that created the folder. metadata
 * (dict): Metadata associated with the folder. description (str): The description
 * of the folder.
 */
export interface Folder {
  /**
   * The embedding configuration used by the folder.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The name of the folder.
   */
  name: string;

  /**
   * The human-friendly ID of the Source
   */
  id?: string;

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

export type FolderListResponse = Array<Folder>;

export type FolderDeleteResponse = unknown;

export type FolderCountResponse = number;

export interface FolderCreateParams {
  /**
   * The name of the source.
   */
  name: string;

  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * The handle for the embedding config used by the source.
   */
  embedding?: string | null;

  /**
   * The chunk size of the embedding.
   */
  embedding_chunk_size?: number | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Instructions for how to use the source.
   */
  instructions?: string | null;

  /**
   * Metadata associated with the source.
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface FolderUpdateParams {
  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Instructions for how to use the source.
   */
  instructions?: string | null;

  /**
   * Metadata associated with the source.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The name of the source.
   */
  name?: string | null;
}

export interface FolderListParams {
  /**
   * Folder ID cursor for pagination. Returns folders that come after this folder ID
   * in the specified sort order
   */
  after?: string | null;

  /**
   * Folder ID cursor for pagination. Returns folders that come before this folder ID
   * in the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of folders to return
   */
  limit?: number | null;

  /**
   * Folder name to filter by
   */
  name?: string | null;

  /**
   * Sort order for folders by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

Folders.Files = Files;
Folders.Agents = Agents;

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderListResponse as FolderListResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCountResponse as FolderCountResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderListParams as FolderListParams,
  };

  export {
    Files as Files,
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
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

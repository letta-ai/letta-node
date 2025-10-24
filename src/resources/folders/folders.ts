// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { AgentListParams, AgentListResponse, AgentListResponsesArrayPage, Agents } from './agents';
import * as FilesAPI from './files';
import {
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileListResponsesArrayPage,
  FileUploadParams,
  FileUploadResponse,
  Files,
} from './files';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
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
   * List all data folders created by a user.
   */
  list(
    query: FolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FoldersArrayPage, Folder> {
    return this._client.getAPIList('/v1/folders/', ArrayPage<Folder>, { query, ...options });
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

  /**
   * Update the name or documentation of an existing data folder.
   */
  modify(folderID: string, body: FolderModifyParams, options?: RequestOptions): APIPromise<Folder> {
    return this._client.patch(path`/v1/folders/${folderID}`, { body, ...options });
  }
}

export type FoldersArrayPage = ArrayPage<Folder>;

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

export interface FolderListParams extends ArrayPageParams {
  /**
   * Folder name to filter by
   */
  name?: string | null;
}

export interface FolderModifyParams {
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

Folders.Files = Files;
Folders.Agents = Agents;

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCountResponse as FolderCountResponse,
    type FoldersArrayPage as FoldersArrayPage,
    type FolderCreateParams as FolderCreateParams,
    type FolderListParams as FolderListParams,
    type FolderModifyParams as FolderModifyParams,
  };

  export {
    Files as Files,
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileListResponsesArrayPage as FileListResponsesArrayPage,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileUploadParams as FileUploadParams,
  };

  export {
    Agents as Agents,
    type AgentListResponse as AgentListResponse,
    type AgentListResponsesArrayPage as AgentListResponsesArrayPage,
    type AgentListParams as AgentListParams,
  };
}

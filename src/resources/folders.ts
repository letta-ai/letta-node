// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ModelsAPI from './models';
import * as SourcesAPI from './sources/sources';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Folders extends APIResource {
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

  /**
   * Delete a file from a folder.
   */
  deleteFile(fileID: string, params: FolderDeleteFileParams, options?: RequestOptions): APIPromise<void> {
    const { folder_id } = params;
    return this._client.delete(path`/v1/folders/${folder_id}/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * **Deprecated**: Please use the list endpoint `GET /v1/folders?name=` instead.
   *
   * Get a folder by name.
   *
   * @deprecated
   */
  getByName(folderName: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/v1/folders/name/${folderName}`, options);
  }

  /**
   * Get all agent IDs that have the specified folder attached.
   */
  listAgents(
    folderID: string,
    query: FolderListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListAgentsResponse> {
    return this._client.get(path`/v1/folders/${folderID}/agents`, { query, ...options });
  }

  /**
   * List paginated files associated with a data folder.
   */
  listFiles(
    folderID: string,
    query: FolderListFilesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListFilesResponse> {
    return this._client.get(path`/v1/folders/${folderID}/files`, { query, ...options });
  }

  /**
   * List all passages associated with a data folder.
   */
  listPassages(
    folderID: string,
    query: FolderListPassagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FolderListPassagesResponse> {
    return this._client.get(path`/v1/folders/${folderID}/passages`, { query, ...options });
  }

  /**
   * Get aggregated metadata for all folders in an organization.
   *
   * Returns structured metadata including:
   *
   * - Total number of folders
   * - Total number of files across all folders
   * - Total size of all files
   * - Per-source breakdown with file details (file_name, file_size per file) if
   *   include_detailed_per_source_metadata is True
   */
  retrieveMetadata(
    query: FolderRetrieveMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourcesAPI.OrganizationSourcesStats> {
    return this._client.get('/v1/folders/metadata', { query, ...options });
  }

  /**
   * Upload a file to a data folder.
   */
  uploadFile(
    folderID: string,
    params: FolderUploadFileParams,
    options?: RequestOptions,
  ): APIPromise<SourcesAPI.FileMetadata> {
    const { duplicate_handling, name, ...body } = params;
    return this._client.post(
      path`/v1/folders/${folderID}/upload`,
      multipartFormRequestOptions({ query: { duplicate_handling, name }, body, ...options }, this._client),
    );
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

export type FolderGetByNameResponse = string;

export type FolderListAgentsResponse = Array<string>;

export type FolderListFilesResponse = Array<SourcesAPI.FileMetadata>;

export type FolderListPassagesResponse = Array<SourcesAPI.Passage>;

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

export interface FolderDeleteFileParams {
  folder_id: string;
}

export interface FolderListAgentsParams {
  /**
   * Agent ID cursor for pagination. Returns agents that come after this agent ID in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Agent ID cursor for pagination. Returns agents that come before this agent ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of agents to return
   */
  limit?: number | null;

  /**
   * Sort order for agents by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export interface FolderListFilesParams {
  /**
   * File ID cursor for pagination. Returns files that come after this file ID in the
   * specified sort order
   */
  after?: string | null;

  /**
   * File ID cursor for pagination. Returns files that come before this file ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Whether to include full file content
   */
  include_content?: boolean;

  /**
   * Maximum number of files to return
   */
  limit?: number | null;

  /**
   * Sort order for files by creation time. 'asc' for oldest first, 'desc' for newest
   * first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export interface FolderListPassagesParams {
  /**
   * Passage ID cursor for pagination. Returns passages that come after this passage
   * ID in the specified sort order
   */
  after?: string | null;

  /**
   * Passage ID cursor for pagination. Returns passages that come before this passage
   * ID in the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of passages to return
   */
  limit?: number | null;

  /**
   * Sort order for passages by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export interface FolderRetrieveMetadataParams {
  include_detailed_per_source_metadata?: boolean;
}

export interface FolderUploadFileParams {
  /**
   * Body param:
   */
  file: Uploadable;

  /**
   * Query param: How to handle duplicate filenames
   */
  duplicate_handling?: SourcesAPI.DuplicateFileHandling;

  /**
   * Query param: Optional custom name to override the uploaded file's name
   */
  name?: string | null;
}

export declare namespace Folders {
  export {
    type Folder as Folder,
    type FolderListResponse as FolderListResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCountResponse as FolderCountResponse,
    type FolderGetByNameResponse as FolderGetByNameResponse,
    type FolderListAgentsResponse as FolderListAgentsResponse,
    type FolderListFilesResponse as FolderListFilesResponse,
    type FolderListPassagesResponse as FolderListPassagesResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderListParams as FolderListParams,
    type FolderDeleteFileParams as FolderDeleteFileParams,
    type FolderListAgentsParams as FolderListAgentsParams,
    type FolderListFilesParams as FolderListFilesParams,
    type FolderListPassagesParams as FolderListPassagesParams,
    type FolderRetrieveMetadataParams as FolderRetrieveMetadataParams,
    type FolderUploadFileParams as FolderUploadFileParams,
  };
}

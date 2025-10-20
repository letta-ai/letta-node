// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArchivesAPI from '../archives';
import * as ModelsAPI from '../models';
import * as FilesAPI from './files';
import { FileListParams, FileListResponse, FileRetrieveParams, Files } from './files';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Sources extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new data source.
   *
   * @deprecated
   */
  create(body: SourceCreateParams, options?: RequestOptions): APIPromise<Source> {
    return this._client.post('/v1/sources/', { body, ...options });
  }

  /**
   * Get all sources
   *
   * @deprecated
   */
  retrieve(sourceID: string, options?: RequestOptions): APIPromise<Source> {
    return this._client.get(path`/v1/sources/${sourceID}`, options);
  }

  /**
   * Update the name or documentation of an existing data source.
   *
   * @deprecated
   */
  update(sourceID: string, body: SourceUpdateParams, options?: RequestOptions): APIPromise<Source> {
    return this._client.patch(path`/v1/sources/${sourceID}`, { body, ...options });
  }

  /**
   * List all data sources created by a user.
   *
   * @deprecated
   */
  list(options?: RequestOptions): APIPromise<SourceListResponse> {
    return this._client.get('/v1/sources/', options);
  }

  /**
   * Delete a data source.
   *
   * @deprecated
   */
  delete(sourceID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/sources/${sourceID}`, options);
  }

  /**
   * Count all data sources created by a user.
   *
   * @deprecated
   */
  count(options?: RequestOptions): APIPromise<SourceCountResponse> {
    return this._client.get('/v1/sources/count', options);
  }

  /**
   * Delete a data source.
   *
   * @deprecated
   */
  deleteFile(fileID: string, params: SourceDeleteFileParams, options?: RequestOptions): APIPromise<void> {
    const { source_id } = params;
    return this._client.delete(path`/v1/sources/${source_id}/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all agent IDs that have the specified source attached.
   *
   * @deprecated
   */
  getAgents(sourceID: string, options?: RequestOptions): APIPromise<SourceGetAgentsResponse> {
    return this._client.get(path`/v1/sources/${sourceID}/agents`, options);
  }

  /**
   * Get a source by name
   *
   * @deprecated
   */
  getByName(sourceName: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/v1/sources/name/${sourceName}`, options);
  }

  /**
   * Get aggregated metadata for all sources in an organization.
   *
   * Returns structured metadata including:
   *
   * - Total number of sources
   * - Total number of files across all sources
   * - Total size of all files
   * - Per-source breakdown with file details (file_name, file_size per file) if
   *   include_detailed_per_source_metadata is True
   *
   * @deprecated
   */
  getMetadata(
    query: SourceGetMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationSourcesStats> {
    return this._client.get('/v1/sources/metadata', { query, ...options });
  }

  /**
   * List all passages associated with a data source.
   *
   * @deprecated
   */
  listPassages(
    sourceID: string,
    query: SourceListPassagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourceListPassagesResponse> {
    return this._client.get(path`/v1/sources/${sourceID}/passages`, { query, ...options });
  }

  /**
   * Upload a file to a data source.
   *
   * @deprecated
   */
  uploadFile(
    sourceID: string,
    params: SourceUploadFileParams,
    options?: RequestOptions,
  ): APIPromise<FileMetadata> {
    const { duplicate_handling, name, ...body } = params;
    return this._client.post(
      path`/v1/sources/${sourceID}/upload`,
      multipartFormRequestOptions({ query: { duplicate_handling, name }, body, ...options }, this._client),
    );
  }
}

/**
 * How to handle duplicate filenames when uploading files
 */
export type DuplicateFileHandling = 'skip' | 'error' | 'suffix' | 'replace';

/**
 * Representation of a single FileMetadata
 */
export interface FileMetadata {
  /**
   * The unique identifier of the source associated with the document.
   */
  source_id: string;

  /**
   * The human-friendly ID of the File
   */
  id?: string;

  /**
   * Number of chunks that have been embedded.
   */
  chunks_embedded?: number | null;

  /**
   * Optional full-text content of the file; only populated on demand due to its
   * size.
   */
  content?: string | null;

  /**
   * The creation date of the file.
   */
  created_at?: string | null;

  /**
   * Optional error message if the file failed processing.
   */
  error_message?: string | null;

  /**
   * The creation date of the file.
   */
  file_creation_date?: string | null;

  /**
   * The last modified date of the file.
   */
  file_last_modified_date?: string | null;

  /**
   * The name of the file.
   */
  file_name?: string | null;

  /**
   * The path to the file.
   */
  file_path?: string | null;

  /**
   * The size of the file in bytes.
   */
  file_size?: number | null;

  /**
   * The type of the file (MIME type).
   */
  file_type?: string | null;

  /**
   * The original name of the file as uploaded.
   */
  original_file_name?: string | null;

  /**
   * The current processing status of the file (e.g. pending, parsing, embedding,
   * completed, error).
   */
  processing_status?: FileProcessingStatus;

  /**
   * Total number of chunks for the file.
   */
  total_chunks?: number | null;

  /**
   * The update date of the file.
   */
  updated_at?: string | null;
}

export type FileProcessingStatus = 'pending' | 'parsing' | 'embedding' | 'completed' | 'error';

/**
 * Complete metadata response for organization sources
 */
export interface OrganizationSourcesStats {
  /**
   * List of source metadata
   */
  sources?: Array<OrganizationSourcesStats.Source>;

  /**
   * Total number of files across all sources
   */
  total_files?: number;

  /**
   * Total size of all files in bytes
   */
  total_size?: number;

  /**
   * Total number of sources
   */
  total_sources?: number;
}

export namespace OrganizationSourcesStats {
  /**
   * Aggregated metadata for a source
   */
  export interface Source {
    /**
     * Unique identifier of the source
     */
    source_id: string;

    /**
     * Name of the source
     */
    source_name: string;

    /**
     * Number of files in the source
     */
    file_count?: number;

    /**
     * List of file statistics
     */
    files?: Array<Source.File>;

    /**
     * Total size of all files in bytes
     */
    total_size?: number;
  }

  export namespace Source {
    /**
     * File statistics for metadata endpoint
     */
    export interface File {
      /**
       * Unique identifier of the file
       */
      file_id: string;

      /**
       * Name of the file
       */
      file_name: string;

      /**
       * Size of the file in bytes
       */
      file_size?: number | null;
    }
  }
}

/**
 * Representation of a passage, which is stored in archival memory.
 *
 * Parameters: text (str): The text of the passage. embedding (List[float]): The
 * embedding of the passage. embedding_config (EmbeddingConfig): The embedding
 * configuration used by the passage. created_at (datetime): The creation date of
 * the passage. organization_id (str): The unique identifier of the organization
 * associated with the passage. archive_id (str): The unique identifier of the
 * archive containing this passage. source_id (str): The data source of the
 * passage. file_id (str): The unique identifier of the file associated with the
 * passage.
 */
export interface Passage {
  /**
   * The embedding of the passage.
   */
  embedding: Array<number> | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config: ModelsAPI.EmbeddingConfig | null;

  /**
   * The text of the passage.
   */
  text: string;

  /**
   * The human-friendly ID of the Passage
   */
  id?: string;

  /**
   * The unique identifier of the archive containing this passage.
   */
  archive_id?: string | null;

  /**
   * The creation date of the passage.
   */
  created_at?: string;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * The unique identifier of the file associated with the passage.
   */
  file_id?: string | null;

  /**
   * The name of the file (only for source passages).
   */
  file_name?: string | null;

  /**
   * Whether this passage is deleted or not.
   */
  is_deleted?: boolean;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The metadata of the passage.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The data source of the passage.
   */
  source_id?: string | null;

  /**
   * Tags associated with this passage.
   */
  tags?: Array<string> | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
}

/**
 * Representation of a source, which is a collection of files and passages.
 *
 * Parameters: id (str): The ID of the source name (str): The name of the source.
 * embedding_config (EmbeddingConfig): The embedding configuration used by the
 * source. user_id (str): The ID of the user that created the source. metadata
 * (dict): Metadata associated with the source. description (str): The description
 * of the source.
 */
export interface Source {
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

/**
 * Schema for creating a new Source.
 */
export interface SourceCreate {
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

/**
 * Schema for updating an existing Source.
 */
export interface SourceUpdate {
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

export type SourceListResponse = Array<Source>;

export type SourceDeleteResponse = unknown;

export type SourceCountResponse = number;

export type SourceGetAgentsResponse = Array<string>;

export type SourceGetByNameResponse = string;

export type SourceListPassagesResponse = Array<Passage>;

export interface SourceCreateParams {
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

export interface SourceUpdateParams {
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

export interface SourceDeleteFileParams {
  source_id: string;
}

export interface SourceGetMetadataParams {
  include_detailed_per_source_metadata?: boolean;
}

export interface SourceListPassagesParams {
  /**
   * Message after which to retrieve the returned messages.
   */
  after?: string | null;

  /**
   * Message before which to retrieve the returned messages.
   */
  before?: string | null;

  /**
   * Maximum number of messages to retrieve.
   */
  limit?: number;
}

export interface SourceUploadFileParams {
  /**
   * Body param:
   */
  file: Uploadable;

  /**
   * Query param: How to handle duplicate filenames
   */
  duplicate_handling?: DuplicateFileHandling;

  /**
   * Query param: Optional custom name to override the uploaded file's name
   */
  name?: string | null;
}

Sources.Files = Files;

export declare namespace Sources {
  export {
    type DuplicateFileHandling as DuplicateFileHandling,
    type FileMetadata as FileMetadata,
    type FileProcessingStatus as FileProcessingStatus,
    type OrganizationSourcesStats as OrganizationSourcesStats,
    type Passage as Passage,
    type Source as Source,
    type SourceCreate as SourceCreate,
    type SourceUpdate as SourceUpdate,
    type SourceListResponse as SourceListResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceCountResponse as SourceCountResponse,
    type SourceGetAgentsResponse as SourceGetAgentsResponse,
    type SourceGetByNameResponse as SourceGetByNameResponse,
    type SourceListPassagesResponse as SourceListPassagesResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceDeleteFileParams as SourceDeleteFileParams,
    type SourceGetMetadataParams as SourceGetMetadataParams,
    type SourceListPassagesParams as SourceListPassagesParams,
    type SourceUploadFileParams as SourceUploadFileParams,
  };

  export {
    Files as Files,
    type FileListResponse as FileListResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
  };
}

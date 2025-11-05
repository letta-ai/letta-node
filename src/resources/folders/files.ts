// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * List paginated files associated with a data folder.
   */
  list(
    folderID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FileListResponsesArrayPage, FileListResponse> {
    return this._client.getAPIList(path`/v1/folders/${folderID}/files`, ArrayPage<FileListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a file from a folder.
   */
  delete(fileID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { folder_id } = params;
    return this._client.delete(path`/v1/folders/${folder_id}/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload a file to a data folder.
   */
  upload(
    folderID: string,
    params: FileUploadParams,
    options?: RequestOptions,
  ): APIPromise<FileUploadResponse> {
    const { duplicate_handling, name, ...body } = params;
    return this._client.post(
      path`/v1/folders/${folderID}/upload`,
      multipartFormRequestOptions({ query: { duplicate_handling, name }, body, ...options }, this._client),
    );
  }
}

export type FileListResponsesArrayPage = ArrayPage<FileListResponse>;

/**
 * Representation of a single FileMetadata
 */
export interface FileListResponse {
  /**
   * The human-friendly ID of the File
   */
  id: string;

  /**
   * The unique identifier of the source associated with the document.
   */
  source_id: string;

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
  processing_status?: 'pending' | 'parsing' | 'embedding' | 'completed' | 'error';

  /**
   * Total number of chunks for the file.
   */
  total_chunks?: number | null;

  /**
   * The update date of the file.
   */
  updated_at?: string | null;
}

/**
 * Representation of a single FileMetadata
 */
export interface FileUploadResponse {
  /**
   * The human-friendly ID of the File
   */
  id: string;

  /**
   * The unique identifier of the source associated with the document.
   */
  source_id: string;

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
  processing_status?: 'pending' | 'parsing' | 'embedding' | 'completed' | 'error';

  /**
   * Total number of chunks for the file.
   */
  total_chunks?: number | null;

  /**
   * The update date of the file.
   */
  updated_at?: string | null;
}

export interface FileListParams extends ArrayPageParams {
  /**
   * Whether to include full file content
   */
  include_content?: boolean;
}

export interface FileDeleteParams {
  /**
   * The ID of the source in the format 'source-<uuid4>'
   */
  folder_id: string;
}

export interface FileUploadParams {
  /**
   * Body param:
   */
  file: Uploadable;

  /**
   * Query param: How to handle duplicate filenames
   */
  duplicate_handling?: 'skip' | 'error' | 'suffix' | 'replace';

  /**
   * Query param: Optional custom name to override the uploaded file's name
   */
  name?: string | null;
}

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileUploadResponse as FileUploadResponse,
    type FileListResponsesArrayPage as FileListResponsesArrayPage,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileUploadParams as FileUploadParams,
  };
}

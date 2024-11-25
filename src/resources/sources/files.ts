// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Files extends APIResource {
  /**
   * List paginated files associated with a data source.
   */
  list(
    sourceId: string,
    params?: FileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse>;
  list(sourceId: string, options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(
    sourceId: string,
    params: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse> {
    if (isRequestOptions(params)) {
      return this.list(sourceId, {}, params);
    }
    const { user_id, ...query } = params;
    return this._client.get(`/v1/sources/${sourceId}/files`, {
      query,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete a data source.
   */
  delete(
    sourceId: string,
    fileId: string,
    params?: FileDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(sourceId: string, fileId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    sourceId: string,
    fileId: string,
    params: FileDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(sourceId, fileId, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/sources/${sourceId}/${fileId}`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(user_id != null ? { user_id: user_id } : undefined),
        ...options?.headers,
      },
    });
  }
}

/**
 * Representation of a single FileMetadata
 */
export interface Filemetadata {
  /**
   * The unique identifier of the source associated with the document.
   */
  source_id: string;

  /**
   * The human-friendly ID of the File
   */
  id?: string;

  /**
   * The creation date of the file.
   */
  created_at?: string | null;

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
   * Whether this file is deleted or not.
   */
  is_deleted?: boolean;

  /**
   * The unique identifier of the organization associated with the document.
   */
  organization_id?: string | null;

  /**
   * The update date of the file.
   */
  updated_at?: string | null;
}

export type FileListResponse = Array<Filemetadata>;

export interface FileListParams {
  /**
   * Query param: Pagination cursor to fetch the next set of results
   */
  cursor?: string | null;

  /**
   * Query param: Number of files to return
   */
  limit?: number;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface FileDeleteParams {
  user_id?: string;
}

export declare namespace Files {
  export {
    type Filemetadata as Filemetadata,
    type FileListResponse as FileListResponse,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
  };
}

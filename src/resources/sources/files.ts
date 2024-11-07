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
   * The unique identifier of the user associated with the document.
   */
  user_id: string;

  /**
   * The human-friendly ID of the File
   */
  id?: string;

  /**
   * The creation date of this file metadata object.
   */
  created_at?: string;

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
  [k: string]: unknown;
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

export declare namespace Files {
  export {
    type Filemetadata as Filemetadata,
    type FileListResponse as FileListResponse,
    type FileListParams as FileListParams,
  };
}

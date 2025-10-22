// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SourcesAPI from './sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Retrieve metadata for a specific file by its ID.
   *
   * @deprecated
   */
  retrieve(
    fileID: string,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SourcesAPI.FileMetadata> {
    const { source_id, ...query } = params;
    return this._client.get(path`/v1/sources/${source_id}/files/${fileID}`, { query, ...options });
  }

  /**
   * List paginated files associated with a data source.
   *
   * @deprecated
   */
  list(
    sourceID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get(path`/v1/sources/${sourceID}/files`, { query, ...options });
  }
}

export type FileListResponse = Array<SourcesAPI.FileMetadata>;

export interface FileRetrieveParams {
  /**
   * Path param:
   */
  source_id: string;

  /**
   * Query param: Whether to include full file content
   */
  include_content?: boolean;
}

export interface FileListParams {
  /**
   * Pagination cursor to fetch the next set of results
   */
  after?: string | null;

  /**
   * Whether to check and update file processing status (from the vector db service).
   * If False, will not fetch and update the status, which may lead to performance
   * gains.
   */
  check_status_updates?: boolean;

  /**
   * Whether to include full file content
   */
  include_content?: boolean;

  /**
   * Number of files to return
   */
  limit?: number;
}

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
  };
}

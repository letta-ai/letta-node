// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SourcesAPI from './sources';

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

export type FileListResponse = Array<SourcesAPI.FileMetadata>;

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
  export { type FileListResponse as FileListResponse, type FileListParams as FileListParams };
}

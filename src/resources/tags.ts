// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Tags extends APIResource {
  /**
   * Get the list of all agent tags that have been created.
   */
  list(
    query: TagListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TagListResponsesArrayPage, TagListResponse> {
    return this._client.getAPIList('/v1/tags/', ArrayPage<TagListResponse>, { query, ...options });
  }
}

export type TagListResponsesArrayPage = ArrayPage<TagListResponse>;

export type TagListResponse = string;

export interface TagListParams extends ArrayPageParams {
  /**
   * Filter tags by name
   */
  name?: string | null;

  /**
   * @deprecated Filter tags by text search. Deprecated, please use name field
   * instead
   */
  query_text?: string | null;
}

export declare namespace Tags {
  export {
    type TagListResponse as TagListResponse,
    type TagListResponsesArrayPage as TagListResponsesArrayPage,
    type TagListParams as TagListParams,
  };
}

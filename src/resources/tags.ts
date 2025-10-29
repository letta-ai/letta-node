// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tags extends APIResource {
  /**
   * Get the list of all agent tags that have been created.
   */
  list(query: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/v1/tags/', { query, ...options });
  }
}

export type TagListResponse = Array<string>;

export interface TagListParams {
  /**
   * Tag cursor for pagination. Returns tags that come after this tag in the
   * specified sort order
   */
  after?: string | null;

  /**
   * Tag cursor for pagination. Returns tags that come before this tag in the
   * specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of tags to return
   */
  limit?: number | null;

  /**
   * Filter tags by name
   */
  name?: string | null;

  /**
   * Sort order for tags. 'asc' for alphabetical order, 'desc' for reverse
   * alphabetical order
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'name';

  /**
   * @deprecated Filter tags by text search. Deprecated, please use name field
   * instead
   */
  query_text?: string | null;
}

export declare namespace Tags {
  export { type TagListResponse as TagListResponse, type TagListParams as TagListParams };
}

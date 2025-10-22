// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from '../agents/blocks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Get all blocks associated with the specified identity.
   */
  list(
    identityID: string,
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockListResponse> {
    return this._client.get(path`/v1/identities/${identityID}/blocks`, { query, ...options });
  }
}

export type BlockListResponse = Array<BlocksAPI.Block>;

export interface BlockListParams {
  /**
   * Block ID cursor for pagination. Returns blocks that come after this block ID in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Block ID cursor for pagination. Returns blocks that come before this block ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of blocks to return
   */
  limit?: number | null;

  /**
   * Sort order for blocks by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export declare namespace Blocks {
  export { type BlockListResponse as BlockListResponse, type BlockListParams as BlockListParams };
}

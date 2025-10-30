// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from '../blocks/blocks';
import { BlockResponsesArrayPage } from '../blocks/blocks';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<BlockResponsesArrayPage, BlocksAPI.BlockResponse> {
    return this._client.getAPIList(
      path`/v1/identities/${identityID}/blocks`,
      ArrayPage<BlocksAPI.BlockResponse>,
      { query, ...options },
    );
  }
}

export interface BlockListParams extends ArrayPageParams {}

export declare namespace Blocks {
  export { type BlockListParams as BlockListParams };
}

export { type BlockResponsesArrayPage };

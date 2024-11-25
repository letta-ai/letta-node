// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Blocks extends APIResource {
  /**
   * Create Block
   */
  create(params: BlockCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Block> {
    const { user_id, ...body } = params;
    return this._client.post('/v1/blocks/', {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get Block
   */
  retrieve(
    blockId: string,
    params?: BlockRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Block>;
  retrieve(blockId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Block>;
  retrieve(
    blockId: string,
    params: BlockRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Block> {
    if (isRequestOptions(params)) {
      return this.retrieve(blockId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/blocks/${blockId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Update Block
   */
  update(
    blockId: string,
    params: BlockUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Block> {
    const { user_id, ...body } = params;
    return this._client.patch(`/v1/blocks/${blockId}`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * List Blocks
   */
  list(params?: BlockListParams, options?: Core.RequestOptions): Core.APIPromise<BlockListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BlockListResponse>;
  list(
    params: BlockListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { user_id, ...query } = params;
    return this._client.get('/v1/blocks/', {
      query,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete Block
   */
  delete(
    blockId: string,
    params?: BlockDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Block>;
  delete(blockId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Block>;
  delete(
    blockId: string,
    params: BlockDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Block> {
    if (isRequestOptions(params)) {
      return this.delete(blockId, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/blocks/${blockId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type BlockListResponse = Array<Shared.Block>;

export interface BlockCreateParams {
  /**
   * Body param: Label of the block.
   */
  label: string;

  /**
   * Body param: Value of the block.
   */
  value: string;

  /**
   * Body param: Description of the block.
   */
  description?: string | null;

  /**
   * Body param:
   */
  is_template?: boolean;

  /**
   * Body param: Character limit of the block.
   */
  limit?: number;

  /**
   * Body param: Metadata of the block.
   */
  metadata_?: unknown | null;

  /**
   * Body param: Name of the block if it is a template.
   */
  name?: string | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface BlockRetrieveParams {
  user_id?: string;
}

export interface BlockUpdateParams {
  /**
   * Body param: Description of the block.
   */
  description?: string | null;

  /**
   * Body param: Whether the block is a template (e.g. saved human/persona options).
   */
  is_template?: boolean;

  /**
   * Body param: Label of the block (e.g. 'human', 'persona') in the context window.
   */
  label?: string | null;

  /**
   * Body param: Character limit of the block.
   */
  limit?: number | null;

  /**
   * Body param: Metadata of the block.
   */
  metadata_?: unknown | null;

  /**
   * Body param: Name of the block if it is a template.
   */
  name?: string | null;

  /**
   * Body param: Value of the block.
   */
  value?: string | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface BlockListParams {
  /**
   * Query param: Labels to include (e.g. human, persona)
   */
  label?: string | null;

  /**
   * Query param: Name of the block
   */
  name?: string | null;

  /**
   * Query param: Whether to include only templates
   */
  templates_only?: boolean;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface BlockDeleteParams {
  user_id?: string;
}

export declare namespace Blocks {
  export {
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
    type BlockDeleteParams as BlockDeleteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Blocks extends APIResource {
  /**
   * Create Block
   */
  create(params: BlockCreateParams, options?: Core.RequestOptions): Core.APIPromise<Block> {
    const { body_user_id, header_user_id, ...body } = params;
    return this._client.post('/v1/blocks/', {
      body: { user_id: body_user_id, ...body },
      ...options,
      headers: { ...(header_user_id != null ? { user_id: header_user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get Block
   */
  retrieve(blockId: string, options?: Core.RequestOptions): Core.APIPromise<Block> {
    return this._client.get(`/v1/blocks/${blockId}`, options);
  }

  /**
   * Update Block
   */
  update(blockId: string, body: BlockUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Block> {
    return this._client.patch(`/v1/blocks/${blockId}`, { body, ...options });
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
  delete(blockId: string, options?: Core.RequestOptions): Core.APIPromise<Block> {
    return this._client.delete(`/v1/blocks/${blockId}`, options);
  }
}

/**
 * A Block represents a reserved section of the LLM's context window which is
 * editable. `Block` objects contained in the `Memory` object, which is able to
 * edit the Block values.
 *
 * Parameters: label (str): The label of the block (e.g. 'human', 'persona'). This
 * defines a category for the block. value (str): The value of the block. This is
 * the string that is represented in the context window. limit (int): The character
 * limit of the block. template*name (str): The name of the block template (if it
 * is a template). template (bool): Whether the block is a template (e.g. saved
 * human/persona options). Non-template blocks are not stored in the database and
 * are ephemeral, while templated blocks are stored in the database. description
 * (str): Description of the block. metadata* (Dict): Metadata of the block.
 * user_id (str): The unique identifier of the user associated with the block.
 */
export interface Block {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * Label of the block (e.g. 'human', 'persona') in the context window.
   */
  label?: string;

  /**
   * Character limit of the block.
   */
  limit?: number;

  /**
   * Metadata of the block.
   */
  metadata_?: unknown | null;

  /**
   * Name of the block if it is a template.
   */
  name?: string | null;

  /**
   * Whether the block is a template (e.g. saved human/persona options).
   */
  template?: boolean;

  /**
   * The unique identifier of the user associated with the block.
   */
  user_id?: string | null;
}

export type BlockListResponse = Array<Block>;

export interface BlockCreateParams {
  /**
   * Body param: Label of the block.
   */
  label: string;

  /**
   * Body param: Description of the block.
   */
  description?: string | null;

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
   * Body param:
   */
  template?: boolean;

  /**
   * Body param: The unique identifier of the user associated with the block.
   */
  body_user_id?: string | null;

  /**
   * Body param: Value of the block.
   */
  value?: string | null;

  /**
   * Header param:
   */
  header_user_id?: string;
}

export interface BlockUpdateParams {
  /**
   * The unique identifier of the block.
   */
  id: string;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * Label of the block (e.g. 'human', 'persona') in the context window.
   */
  label?: string;

  /**
   * Character limit of the block.
   */
  limit?: number | null;

  /**
   * Metadata of the block.
   */
  metadata_?: unknown | null;

  /**
   * Name of the block if it is a template.
   */
  name?: string | null;

  /**
   * Whether the block is a template (e.g. saved human/persona options).
   */
  template?: boolean;

  /**
   * The unique identifier of the user associated with the block.
   */
  user_id?: string | null;

  /**
   * Value of the block.
   */
  value?: string | null;
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

export declare namespace Blocks {
  export {
    type Block as Block,
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
  };
}

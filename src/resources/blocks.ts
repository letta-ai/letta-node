// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Blocks extends APIResource {
  /**
   * Create Block
   */
  create(body: BlockCreateParams, options?: Core.RequestOptions): Core.APIPromise<Block> {
    return this._client.post('/v1/blocks/', { body, ...options });
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
  list(query?: BlockListParams, options?: Core.RequestOptions): Core.APIPromise<BlockListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BlockListResponse>;
  list(
    query: BlockListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BlockListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/blocks/', { query, ...options });
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
 * limit of the block. is*template (bool): Whether the block is a template (e.g.
 * saved human/persona options). Non-template blocks are not stored in the database
 * and are ephemeral, while templated blocks are stored in the database. label
 * (str): The label of the block (e.g. 'human', 'persona'). This defines a category
 * for the block. template_name (str): The name of the block template (if it is a
 * template). description (str): Description of the block. metadata* (Dict):
 * Metadata of the block. user_id (str): The unique identifier of the user
 * associated with the block.
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
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * Whether the block is a template (e.g. saved human/persona options).
   */
  is_template?: boolean;

  /**
   * Label of the block (e.g. 'human', 'persona') in the context window.
   */
  label?: string | null;

  /**
   * The id of the user that last updated this Block.
   */
  last_updated_by_id?: string | null;

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
   * The unique identifier of the organization associated with the block.
   */
  organization_id?: string | null;
}

export type BlockListResponse = Array<Block>;

export interface BlockCreateParams {
  /**
   * Label of the block.
   */
  label: string;

  /**
   * Value of the block.
   */
  value: string;

  /**
   * Description of the block.
   */
  description?: string | null;

  is_template?: boolean;

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
}

export interface BlockUpdateParams {
  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * Whether the block is a template (e.g. saved human/persona options).
   */
  is_template?: boolean;

  /**
   * Label of the block (e.g. 'human', 'persona') in the context window.
   */
  label?: string | null;

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
   * Value of the block.
   */
  value?: string | null;
}

export interface BlockListParams {
  /**
   * Labels to include (e.g. human, persona)
   */
  label?: string | null;

  /**
   * Name of the block
   */
  name?: string | null;

  /**
   * Whether to include only templates
   */
  templates_only?: boolean;
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

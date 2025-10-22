// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Retrieve a core memory block from an agent.
   */
  retrieve(blockLabel: string, params: BlockRetrieveParams, options?: RequestOptions): APIPromise<Block> {
    const { agent_id } = params;
    return this._client.get(path`/v1/agents/${agent_id}/core-memory/blocks/${blockLabel}`, options);
  }

  /**
   * Updates a core memory block of an agent.
   */
  update(blockLabel: string, params: BlockUpdateParams, options?: RequestOptions): APIPromise<Block> {
    const { agent_id, ...body } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/core-memory/blocks/${blockLabel}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve the core memory blocks of a specific agent.
   */
  list(
    agentID: string,
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/core-memory/blocks`, { query, ...options });
  }

  /**
   * Attach a core memory block to an agent.
   */
  attach(
    blockID: string,
    params: BlockAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/core-memory/blocks/attach/${blockID}`, options);
  }

  /**
   * Detach a core memory block from an agent.
   */
  detach(
    blockID: string,
    params: BlockDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/core-memory/blocks/detach/${blockID}`, options);
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
 * limit of the block. is_template (bool): Whether the block is a template (e.g.
 * saved human/persona options). Non-template blocks are not stored in the database
 * and are ephemeral, while templated blocks are stored in the database. label
 * (str): The label of the block (e.g. 'human', 'persona'). This defines a category
 * for the block. template_name (str): The name of the block template (if it is a
 * template). description (str): Description of the block. metadata (Dict):
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
   * The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * If set to True, the block will be hidden.
   */
  hidden?: boolean | null;

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
  metadata?: { [key: string]: unknown } | null;

  /**
   * The id of the template.
   */
  name?: string | null;

  /**
   * Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * Whether the agent has read-only access to the block.
   */
  read_only?: boolean;
}

/**
 * Update a block
 */
export interface BlockUpdate {
  /**
   * The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * If set to True, the block will be hidden.
   */
  hidden?: boolean | null;

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
  metadata?: { [key: string]: unknown } | null;

  /**
   * The id of the template.
   */
  name?: string | null;

  /**
   * Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * Value of the block.
   */
  value?: string | null;
}

export type BlockListResponse = Array<Block>;

export interface BlockRetrieveParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface BlockUpdateParams {
  /**
   * Path param: The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;

  /**
   * Body param: The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * Body param: The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Body param: Description of the block.
   */
  description?: string | null;

  /**
   * Body param: The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * Body param: If set to True, the block will be hidden.
   */
  hidden?: boolean | null;

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
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: The id of the template.
   */
  name?: string | null;

  /**
   * Body param: Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * Body param: The associated project id.
   */
  project_id?: string | null;

  /**
   * Body param: Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * Body param: Value of the block.
   */
  value?: string | null;
}

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

export interface BlockAttachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface BlockDetachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export declare namespace Blocks {
  export {
    type Block as Block,
    type BlockUpdate as BlockUpdate,
    type BlockListResponse as BlockListResponse,
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
    type BlockAttachParams as BlockAttachParams,
    type BlockDetachParams as BlockDetachParams,
  };
}

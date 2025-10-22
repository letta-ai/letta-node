// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from '../agents/blocks';
import * as AgentsAPI from './agents';
import { AgentListParams, AgentListResponse, Agents } from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Create Block
   */
  create(body: BlockCreateParams, options?: RequestOptions): APIPromise<BlocksAPI.Block> {
    return this._client.post('/v1/blocks/', { body, ...options });
  }

  /**
   * Retrieve Block
   */
  retrieve(blockID: string, options?: RequestOptions): APIPromise<BlocksAPI.Block> {
    return this._client.get(path`/v1/blocks/${blockID}`, options);
  }

  /**
   * Modify Block
   */
  update(blockID: string, body: BlockUpdateParams, options?: RequestOptions): APIPromise<BlocksAPI.Block> {
    return this._client.patch(path`/v1/blocks/${blockID}`, { body, ...options });
  }

  /**
   * List Blocks
   */
  list(
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BlockListResponse> {
    return this._client.get('/v1/blocks/', { query, ...options });
  }

  /**
   * Delete Block
   */
  delete(blockID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/blocks/${blockID}`, options);
  }

  /**
   * Count all blocks created by a user.
   */
  count(options?: RequestOptions): APIPromise<BlockCountResponse> {
    return this._client.get('/v1/blocks/count', options);
  }
}

/**
 * Create a block
 */
export interface CreateBlock {
  /**
   * Label of the block.
   */
  label: string;

  /**
   * Value of the block.
   */
  value: string;

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

  is_template?: boolean;

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

export type BlockListResponse = Array<BlocksAPI.Block>;

export type BlockDeleteResponse = unknown;

export type BlockCountResponse = number;

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

  is_template?: boolean;

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

export interface BlockUpdateParams {
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
   * Filter blocks by the exact number of connected agents. If provided, returns
   * blocks that have exactly this number of connected agents.
   */
  connected_to_agents_count_eq?: Array<number> | null;

  /**
   * Filter blocks by the number of connected agents. If provided, returns blocks
   * that have more than this number of connected agents.
   */
  connected_to_agents_count_gt?: number | null;

  /**
   * Filter blocks by the number of connected agents. If provided, returns blocks
   * that have less than this number of connected agents.
   */
  connected_to_agents_count_lt?: number | null;

  /**
   * Search blocks by description. If provided, returns blocks that match this
   * description. This is a full-text search on block descriptions.
   */
  description_search?: string | null;

  /**
   * Search agents by identifier keys
   */
  identifier_keys?: Array<string> | null;

  /**
   * Search agents by identifier id
   */
  identity_id?: string | null;

  /**
   * Labels to include (e.g. human, persona)
   */
  label?: string | null;

  /**
   * Search blocks by label. If provided, returns blocks that match this label. This
   * is a full-text search on labels.
   */
  label_search?: string | null;

  /**
   * Number of blocks to return
   */
  limit?: number | null;

  /**
   * Name of the block
   */
  name?: string | null;

  /**
   * Sort order for blocks by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';

  /**
   * Search blocks by project id
   */
  project_id?: string | null;

  /**
   * Whether to include only templates
   */
  templates_only?: boolean;

  /**
   * Search blocks by value. If provided, returns blocks that match this value.
   */
  value_search?: string | null;
}

Blocks.Agents = Agents;

export declare namespace Blocks {
  export {
    type CreateBlock as CreateBlock,
    type BlockListResponse as BlockListResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCountResponse as BlockCountResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
  };

  export {
    Agents as Agents,
    type AgentListResponse as AgentListResponse,
    type AgentListParams as AgentListParams,
  };
}

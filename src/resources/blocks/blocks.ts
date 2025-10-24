// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { AgentListParams, Agents } from './agents';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Create Block
   */
  create(body: BlockCreateParams, options?: RequestOptions): APIPromise<BlockCreateResponse> {
    return this._client.post('/v1/blocks/', { body, ...options });
  }

  /**
   * Retrieve Block
   */
  retrieve(blockID: string, options?: RequestOptions): APIPromise<BlockRetrieveResponse> {
    return this._client.get(path`/v1/blocks/${blockID}`, options);
  }

  /**
   * List Blocks
   */
  list(
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BlockListResponsesArrayPage, BlockListResponse> {
    return this._client.getAPIList('/v1/blocks/', ArrayPage<BlockListResponse>, { query, ...options });
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

  /**
   * Modify Block
   */
  modify(
    blockID: string,
    body: BlockModifyParams,
    options?: RequestOptions,
  ): APIPromise<BlockModifyResponse> {
    return this._client.patch(path`/v1/blocks/${blockID}`, { body, ...options });
  }
}

export type BlockListResponsesArrayPage = ArrayPage<BlockListResponse>;

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
   * The id of the template.
   */
  template_id?: string | null;

  /**
   * Name of the block if it is a template.
   */
  template_name?: string | null;
}

export interface BlockCreateResponse {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * @deprecated (Deprecated) The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * @deprecated (Deprecated) The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * @deprecated (Deprecated) The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * @deprecated (Deprecated) If set to True, the block will be hidden.
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
   * @deprecated (Deprecated) Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated (Deprecated) Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * @deprecated (Deprecated) The id of the template.
   */
  template_id?: string | null;

  /**
   * @deprecated (Deprecated) The name of the block template (if it is a template).
   */
  template_name?: string | null;
}

export interface BlockRetrieveResponse {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * @deprecated (Deprecated) The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * @deprecated (Deprecated) The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * @deprecated (Deprecated) The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * @deprecated (Deprecated) If set to True, the block will be hidden.
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
   * @deprecated (Deprecated) Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated (Deprecated) Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * @deprecated (Deprecated) The id of the template.
   */
  template_id?: string | null;

  /**
   * @deprecated (Deprecated) The name of the block template (if it is a template).
   */
  template_name?: string | null;
}

export interface BlockListResponse {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * @deprecated (Deprecated) The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * @deprecated (Deprecated) The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * @deprecated (Deprecated) The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * @deprecated (Deprecated) If set to True, the block will be hidden.
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
   * @deprecated (Deprecated) Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated (Deprecated) Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * @deprecated (Deprecated) The id of the template.
   */
  template_id?: string | null;

  /**
   * @deprecated (Deprecated) The name of the block template (if it is a template).
   */
  template_name?: string | null;
}

export type BlockDeleteResponse = unknown;

export type BlockCountResponse = number;

export interface BlockModifyResponse {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * @deprecated (Deprecated) The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * @deprecated (Deprecated) The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * @deprecated (Deprecated) The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * @deprecated (Deprecated) If set to True, the block will be hidden.
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
   * @deprecated (Deprecated) Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated (Deprecated) Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * @deprecated (Deprecated) The id of the template.
   */
  template_id?: string | null;

  /**
   * @deprecated (Deprecated) The name of the block template (if it is a template).
   */
  template_name?: string | null;
}

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
   * The id of the template.
   */
  template_id?: string | null;

  /**
   * Name of the block if it is a template.
   */
  template_name?: string | null;
}

export interface BlockListParams extends ArrayPageParams {
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
   * Name of the block
   */
  name?: string | null;

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

export interface BlockModifyParams {
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
   * The id of the template.
   */
  template_id?: string | null;

  /**
   * Name of the block if it is a template.
   */
  template_name?: string | null;

  /**
   * Value of the block.
   */
  value?: string | null;
}

Blocks.Agents = Agents;

export declare namespace Blocks {
  export {
    type CreateBlock as CreateBlock,
    type BlockCreateResponse as BlockCreateResponse,
    type BlockRetrieveResponse as BlockRetrieveResponse,
    type BlockListResponse as BlockListResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCountResponse as BlockCountResponse,
    type BlockModifyResponse as BlockModifyResponse,
    type BlockListResponsesArrayPage as BlockListResponsesArrayPage,
    type BlockCreateParams as BlockCreateParams,
    type BlockListParams as BlockListParams,
    type BlockModifyParams as BlockModifyParams,
  };

  export { Agents as Agents, type AgentListParams as AgentListParams };
}

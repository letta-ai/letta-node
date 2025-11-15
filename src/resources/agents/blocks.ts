// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as BlocksBlocksAPI from '../blocks/blocks';
import { BlockResponsesArrayPage } from '../blocks/blocks';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Retrieve a core memory block from an agent.
   */
  retrieve(
    blockLabel: string,
    params: BlockRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BlocksBlocksAPI.BlockResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v1/agents/${agent_id}/core-memory/blocks/${blockLabel}`, options);
  }

  /**
   * Updates a core memory block of an agent.
   */
  update(
    blockLabel: string,
    params: BlockUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BlocksBlocksAPI.BlockResponse> {
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
  ): PagePromise<BlockResponsesArrayPage, BlocksBlocksAPI.BlockResponse> {
    return this._client.getAPIList(
      path`/v1/agents/${agentID}/core-memory/blocks`,
      ArrayPage<BlocksBlocksAPI.BlockResponse>,
      { query, ...options },
    );
  }

  /**
   * Attach a core memory block to an agent.
   */
  attach(
    blockID: string,
    params: BlockAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState | null> {
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
  ): APIPromise<AgentsAPI.AgentState | null> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/core-memory/blocks/detach/${blockID}`, options);
  }
}

/**
 * A Block represents a reserved section of the LLM's context window.
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
   * Body param: The id of the template.
   */
  template_id?: string | null;

  /**
   * Body param: Name of the block if it is a template.
   */
  template_name?: string | null;

  /**
   * Body param: Value of the block.
   */
  value?: string | null;
}

export interface BlockListParams extends ArrayPageParams {}

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
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
    type BlockAttachParams as BlockAttachParams,
    type BlockDetachParams as BlockDetachParams,
  };
}

export { type BlockResponsesArrayPage };

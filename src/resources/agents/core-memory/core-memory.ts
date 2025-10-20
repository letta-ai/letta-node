// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from '../agents';
import * as BlocksAPI from './blocks';
import {
  Block,
  BlockAttachParams,
  BlockDetachParams,
  BlockListResponse,
  BlockRetrieveParams,
  BlockUpdate,
  BlockUpdateParams,
  Blocks,
} from './blocks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CoreMemory extends APIResource {
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);

  /**
   * Retrieve the memory state of a specific agent. This endpoint fetches the current
   * memory state of the agent identified by the user ID and agent ID.
   */
  retrieve(agentID: string, options?: RequestOptions): APIPromise<Memory> {
    return this._client.get(path`/v1/agents/${agentID}/core-memory`, options);
  }

  /**
   * Get the variables associated with an agent
   */
  retrieveVariables(
    agentID: string,
    options?: RequestOptions,
  ): APIPromise<CoreMemoryRetrieveVariablesResponse> {
    return this._client.get(path`/v1/agents/${agentID}/core-memory/variables`, options);
  }
}

/**
 * Represents the in-context memory (i.e. Core memory) of the agent. This includes
 * both the `Block` objects (labelled by sections), as well as tools to edit the
 * blocks.
 */
export interface Memory {
  /**
   * Memory blocks contained in the agent's in-context memory
   */
  blocks: Array<BlocksAPI.Block>;

  /**
   * Agent type controlling prompt rendering.
   */
  agent_type?: AgentsAPI.AgentType | (string & {}) | null;

  /**
   * Special blocks representing the agent's in-context memory of an attached file
   */
  file_blocks?: Array<Memory.FileBlock>;

  /**
   * Deprecated. Ignored for performance.
   */
  prompt_template?: string;
}

export namespace Memory {
  export interface FileBlock {
    /**
     * Unique identifier of the file.
     */
    file_id: string;

    /**
     * True if the agent currently has the file open.
     */
    is_open: boolean;

    /**
     * Unique identifier of the source.
     */
    source_id: string;

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
     * UTC timestamp of the agent’s most recent access to this file. Any operations
     * from the open, close, or search tools will update this field.
     */
    last_accessed_at?: string | null;

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
}

export interface CoreMemoryRetrieveVariablesResponse {
  variables: { [key: string]: string };
}

CoreMemory.Blocks = Blocks;

export declare namespace CoreMemory {
  export {
    type Memory as Memory,
    type CoreMemoryRetrieveVariablesResponse as CoreMemoryRetrieveVariablesResponse,
  };

  export {
    Blocks as Blocks,
    type Block as Block,
    type BlockUpdate as BlockUpdate,
    type BlockListResponse as BlockListResponse,
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockAttachParams as BlockAttachParams,
    type BlockDetachParams as BlockDetachParams,
  };
}

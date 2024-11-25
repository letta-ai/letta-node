// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BlocksAPI from '../../blocks';
import * as ArchivalAPI from './archival';
import { Archival } from './archival';
import * as BlockAPI from './block';
import { Block, BlockCreateParams, BlockDeleteParams } from './block';
import * as LabelAPI from './label';
import { Label, LabelUpdateParams } from './label';
import * as LimitAPI from './limit';
import { Limit, LimitUpdateParams } from './limit';
import * as MessagesAPI from './messages';
import { MessageRetrieveResponse, Messages } from './messages';
import * as RecallAPI from './recall';
import { Recall } from './recall';

export class MemoryResource extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  recall: RecallAPI.Recall = new RecallAPI.Recall(this._client);
  archival: ArchivalAPI.Archival = new ArchivalAPI.Archival(this._client);
  label: LabelAPI.Label = new LabelAPI.Label(this._client);
  block: BlockAPI.Block = new BlockAPI.Block(this._client);
  limit: LimitAPI.Limit = new LimitAPI.Limit(this._client);

  /**
   * Retrieve the memory state of a specific agent. This endpoint fetches the current
   * memory state of the agent identified by the user ID and agent ID.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Memory> {
    return this._client.get(`/v1/agents/${agentId}/memory`, options);
  }

  /**
   * Update the core memory of a specific agent. This endpoint accepts new memory
   * contents (labels as keys, and values as values) and updates the core memory of
   * the agent identified by the user ID and agent ID. This endpoint accepts new
   * memory contents to update the core memory of the agent. This endpoint only
   * supports modifying existing blocks; it does not support deleting/unlinking or
   * creating/linking blocks.
   */
  update(
    agentId: string,
    params: MemoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Memory> {
    const { body, user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/memory`, {
      body: body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export interface ArchivalMemorySummary {
  /**
   * Number of rows in archival memory
   */
  size: number;
}

/**
 * Represents the in-context memory of the agent. This includes both the `Block`
 * objects (labelled by sections), as well as tools to edit the blocks.
 *
 * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
 * memory block.
 */
export interface Memory {
  /**
   * Mapping from memory block section to memory block.
   */
  memory?: Record<string, BlocksAPI.Block>;

  /**
   * Jinja2 template for compiling memory blocks into a prompt string
   */
  prompt_template?: string;
}

export interface RecallMemorySummary {
  /**
   * Number of rows in recall memory
   */
  size: number;
}

export interface MemoryUpdateParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Header param:
   */
  user_id?: string;
}

MemoryResource.Messages = Messages;
MemoryResource.Recall = Recall;
MemoryResource.Archival = Archival;
MemoryResource.Label = Label;
MemoryResource.Block = Block;
MemoryResource.Limit = Limit;

export declare namespace MemoryResource {
  export {
    type ArchivalMemorySummary as ArchivalMemorySummary,
    type Memory as Memory,
    type RecallMemorySummary as RecallMemorySummary,
    type MemoryUpdateParams as MemoryUpdateParams,
  };

  export { Messages as Messages, type MessageRetrieveResponse as MessageRetrieveResponse };

  export { Recall as Recall };

  export { Archival as Archival };

  export { Label as Label, type LabelUpdateParams as LabelUpdateParams };

  export {
    Block as Block,
    type BlockCreateParams as BlockCreateParams,
    type BlockDeleteParams as BlockDeleteParams,
  };

  export { Limit as Limit, type LimitUpdateParams as LimitUpdateParams };
}

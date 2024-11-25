// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AgentsAPI from '../agents';
import * as ArchivalAPI from './archival';
import { Archival } from './archival';
import * as BlockAPI from './block';
import { Block, BlockCreateParams, BlockDeleteParams } from './block';
import * as LabelAPI from './label';
import { Label, LabelUpdateParams } from './label';
import * as LimitAPI from './limit';
import { Limit, LimitUpdateParams } from './limit';
import * as MessagesAPI from './messages';
import { MessageOutput, MessageRetrieveResponse, Messages } from './messages';
import * as RecallAPI from './recall';
import { Recall } from './recall';

export class Memory extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  label: LabelAPI.Label = new LabelAPI.Label(this._client);
  block: BlockAPI.Block = new BlockAPI.Block(this._client);
  limit: LimitAPI.Limit = new LimitAPI.Limit(this._client);
  recall: RecallAPI.Recall = new RecallAPI.Recall(this._client);
  archival: ArchivalAPI.Archival = new ArchivalAPI.Archival(this._client);

  /**
   * Retrieve the memory state of a specific agent. This endpoint fetches the current
   * memory state of the agent identified by the user ID and agent ID.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentsAPI.Memory> {
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
  ): Core.APIPromise<AgentsAPI.Memory> {
    const { body, user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/memory`, {
      body: body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
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

Memory.Messages = Messages;
Memory.Label = Label;
Memory.Block = Block;
Memory.Limit = Limit;
Memory.Recall = Recall;
Memory.Archival = Archival;

export declare namespace Memory {
  export { type MemoryUpdateParams as MemoryUpdateParams };

  export {
    Messages as Messages,
    type MessageOutput as MessageOutput,
    type MessageRetrieveResponse as MessageRetrieveResponse,
  };

  export { Label as Label, type LabelUpdateParams as LabelUpdateParams };

  export {
    Block as Block,
    type BlockCreateParams as BlockCreateParams,
    type BlockDeleteParams as BlockDeleteParams,
  };

  export { Limit as Limit, type LimitUpdateParams as LimitUpdateParams };

  export { Recall as Recall };

  export { Archival as Archival };
}

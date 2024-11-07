// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as ArchivalAPI from './archival';
import { Archival } from './archival';
import * as MessagesAPI from './messages';
import { MessageRetrieveResponse, Messages } from './messages';
import * as RecallAPI from './recall';
import { Recall } from './recall';

export class Memory extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  recall: RecallAPI.Recall = new RecallAPI.Recall(this._client);
  archival: ArchivalAPI.Archival = new ArchivalAPI.Archival(this._client);

  /**
   * Retrieve the memory state of a specific agent. This endpoint fetches the current
   * memory state of the agent identified by the user ID and agent ID.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Memory> {
    return this._client.get(`/v1/agents/${agentId}/memory`, options);
  }

  /**
   * Update the core memory of a specific agent. This endpoint accepts new memory
   * contents (human and persona) and updates the core memory of the agent identified
   * by the user ID and agent ID.
   */
  update(
    agentId: string,
    params: MemoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Memory> {
    const { body, user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/memory`, {
      body: body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export interface Archivalmemorysummary {
  /**
   * Number of rows in archival memory
   */
  size: number;
}

export interface Recallmemorysummary {
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

Memory.Messages = Messages;
Memory.Recall = Recall;
Memory.Archival = Archival;

export declare namespace Memory {
  export {
    type Archivalmemorysummary as Archivalmemorysummary,
    type Recallmemorysummary as Recallmemorysummary,
    type MemoryUpdateParams as MemoryUpdateParams,
  };

  export { Messages as Messages, type MessageRetrieveResponse as MessageRetrieveResponse };

  export { Recall as Recall };

  export { Archival as Archival };
}

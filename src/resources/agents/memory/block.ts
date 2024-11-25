// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AgentsAPI from '../agents';

export class Block extends APIResource {
  /**
   * Creates a memory block and links it to the agent.
   */
  create(
    agentId: string,
    body: BlockCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    return this._client.post(`/v1/agents/${agentId}/memory/block`, { body, ...options });
  }

  /**
   * Removes a memory block from an agent by unlnking it. If the block is not linked
   * to any other agent, it is deleted.
   */
  delete(
    agentId: string,
    blockLabel: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    return this._client.delete(`/v1/agents/${agentId}/memory/block/${blockLabel}`, options);
  }
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

export declare namespace Block {
  export { type BlockCreateParams as BlockCreateParams };
}

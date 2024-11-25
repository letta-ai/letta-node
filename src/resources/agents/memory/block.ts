// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AgentsAPI from '../agents';

export class Block extends APIResource {
  /**
   * Creates a memory block and links it to the agent.
   */
  create(
    agentId: string,
    params: BlockCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    const { user_id, ...body } = params;
    return this._client.post(`/v1/agents/${agentId}/memory/block`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Removes a memory block from an agent by unlnking it. If the block is not linked
   * to any other agent, it is deleted.
   */
  delete(
    agentId: string,
    blockLabel: string,
    params?: BlockDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory>;
  delete(
    agentId: string,
    blockLabel: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory>;
  delete(
    agentId: string,
    blockLabel: string,
    params: BlockDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    if (isRequestOptions(params)) {
      return this.delete(agentId, blockLabel, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/agents/${agentId}/memory/block/${blockLabel}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export interface BlockCreateParams {
  /**
   * Body param: Label of the block.
   */
  label: string;

  /**
   * Body param: Value of the block.
   */
  value: string;

  /**
   * Body param: Description of the block.
   */
  description?: string | null;

  /**
   * Body param:
   */
  is_template?: boolean;

  /**
   * Body param: Character limit of the block.
   */
  limit?: number;

  /**
   * Body param: Metadata of the block.
   */
  metadata_?: unknown | null;

  /**
   * Body param: Name of the block if it is a template.
   */
  name?: string | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface BlockDeleteParams {
  user_id?: string;
}

export declare namespace Block {
  export { type BlockCreateParams as BlockCreateParams, type BlockDeleteParams as BlockDeleteParams };
}

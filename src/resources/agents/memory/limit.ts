// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AgentsAPI from '../agents';

export class Limit extends APIResource {
  /**
   * Update the limit of a block in an agent's memory.
   */
  update(
    agentId: string,
    params: LimitUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    const { user_id, ...body } = params;
    return this._client.patch(`/v1/agents/${agentId}/memory/limit`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export interface LimitUpdateParams {
  /**
   * Body param: Label of the block.
   */
  label: string;

  /**
   * Body param: New limit of the block.
   */
  limit: number;

  /**
   * Header param:
   */
  user_id?: string;
}

export declare namespace Limit {
  export { type LimitUpdateParams as LimitUpdateParams };
}

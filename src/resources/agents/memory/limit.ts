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
    body: LimitUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    return this._client.patch(`/v1/agents/${agentId}/memory/limit`, { body, ...options });
  }
}

export interface LimitUpdateParams {
  /**
   * Label of the block.
   */
  label: string;

  /**
   * New limit of the block.
   */
  limit: number;
}

export declare namespace Limit {
  export { type LimitUpdateParams as LimitUpdateParams };
}

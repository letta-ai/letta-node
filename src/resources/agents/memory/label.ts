// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MemoryAPI from './memory';

export class Label extends APIResource {
  /**
   * Update the label of a block in an agent's memory.
   */
  update(
    agentId: string,
    params: LabelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemoryAPI.Memory> {
    const { user_id, ...body } = params;
    return this._client.patch(`/v1/agents/${agentId}/memory/label`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export interface LabelUpdateParams {
  /**
   * Body param: Current label of the block.
   */
  current_label: string;

  /**
   * Body param: New label of the block.
   */
  new_label: string;

  /**
   * Header param:
   */
  user_id?: string;
}

export declare namespace Label {
  export { type LabelUpdateParams as LabelUpdateParams };
}

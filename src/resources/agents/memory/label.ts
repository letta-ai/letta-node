// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AgentsAPI from '../agents';

export class Label extends APIResource {
  /**
   * Update the label of a block in an agent's memory.
   */
  update(
    agentId: string,
    body: LabelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Memory> {
    return this._client.patch(`/v1/agents/${agentId}/memory/label`, { body, ...options });
  }
}

export interface LabelUpdateParams {
  /**
   * Current label of the block.
   */
  current_label: string;

  /**
   * New label of the block.
   */
  new_label: string;
}

export declare namespace Label {
  export { type LabelUpdateParams as LabelUpdateParams };
}

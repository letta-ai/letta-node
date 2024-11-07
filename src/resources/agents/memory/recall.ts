// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MemoryAPI from './memory';

export class Recall extends APIResource {
  /**
   * Retrieve the summary of the recall memory of a specific agent.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<MemoryAPI.Recallmemorysummary> {
    return this._client.get(`/v1/agents/${agentId}/memory/recall`, options);
  }
}

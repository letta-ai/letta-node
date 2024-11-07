// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MemoryAPI from './memory';

export class Archival extends APIResource {
  /**
   * Retrieve the summary of the archival memory of a specific agent.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<MemoryAPI.ArchivalMemorySummary> {
    return this._client.get(`/v1/agents/${agentId}/memory/archival`, options);
  }
}

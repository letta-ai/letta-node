// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SourcesSourcesAPI from '../sources/sources';

export class Sources extends APIResource {
  /**
   * Get the sources associated with an agent.
   */
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<SourceListResponse> {
    return this._client.get(`/v1/agents/${agentId}/sources`, options);
  }
}

export type SourceListResponse = Array<SourcesSourcesAPI.Source>;

export declare namespace Sources {
  export { type SourceListResponse as SourceListResponse };
}

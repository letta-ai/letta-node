// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ToolsAPI from '../tools';

export class Tools extends APIResource {
  /**
   * Get tools from an existing agent
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ToolRetrieveResponse> {
    return this._client.get(`/v1/agents/${agentId}/tools`, options);
  }
}

export type ToolRetrieveResponse = Array<ToolsAPI.Tool>;

export declare namespace Tools {
  export { type ToolRetrieveResponse as ToolRetrieveResponse };
}

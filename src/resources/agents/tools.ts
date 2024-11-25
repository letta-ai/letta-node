// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ToolsAPI from '../tools';

export class Tools extends APIResource {
  /**
   * Get tools from an existing agent
   */
  retrieve(
    agentId: string,
    params?: ToolRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolRetrieveResponse>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ToolRetrieveResponse>;
  retrieve(
    agentId: string,
    params: ToolRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolRetrieveResponse> {
    if (isRequestOptions(params)) {
      return this.retrieve(agentId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/agents/${agentId}/tools`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type ToolRetrieveResponse = Array<ToolsAPI.Tool>;

export interface ToolRetrieveParams {
  user_id?: string;
}

export declare namespace Tools {
  export { type ToolRetrieveResponse as ToolRetrieveResponse, type ToolRetrieveParams as ToolRetrieveParams };
}

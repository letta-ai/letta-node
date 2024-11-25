// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class ToolsName extends APIResource {
  /**
   * Get a tool ID by name
   */
  retrieve(
    toolName: string,
    params?: ToolsNameRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string>;
  retrieve(toolName: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieve(
    toolName: string,
    params: ToolsNameRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.retrieve(toolName, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/tools/name/${toolName}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...(user_id != null ? { user_id: user_id } : undefined),
        ...options?.headers,
      },
    });
  }
}

export type ToolsNameRetrieveResponse = string;

export interface ToolsNameRetrieveParams {
  user_id?: string;
}

export declare namespace ToolsName {
  export {
    type ToolsNameRetrieveResponse as ToolsNameRetrieveResponse,
    type ToolsNameRetrieveParams as ToolsNameRetrieveParams,
  };
}

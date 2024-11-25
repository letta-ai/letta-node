// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class ToolsName extends APIResource {
  /**
   * Get a tool ID by name
   */
  retrieve(toolName: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/v1/tools/name/${toolName}`, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }
}

export type ToolsNameRetrieveResponse = string;

export declare namespace ToolsName {
  export { type ToolsNameRetrieveResponse as ToolsNameRetrieveResponse };
}

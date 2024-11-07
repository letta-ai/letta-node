// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Tools extends APIResource {
  /**
   * Create a new tool
   */
  create(params: ToolCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Tool> {
    const { user_id, ...body } = params;
    return this._client.post('/v1/tools/', {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a tool by ID
   */
  retrieve(
    toolId: string,
    params?: ToolRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tool>;
  retrieve(toolId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Tool>;
  retrieve(
    toolId: string,
    params: ToolRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tool> {
    if (isRequestOptions(params)) {
      return this.retrieve(toolId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/tools/${toolId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Update an existing tool
   */
  update(
    toolId: string,
    params: ToolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Tool> {
    const { user_id, ...body } = params;
    return this._client.patch(`/v1/tools/${toolId}`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a list of all tools available to agents belonging to the org of the user
   */
  list(params?: ToolListParams, options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(
    params: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { user_id, ...query } = params;
    return this._client.get('/v1/tools/', {
      query,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete a tool by name
   */
  delete(toolId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/tools/${toolId}`, options);
  }

  /**
   * Add base tools
   */
  addBaseTools(
    params?: ToolAddBaseToolsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolAddBaseToolsResponse>;
  addBaseTools(options?: Core.RequestOptions): Core.APIPromise<ToolAddBaseToolsResponse>;
  addBaseTools(
    params: ToolAddBaseToolsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolAddBaseToolsResponse> {
    if (isRequestOptions(params)) {
      return this.addBaseTools({}, params);
    }
    const { user_id } = params;
    return this._client.post('/v1/tools/add-base-tools', {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a tool ID by name
   */
  retrieveByName(
    toolName: string,
    params?: ToolRetrieveByNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string>;
  retrieveByName(toolName: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieveByName(
    toolName: string,
    params: ToolRetrieveByNameParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.retrieveByName(toolName, {}, params);
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

export type ToolListResponse = Array<Shared.Tool>;

export type ToolDeleteResponse = unknown;

export type ToolAddBaseToolsResponse = Array<Shared.Tool>;

export type ToolRetrieveByNameResponse = string;

export interface ToolCreateParams {
  /**
   * Body param: The source code of the function.
   */
  source_code: string;

  /**
   * Body param: The description of the tool.
   */
  description?: string | null;

  /**
   * Body param: The JSON schema of the function (auto-generated from source_code if
   * not provided)
   */
  json_schema?: unknown | null;

  /**
   * Body param: The source code of the function.
   */
  module?: string | null;

  /**
   * Body param: The name of the function (auto-generated from source_code if not
   * provided).
   */
  name?: string | null;

  /**
   * Body param: The source type of the function.
   */
  source_type?: string;

  /**
   * Body param: Metadata tags.
   */
  tags?: Array<string>;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface ToolRetrieveParams {
  user_id?: string;
}

export interface ToolUpdateParams {
  /**
   * Body param: The description of the tool.
   */
  description?: string | null;

  /**
   * Body param: The JSON schema of the function (auto-generated from source_code if
   * not provided)
   */
  json_schema?: unknown | null;

  /**
   * Body param: The source code of the function.
   */
  module?: string | null;

  /**
   * Body param: The name of the function.
   */
  name?: string | null;

  /**
   * Body param: The source code of the function.
   */
  source_code?: string | null;

  /**
   * Body param: The type of the source code.
   */
  source_type?: string | null;

  /**
   * Body param: Metadata tags.
   */
  tags?: Array<string> | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface ToolListParams {
  /**
   * Query param:
   */
  cursor?: string | null;

  /**
   * Query param:
   */
  limit?: number | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface ToolAddBaseToolsParams {
  user_id?: string;
}

export interface ToolRetrieveByNameParams {
  user_id?: string;
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolAddBaseToolsResponse as ToolAddBaseToolsResponse,
    type ToolRetrieveByNameResponse as ToolRetrieveByNameResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolAddBaseToolsParams as ToolAddBaseToolsParams,
    type ToolRetrieveByNameParams as ToolRetrieveByNameParams,
  };
}

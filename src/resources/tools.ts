// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Tools extends APIResource {
  /**
   * Create a new tool
   */
  create(params: ToolCreateParams, options?: Core.RequestOptions): Core.APIPromise<ToolCreateResponse> {
    const { update, body_user_id, header_user_id, ...body } = params;
    return this._client.post('/v1/tools/', {
      query: { update },
      body: { user_id: body_user_id, ...body },
      ...options,
      headers: { ...(header_user_id != null ? { user_id: header_user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a tool by ID
   */
  retrieve(toolId: string, options?: Core.RequestOptions): Core.APIPromise<ToolRetrieveResponse> {
    return this._client.get(`/v1/tools/${toolId}`, options);
  }

  /**
   * Update an existing tool
   */
  update(
    toolId: string,
    params: ToolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolUpdateResponse> {
    const { body_user_id, header_user_id, ...body } = params;
    return this._client.patch(`/v1/tools/${toolId}`, {
      body: { user_id: body_user_id, ...body },
      ...options,
      headers: { ...(header_user_id != null ? { user_id: header_user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a list of all tools available to agents created by a user
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
    const { user_id } = params;
    return this._client.get('/v1/tools/', {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete a tool by name
   */
  delete(toolId: string, params?: ToolDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(toolId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(
    toolId: string,
    params: ToolDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.delete(toolId, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/tools/${toolId}`, {
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

/**
 * Representation of a tool, which is a function that can be called by the agent.
 *
 * Parameters: id (str): The unique identifier of the tool. name (str): The name of
 * the function. tags (List[str]): Metadata tags. source_code (str): The source
 * code of the function. json_schema (Dict): The JSON schema of the function.
 */
export interface ToolCreateResponse {
  /**
   * The name of the function.
   */
  name: string;

  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * Metadata tags.
   */
  tags: Array<string>;

  /**
   * The human-friendly ID of the Tool
   */
  id?: string;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function.
   */
  json_schema?: unknown;

  /**
   * The module of the function.
   */
  module?: string | null;

  /**
   * The type of the source code.
   */
  source_type?: string | null;

  /**
   * The unique identifier of the user associated with the function.
   */
  user_id?: string | null;
}

/**
 * Representation of a tool, which is a function that can be called by the agent.
 *
 * Parameters: id (str): The unique identifier of the tool. name (str): The name of
 * the function. tags (List[str]): Metadata tags. source_code (str): The source
 * code of the function. json_schema (Dict): The JSON schema of the function.
 */
export interface ToolRetrieveResponse {
  /**
   * The name of the function.
   */
  name: string;

  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * Metadata tags.
   */
  tags: Array<string>;

  /**
   * The human-friendly ID of the Tool
   */
  id?: string;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function.
   */
  json_schema?: unknown;

  /**
   * The module of the function.
   */
  module?: string | null;

  /**
   * The type of the source code.
   */
  source_type?: string | null;

  /**
   * The unique identifier of the user associated with the function.
   */
  user_id?: string | null;
}

/**
 * Representation of a tool, which is a function that can be called by the agent.
 *
 * Parameters: id (str): The unique identifier of the tool. name (str): The name of
 * the function. tags (List[str]): Metadata tags. source_code (str): The source
 * code of the function. json_schema (Dict): The JSON schema of the function.
 */
export interface ToolUpdateResponse {
  /**
   * The name of the function.
   */
  name: string;

  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * Metadata tags.
   */
  tags: Array<string>;

  /**
   * The human-friendly ID of the Tool
   */
  id?: string;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function.
   */
  json_schema?: unknown;

  /**
   * The module of the function.
   */
  module?: string | null;

  /**
   * The type of the source code.
   */
  source_type?: string | null;

  /**
   * The unique identifier of the user associated with the function.
   */
  user_id?: string | null;
}

export type ToolListResponse = Array<ToolListResponse.ToolListResponseItem>;

export namespace ToolListResponse {
  /**
   * Representation of a tool, which is a function that can be called by the agent.
   *
   * Parameters: id (str): The unique identifier of the tool. name (str): The name of
   * the function. tags (List[str]): Metadata tags. source_code (str): The source
   * code of the function. json_schema (Dict): The JSON schema of the function.
   */
  export interface ToolListResponseItem {
    /**
     * The name of the function.
     */
    name: string;

    /**
     * The source code of the function.
     */
    source_code: string;

    /**
     * Metadata tags.
     */
    tags: Array<string>;

    /**
     * The human-friendly ID of the Tool
     */
    id?: string;

    /**
     * The description of the tool.
     */
    description?: string | null;

    /**
     * The JSON schema of the function.
     */
    json_schema?: unknown;

    /**
     * The module of the function.
     */
    module?: string | null;

    /**
     * The type of the source code.
     */
    source_type?: string | null;

    /**
     * The unique identifier of the user associated with the function.
     */
    user_id?: string | null;
  }
}

export type ToolDeleteResponse = unknown;

export type ToolRetrieveByNameResponse = string;

export interface ToolCreateParams {
  /**
   * Body param: The source code of the function.
   */
  source_code: string;

  /**
   * Query param:
   */
  update?: boolean;

  /**
   * Body param: The unique identifier of the tool. If this is not provided, it will
   * be autogenerated.
   */
  id?: string | null;

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
   * Body param: The module of the function.
   */
  module?: string | null;

  /**
   * Body param: The name of the function (auto-generated from source_code if not
   * provided).
   */
  name?: string | null;

  /**
   * Body param: The type of the source code.
   */
  source_type?: string | null;

  /**
   * Body param: Metadata tags.
   */
  tags?: Array<string>;

  /**
   * Body param: Whether the tool is a terminal tool (allow requesting heartbeats).
   */
  terminal?: boolean | null;

  /**
   * Body param: The unique identifier of the user associated with the function.
   */
  body_user_id?: string | null;

  /**
   * Header param:
   */
  header_user_id?: string;
}

export interface ToolUpdateParams {
  /**
   * Body param: The unique identifier of the tool.
   */
  id: string;

  /**
   * Body param: The description of the tool.
   */
  description?: string | null;

  /**
   * Body param: The JSON schema of the function.
   */
  json_schema?: unknown | null;

  /**
   * Body param: The module of the function.
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
   * Body param: Whether the tool is a terminal tool (allow requesting heartbeats).
   */
  terminal?: boolean | null;

  /**
   * Body param: The unique identifier of the user associated with the function.
   */
  body_user_id?: string | null;

  /**
   * Header param:
   */
  header_user_id?: string;
}

export interface ToolListParams {
  user_id?: string;
}

export interface ToolDeleteParams {
  user_id?: string;
}

export interface ToolRetrieveByNameParams {
  user_id?: string;
}

export declare namespace Tools {
  export {
    type ToolCreateResponse as ToolCreateResponse,
    type ToolRetrieveResponse as ToolRetrieveResponse,
    type ToolUpdateResponse as ToolUpdateResponse,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolRetrieveByNameResponse as ToolRetrieveByNameResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolDeleteParams as ToolDeleteParams,
    type ToolRetrieveByNameParams as ToolRetrieveByNameParams,
  };
}

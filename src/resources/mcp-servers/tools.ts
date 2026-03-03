// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from '../tools';
import * as AgentsToolsAPI from '../agents/tools';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get a specific MCP tool by its ID
   */
  retrieve(toolID: string, params: ToolRetrieveParams, options?: RequestOptions): APIPromise<ToolsAPI.Tool> {
    const {
      mcp_server_id,
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params;
    return this._client.get(path`/v1/mcp-servers/${mcp_server_id}/tools/${toolID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a list of all tools for a specific MCP server
   */
  list(
    mcpServerID: string,
    params: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ToolListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/mcp-servers/${mcpServerID}/tools`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Execute a specific MCP tool
   *
   * The request body should contain the tool arguments in the ToolExecuteRequest
   * format.
   */
  run(
    toolID: string,
    params: ToolRunParams,
    options?: RequestOptions,
  ): APIPromise<AgentsToolsAPI.ToolExecutionResult> {
    const {
      mcp_server_id,
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post(path`/v1/mcp-servers/${mcp_server_id}/tools/${toolID}/run`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type ToolListResponse = Array<ToolsAPI.Tool>;

export interface ToolRetrieveParams {
  /**
   * Path param
   */
  mcp_server_id: string;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface ToolListParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface ToolRunParams {
  /**
   * Path param
   */
  mcp_server_id: string;

  /**
   * Body param: Arguments to pass to the tool
   */
  args?: { [key: string]: unknown };

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolListParams as ToolListParams,
    type ToolRunParams as ToolRunParams,
  };
}

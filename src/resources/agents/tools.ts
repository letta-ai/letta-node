// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as ToolsToolsAPI from '../tools/tools';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get tools from an existing agent
   */
  list(agentID: string, options?: RequestOptions): APIPromise<ToolListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/tools`, options);
  }

  /**
   * Attach a tool to an agent.
   */
  attach(
    toolID: string,
    params: ToolAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/attach/${toolID}`, options);
  }

  /**
   * Detach a tool from an agent.
   */
  detach(
    toolID: string,
    params: ToolDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/detach/${toolID}`, options);
  }

  /**
   * Attach a tool to an agent.
   */
  modifyApproval(
    toolName: string,
    params: ToolModifyApprovalParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id, requires_approval } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/approval/${toolName}`, {
      query: { requires_approval },
      ...options,
    });
  }
}

export type ToolListResponse = Array<ToolsToolsAPI.Tool>;

export interface ToolAttachParams {
  agent_id: string;
}

export interface ToolDetachParams {
  agent_id: string;
}

export interface ToolModifyApprovalParams {
  /**
   * Path param:
   */
  agent_id: string;

  /**
   * Query param:
   */
  requires_approval: boolean;
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolAttachParams as ToolAttachParams,
    type ToolDetachParams as ToolDetachParams,
    type ToolModifyApprovalParams as ToolModifyApprovalParams,
  };
}

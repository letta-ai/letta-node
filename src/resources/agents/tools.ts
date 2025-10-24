// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from '../tools';
import { ToolsArrayPage } from '../tools';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get tools from an existing agent.
   */
  list(
    agentID: string,
    query: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ToolsArrayPage, ToolsAPI.Tool> {
    return this._client.getAPIList(path`/v1/agents/${agentID}/tools`, ArrayPage<ToolsAPI.Tool>, {
      query,
      ...options,
    });
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
   * Modify the approval requirement for a tool attached to an agent.
   *
   * Accepts requires_approval via request body (preferred) or query parameter
   * (deprecated).
   */
  updateApproval(
    toolName: string,
    params: ToolUpdateApprovalParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id, query_requires_approval, ...body } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/approval/${toolName}`, {
      query: { requires_approval: query_requires_approval },
      body,
      ...options,
    });
  }
}

export interface ToolListParams extends ArrayPageParams {}

export interface ToolAttachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface ToolDetachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface ToolUpdateApprovalParams {
  /**
   * Path param: The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;

  /**
   * Body param: Whether the tool requires approval before execution
   */
  body_requires_approval: boolean;

  /**
   * @deprecated Query param: Whether the tool requires approval before execution
   */
  query_requires_approval?: boolean | null;
}

export declare namespace Tools {
  export {
    type ToolListParams as ToolListParams,
    type ToolAttachParams as ToolAttachParams,
    type ToolDetachParams as ToolDetachParams,
    type ToolUpdateApprovalParams as ToolUpdateApprovalParams,
  };
}

export { type ToolsArrayPage };

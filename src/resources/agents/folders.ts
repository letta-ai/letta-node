// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as SourcesAPI from '../sources/sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Folders extends APIResource {
  /**
   * Get the folders associated with an agent.
   */
  list(agentID: string, options?: RequestOptions): APIPromise<FolderListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/folders`, options);
  }

  /**
   * Attach a folder to an agent.
   */
  attach(
    folderID: string,
    params: FolderAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/folders/attach/${folderID}`, options);
  }

  /**
   * Detach a folder from an agent.
   */
  detach(
    folderID: string,
    params: FolderDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/folders/detach/${folderID}`, options);
  }
}

export type FolderListResponse = Array<SourcesAPI.Source>;

export interface FolderAttachParams {
  agent_id: string;
}

export interface FolderDetachParams {
  agent_id: string;
}

export declare namespace Folders {
  export {
    type FolderListResponse as FolderListResponse,
    type FolderAttachParams as FolderAttachParams,
    type FolderDetachParams as FolderDetachParams,
  };
}

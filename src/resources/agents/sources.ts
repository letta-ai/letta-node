// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as SourcesSourcesAPI from '../sources/sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sources extends APIResource {
  /**
   * Get the sources associated with an agent.
   */
  list(agentID: string, options?: RequestOptions): APIPromise<SourceListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/sources`, options);
  }

  /**
   * Attach a source to an agent.
   */
  attach(
    sourceID: string,
    params: SourceAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/sources/attach/${sourceID}`, options);
  }

  /**
   * Detach a source from an agent.
   */
  detach(
    sourceID: string,
    params: SourceDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/sources/detach/${sourceID}`, options);
  }
}

export type SourceListResponse = Array<SourcesSourcesAPI.Source>;

export interface SourceAttachParams {
  agent_id: string;
}

export interface SourceDetachParams {
  agent_id: string;
}

export declare namespace Sources {
  export {
    type SourceListResponse as SourceListResponse,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
  };
}

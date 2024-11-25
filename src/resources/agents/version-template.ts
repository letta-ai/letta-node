// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class VersionTemplate extends APIResource {
  /**
   * Creates a versioned version of an agent
   */
  create(
    agentId: string,
    params?: VersionTemplateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionTemplateCreateResponse>;
  create(agentId: string, options?: Core.RequestOptions): Core.APIPromise<VersionTemplateCreateResponse>;
  create(
    agentId: string,
    params: VersionTemplateCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionTemplateCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(agentId, {}, params);
    }
    const { returnAgentId, ...body } = params;
    return this._client.post(`/v1/agents/${agentId}/version-template`, {
      query: { returnAgentId },
      body,
      ...options,
    });
  }
}

export interface VersionTemplateCreateResponse {
  version: string;

  agentId?: string;
}

export interface VersionTemplateCreateParams {
  /**
   * Query param:
   */
  returnAgentId?: boolean;

  /**
   * Body param:
   */
  migrate_deployed_agents?: boolean;
}

export declare namespace VersionTemplate {
  export {
    type VersionTemplateCreateResponse as VersionTemplateCreateResponse,
    type VersionTemplateCreateParams as VersionTemplateCreateParams,
  };
}

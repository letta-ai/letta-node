// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Archives extends APIResource {
  /**
   * Attach an archive to an agent.
   */
  attach(archiveID: string, params: ArchiveAttachParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/archives/attach/${archiveID}`, options);
  }

  /**
   * Detach an archive from an agent.
   */
  detach(archiveID: string, params: ArchiveDetachParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/archives/detach/${archiveID}`, options);
  }
}

export type ArchiveAttachResponse = unknown;

export type ArchiveDetachResponse = unknown;

export interface ArchiveAttachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface ArchiveDetachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export declare namespace Archives {
  export {
    type ArchiveAttachResponse as ArchiveAttachResponse,
    type ArchiveDetachResponse as ArchiveDetachResponse,
    type ArchiveAttachParams as ArchiveAttachParams,
    type ArchiveDetachParams as ArchiveDetachParams,
  };
}

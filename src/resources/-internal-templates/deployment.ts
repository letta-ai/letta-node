// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deployment extends APIResource {
  /**
   * Delete all entities (blocks, agents, groups) with the specified deployment_id.
   * Deletion order: blocks -> agents -> groups to maintain referential integrity.
   */
  delete(deploymentID: string, options?: RequestOptions): APIPromise<DeploymentDeleteResponse> {
    return this._client.delete(path`/v1/_internal_templates/deployment/${deploymentID}`, options);
  }

  /**
   * List all entities (blocks, agents, groups) with the specified deployment_id.
   * Optionally filter by entity types.
   */
  listEntities(
    deploymentID: string,
    query: DeploymentListEntitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeploymentListEntitiesResponse> {
    return this._client.get(path`/v1/_internal_templates/deployment/${deploymentID}`, { query, ...options });
  }
}

/**
 * Response model for delete deployment operation.
 */
export interface DeploymentDeleteResponse {
  message: string;

  deleted_agents?: Array<string>;

  deleted_blocks?: Array<string>;

  deleted_groups?: Array<string>;
}

/**
 * Response model for listing deployment entities.
 */
export interface DeploymentListEntitiesResponse {
  deployment_id: string;

  message: string;

  total_count: number;

  entities?: Array<DeploymentListEntitiesResponse.Entity>;
}

export namespace DeploymentListEntitiesResponse {
  /**
   * A deployment entity.
   */
  export interface Entity {
    id: string;

    type: string;

    description?: string | null;

    entity_id?: string | null;

    name?: string | null;

    project_id?: string | null;
  }
}

export interface DeploymentListEntitiesParams {
  /**
   * Filter by entity types (block, agent, group)
   */
  entity_types?: Array<string> | null;
}

export declare namespace Deployment {
  export {
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentListEntitiesResponse as DeploymentListEntitiesResponse,
    type DeploymentListEntitiesParams as DeploymentListEntitiesParams,
  };
}

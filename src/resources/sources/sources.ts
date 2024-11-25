// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ModelsAPI from '../models/models';
import * as FilesAPI from './files';
import { FileListParams, FileListResponse, Filemetadata, Files } from './files';
import * as PassagesAPI from './passages';
import { Passage, PassageListResponse, Passages } from './passages';

export class Sources extends APIResource {
  passages: PassagesAPI.Passages = new PassagesAPI.Passages(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new data source.
   */
  create(body: SourceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Source> {
    return this._client.post('/v1/sources/', { body, ...options });
  }

  /**
   * Get all sources
   */
  retrieve(sourceId: string, options?: Core.RequestOptions): Core.APIPromise<Source> {
    return this._client.get(`/v1/sources/${sourceId}`, options);
  }

  /**
   * Update the name or documentation of an existing data source.
   */
  update(sourceId: string, body: SourceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Source> {
    return this._client.patch(`/v1/sources/${sourceId}`, { body, ...options });
  }

  /**
   * List all data sources created by a user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SourceListResponse> {
    return this._client.get('/v1/sources/', options);
  }

  /**
   * Delete a data source.
   */
  delete(sourceId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/sources/${sourceId}`, options);
  }

  /**
   * Attach a data source to an existing agent.
   */
  attach(
    sourceId: string,
    params: SourceAttachParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Source> {
    const { agent_id } = params;
    return this._client.post(`/v1/sources/${sourceId}/attach`, { query: { agent_id }, ...options });
  }

  /**
   * Detach a data source from an existing agent.
   */
  detach(
    sourceId: string,
    params: SourceDetachParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Source> {
    const { agent_id } = params;
    return this._client.post(`/v1/sources/${sourceId}/detach`, { query: { agent_id }, ...options });
  }

  /**
   * Upload a file to a data source.
   */
  upload(
    sourceId: string,
    body: SourceUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Job> {
    return this._client.post(
      `/v1/sources/${sourceId}/upload`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

/**
 * Representation of a source, which is a collection of files and passages.
 *
 * Parameters: id (str): The ID of the source name (str): The name of the source.
 * embedding*config (EmbeddingConfig): The embedding configuration used by the
 * source. user_id (str): The ID of the user that created the source. metadata*
 * (dict): Metadata associated with the source. description (str): The description
 * of the source.
 */
export interface Source {
  /**
   * The embedding configuration used by the source.
   */
  embedding_config: ModelsAPI.Embeddingconfig;

  /**
   * The name of the source.
   */
  name: string;

  /**
   * The human-friendly ID of the Source
   */
  id?: string;

  /**
   * The timestamp when the source was created.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this Tool.
   */
  created_by_id?: string | null;

  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;

  /**
   * Metadata associated with the source.
   */
  metadata_?: unknown | null;

  /**
   * The ID of the organization that created the source.
   */
  organization_id?: string | null;

  /**
   * The timestamp when the source was last updated.
   */
  updated_at?: string | null;
}

export type SourceListResponse = Array<Source>;

export type SourceDeleteResponse = unknown;

export interface SourceCreateParams {
  /**
   * The name of the source.
   */
  name: string;

  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config?: ModelsAPI.Embeddingconfig | null;

  /**
   * Metadata associated with the source.
   */
  metadata_?: unknown | null;
}

export interface SourceUpdateParams {
  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config?: ModelsAPI.Embeddingconfig | null;

  /**
   * Metadata associated with the source.
   */
  metadata_?: unknown | null;

  /**
   * The name of the source.
   */
  name?: string | null;
}

export interface SourceAttachParams {
  /**
   * The unique identifier of the agent to attach the source to.
   */
  agent_id: string;
}

export interface SourceDetachParams {
  /**
   * The unique identifier of the agent to detach the source from.
   */
  agent_id: string;
}

export interface SourceUploadParams {
  file: Core.Uploadable;
}

Sources.Passages = Passages;
Sources.Files = Files;

export declare namespace Sources {
  export {
    type Source as Source,
    type SourceListResponse as SourceListResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
    type SourceUploadParams as SourceUploadParams,
  };

  export { Passages as Passages, type Passage as Passage, type PassageListResponse as PassageListResponse };

  export {
    Files as Files,
    type Filemetadata as Filemetadata,
    type FileListResponse as FileListResponse,
    type FileListParams as FileListParams,
  };
}

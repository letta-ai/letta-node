// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ModelsAPI from '../models';
import * as Shared from '../shared';
import * as FilesAPI from './files';
import { FileListParams, FileListResponse, Filemetadata, Files } from './files';
import * as PassagesAPI from './passages';
import { PassageListParams, PassageListResponse, Passages } from './passages';

export class Sources extends APIResource {
  passages: PassagesAPI.Passages = new PassagesAPI.Passages(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new data source.
   */
  create(params: SourceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Source> {
    const { user_id, ...body } = params;
    return this._client.post('/v1/sources/', {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get all sources
   */
  retrieve(
    sourceId: string,
    params?: SourceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Source>;
  retrieve(sourceId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Source>;
  retrieve(
    sourceId: string,
    params: SourceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Source> {
    if (isRequestOptions(params)) {
      return this.retrieve(sourceId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/sources/${sourceId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Update the name or documentation of an existing data source.
   */
  update(
    sourceId: string,
    params: SourceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Source> {
    const { user_id, ...body } = params;
    return this._client.patch(`/v1/sources/${sourceId}`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * List all data sources created by a user.
   */
  list(params?: SourceListParams, options?: Core.RequestOptions): Core.APIPromise<SourceListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SourceListResponse>;
  list(
    params: SourceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { user_id } = params;
    return this._client.get('/v1/sources/', {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete a data source.
   */
  delete(
    sourceId: string,
    fileId: string,
    params?: SourceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(sourceId: string, fileId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    sourceId: string,
    fileId: string,
    params: SourceDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(sourceId, fileId, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/sources/${sourceId}/${fileId}`, {
      ...options,
      headers: {
        Accept: '*/*',
        ...(user_id != null ? { user_id: user_id } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Attach a data source to an existing agent.
   */
  attach(
    sourceId: string,
    params: SourceAttachParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Source> {
    const { agent_id, user_id } = params;
    return this._client.post(`/v1/sources/${sourceId}/attach`, {
      query: { agent_id },
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Detach a data source from an existing agent.
   */
  detach(
    sourceId: string,
    params: SourceDetachParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Source> {
    const { agent_id, user_id } = params;
    return this._client.post(`/v1/sources/${sourceId}/detach`, {
      query: { agent_id },
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a source by name
   */
  retrieveByName(
    sourceName: string,
    params?: SourceRetrieveByNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string>;
  retrieveByName(sourceName: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieveByName(
    sourceName: string,
    params: SourceRetrieveByNameParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.retrieveByName(sourceName, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/sources/name/${sourceName}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...(user_id != null ? { user_id: user_id } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Upload a file to a data source.
   */
  upload(
    sourceId: string,
    params: SourceUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Job> {
    const { user_id, ...body } = params;
    return this._client.post(
      `/v1/sources/${sourceId}/upload`,
      Core.multipartFormRequestOptions({
        body,
        ...options,
        headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
      }),
    );
  }
}

export type SourceListResponse = Array<Shared.Source>;

export type SourceRetrieveByNameResponse = string;

export interface SourceCreateParams {
  /**
   * Body param: The name of the source.
   */
  name: string;

  /**
   * Body param: The description of the source.
   */
  description?: string | null;

  /**
   * Body param: Embedding model configuration. This object specifies all the
   * information necessary to access an embedding model to usage with Letta, except
   * for secret keys.
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
   * Body param: Metadata associated with the source.
   */
  metadata_?: unknown | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface SourceRetrieveParams {
  user_id?: string;
}

export interface SourceUpdateParams {
  /**
   * Body param: The ID of the source.
   */
  id: string;

  /**
   * Body param: The description of the source.
   */
  description?: string | null;

  /**
   * Body param: Embedding model configuration. This object specifies all the
   * information necessary to access an embedding model to usage with Letta, except
   * for secret keys.
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
   * Body param: Metadata associated with the source.
   */
  metadata_?: unknown | null;

  /**
   * Body param: The name of the source.
   */
  name?: string | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface SourceListParams {
  user_id?: string;
}

export interface SourceDeleteParams {
  user_id?: string;
}

export interface SourceAttachParams {
  /**
   * Query param: The unique identifier of the agent to attach the source to.
   */
  agent_id: string;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface SourceDetachParams {
  /**
   * Query param: The unique identifier of the agent to detach the source from.
   */
  agent_id: string;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface SourceRetrieveByNameParams {
  user_id?: string;
}

export interface SourceUploadParams {
  /**
   * Body param:
   */
  file: Core.Uploadable;

  /**
   * Header param:
   */
  user_id?: string;
}

Sources.Passages = Passages;
Sources.Files = Files;

export declare namespace Sources {
  export {
    type SourceListResponse as SourceListResponse,
    type SourceRetrieveByNameResponse as SourceRetrieveByNameResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceRetrieveParams as SourceRetrieveParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceListParams as SourceListParams,
    type SourceDeleteParams as SourceDeleteParams,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
    type SourceRetrieveByNameParams as SourceRetrieveByNameParams,
    type SourceUploadParams as SourceUploadParams,
  };

  export {
    Passages as Passages,
    type PassageListResponse as PassageListResponse,
    type PassageListParams as PassageListParams,
  };

  export {
    Files as Files,
    type Filemetadata as Filemetadata,
    type FileListResponse as FileListResponse,
    type FileListParams as FileListParams,
  };
}

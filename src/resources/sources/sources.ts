// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as FilesAPI from './files';
import { FileListParams, FileListResponse, Files } from './files';
import * as PassagesAPI from './passages';
import { PassageListParams, PassageListResponse, Passages } from './passages';

export class Sources extends APIResource {
  passages: PassagesAPI.Passages = new PassagesAPI.Passages(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a new data source.
   */
  create(params: SourceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Source> {
    const { user_id, ...body } = params;
    return this._client.post('/v1/sources/', {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get a source by name
   */
  retrieve(
    sourceName: string,
    params?: SourceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string>;
  retrieve(sourceName: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  retrieve(
    sourceName: string,
    params: SourceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.retrieve(sourceName, {}, params);
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
   * Update the name or documentation of an existing data source.
   */
  update(
    sourceId: string,
    params: SourceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Source> {
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
  ): Core.APIPromise<Source> {
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
  ): Core.APIPromise<Source> {
    const { agent_id, user_id } = params;
    return this._client.post(`/v1/sources/${sourceId}/detach`, {
      query: { agent_id },
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
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

/**
 * Representation of a single FileMetadata
 */
export interface FileMetadata {
  /**
   * The unique identifier of the source associated with the document.
   */
  source_id: string;

  /**
   * The human-friendly ID of the File
   */
  id?: string;

  /**
   * The creation date of the file.
   */
  created_at?: string | null;

  /**
   * The creation date of the file.
   */
  file_creation_date?: string | null;

  /**
   * The last modified date of the file.
   */
  file_last_modified_date?: string | null;

  /**
   * The name of the file.
   */
  file_name?: string | null;

  /**
   * The path to the file.
   */
  file_path?: string | null;

  /**
   * The size of the file in bytes.
   */
  file_size?: number | null;

  /**
   * The type of the file (MIME type).
   */
  file_type?: string | null;

  /**
   * Whether this file is deleted or not.
   */
  is_deleted?: boolean;

  /**
   * The unique identifier of the organization associated with the document.
   */
  organization_id?: string | null;

  /**
   * The update date of the file.
   */
  updated_at?: string | null;
}

/**
 * Representation of a passage, which is stored in archival memory.
 *
 * Parameters: text (str): The text of the passage. embedding (List[float]): The
 * embedding of the passage. embedding_config (EmbeddingConfig): The embedding
 * configuration used by the passage. created_at (datetime): The creation date of
 * the passage. user_id (str): The unique identifier of the user associated with
 * the passage. agent_id (str): The unique identifier of the agent associated with
 * the passage. source_id (str): The data source of the passage. file_id (str): The
 * unique identifier of the file associated with the passage.
 */
export interface Passage {
  /**
   * The embedding of the passage.
   */
  embedding: Array<number> | null;

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
  embedding_config: Passage.EmbeddingConfig | null;

  /**
   * The text of the passage.
   */
  text: string;

  /**
   * The human-friendly ID of the Passage
   */
  id?: string;

  /**
   * The unique identifier of the agent associated with the passage.
   */
  agent_id?: string | null;

  /**
   * The creation date of the passage.
   */
  created_at?: string;

  /**
   * The unique identifier of the file associated with the passage.
   */
  file_id?: string | null;

  /**
   * The metadata of the passage.
   */
  metadata_?: unknown | null;

  /**
   * The data source of the passage.
   */
  source_id?: string | null;

  /**
   * The unique identifier of the user associated with the passage.
   */
  user_id?: string | null;
}

export namespace Passage {
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
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
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
  embedding_config: Source.EmbeddingConfig;

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

export namespace Source {
  /**
   * The embedding configuration used by the source.
   */
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
  }
}

export type SourceRetrieveResponse = string;

export type SourceListResponse = Array<Source>;

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
  embedding_config?: SourceCreateParams.EmbeddingConfig | null;

  /**
   * Body param: Metadata associated with the source.
   */
  metadata_?: unknown | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export namespace SourceCreateParams {
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
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
  }
}

export interface SourceRetrieveParams {
  user_id?: string;
}

export interface SourceUpdateParams {
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
  embedding_config?: SourceUpdateParams.EmbeddingConfig | null;

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

export namespace SourceUpdateParams {
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
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
  }
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
    type FileMetadata as FileMetadata,
    type Passage as Passage,
    type Source as Source,
    type SourceRetrieveResponse as SourceRetrieveResponse,
    type SourceListResponse as SourceListResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceRetrieveParams as SourceRetrieveParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceListParams as SourceListParams,
    type SourceDeleteParams as SourceDeleteParams,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
    type SourceUploadParams as SourceUploadParams,
  };

  export {
    Passages as Passages,
    type PassageListResponse as PassageListResponse,
    type PassageListParams as PassageListParams,
  };

  export { Files as Files, type FileListResponse as FileListResponse, type FileListParams as FileListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ModelsAPI from './models';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * List available embedding models using the asynchronous implementation for
   * improved performance.
   *
   * Returns EmbeddingModel format which extends EmbeddingConfig with additional
   * metadata fields. Legacy EmbeddingConfig fields are marked as deprecated but
   * still available for backward compatibility.
   */
  list(options?: RequestOptions): APIPromise<EmbeddingListResponse> {
    return this._client.get('/v1/models/embedding', options);
  }
}

export type EmbeddingListResponse = Array<EmbeddingListResponse.EmbeddingListResponseItem>;

export namespace EmbeddingListResponse {
  export interface EmbeddingListResponseItem {
    /**
     * Display name for the model shown in UI
     */
    display_name: string;

    /**
     * The dimension of the embedding
     */
    embedding_dim: number;

    /**
     * @deprecated Deprecated: Use 'provider_type' field instead. The endpoint type for
     * the embedding model.
     */
    embedding_endpoint_type:
      | 'openai'
      | 'anthropic'
      | 'bedrock'
      | 'google_ai'
      | 'google_vertex'
      | 'azure'
      | 'groq'
      | 'ollama'
      | 'webui'
      | 'webui-legacy'
      | 'lmstudio'
      | 'lmstudio-legacy'
      | 'llamacpp'
      | 'koboldcpp'
      | 'vllm'
      | 'hugging-face'
      | 'mistral'
      | 'together'
      | 'pinecone';

    /**
     * @deprecated Deprecated: Use 'name' field instead. Embedding model name.
     */
    embedding_model: string;

    /**
     * The actual model name used by the provider
     */
    name: string;

    /**
     * The name of the provider
     */
    provider_name: string;

    /**
     * The type of the provider
     */
    provider_type: ModelsAPI.ProviderType;

    /**
     * @deprecated Deprecated: The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * @deprecated Deprecated: The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * @deprecated Deprecated: The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * @deprecated Deprecated: The maximum batch size for processing embeddings.
     */
    batch_size?: number;

    /**
     * @deprecated Deprecated: The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * @deprecated Deprecated: The endpoint for the model.
     */
    embedding_endpoint?: string | null;

    /**
     * The handle for this config, in the format provider/model-name.
     */
    handle?: string | null;

    /**
     * Type of model (llm or embedding)
     */
    model_type?: 'embedding';
  }
}

export declare namespace Embeddings {
  export { type EmbeddingListResponse as EmbeddingListResponse };
}

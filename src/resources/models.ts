// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Models extends APIResource {
  /**
   * List available LLM models using the asynchronous implementation for improved
   * performance
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/v1/models/', { query, ...options });
  }

  /**
   * List available embedding models using the asynchronous implementation for
   * improved performance
   */
  listEmbedding(options?: RequestOptions): APIPromise<ModelListEmbeddingResponse> {
    return this._client.get('/v1/models/embedding', options);
  }

  listEmbeddings(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/models/embeddings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Configuration for embedding model connection and processing parameters.
 */
export interface EmbeddingConfig {
  /**
   * The dimension of the embedding.
   */
  embedding_dim: number;

  /**
   * The endpoint type for the model.
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
   * The maximum batch size for processing embeddings.
   */
  batch_size?: number;

  /**
   * The chunk size of the embedding.
   */
  embedding_chunk_size?: number | null;

  /**
   * The endpoint for the model (`None` if local).
   */
  embedding_endpoint?: string | null;

  /**
   * The handle for this config, in the format provider/model-name.
   */
  handle?: string | null;
}

/**
 * Configuration for Language Model (LLM) connection and generation parameters.
 */
export interface LlmConfig {
  /**
   * The context window size for the model.
   */
  context_window: number;

  /**
   * LLM model name.
   */
  model: string;

  /**
   * The endpoint type for the model.
   */
  model_endpoint_type:
    | 'openai'
    | 'anthropic'
    | 'google_ai'
    | 'google_vertex'
    | 'azure'
    | 'groq'
    | 'ollama'
    | 'webui'
    | 'webui-legacy'
    | 'lmstudio'
    | 'lmstudio-legacy'
    | 'lmstudio-chatcompletions'
    | 'llamacpp'
    | 'koboldcpp'
    | 'vllm'
    | 'hugging-face'
    | 'mistral'
    | 'together'
    | 'bedrock'
    | 'deepseek'
    | 'xai';

  /**
   * The framework compatibility type for the model.
   */
  compatibility_type?: 'gguf' | 'mlx' | null;

  /**
   * Whether or not the model should use extended thinking if it is a 'reasoning'
   * style model
   */
  enable_reasoner?: boolean;

  /**
   * Positive values penalize new tokens based on their existing frequency in the
   * text so far, decreasing the model's likelihood to repeat the same line verbatim.
   * From OpenAI: Number between -2.0 and 2.0.
   */
  frequency_penalty?: number | null;

  /**
   * The handle for this config, in the format provider/model-name.
   */
  handle?: string | null;

  /**
   * Configurable thinking budget for extended thinking. Used for enable_reasoner and
   * also for Google Vertex models like Gemini 2.5 Flash. Minimum value is 1024 when
   * used with enable_reasoner.
   */
  max_reasoning_tokens?: number;

  /**
   * The maximum number of tokens to generate. If not set, the model will use its
   * default value.
   */
  max_tokens?: number | null;

  /**
   * The endpoint for the model.
   */
  model_endpoint?: string | null;

  /**
   * The wrapper for the model.
   */
  model_wrapper?: string | null;

  /**
   * The provider category for the model.
   */
  provider_category?: ProviderCategory | null;

  /**
   * The provider name for the model.
   */
  provider_name?: string | null;

  /**
   * Puts 'inner_thoughts' as a kwarg in the function call if this is set to True.
   * This helps with function calling performance and also the generation of inner
   * thoughts.
   */
  put_inner_thoughts_in_kwargs?: boolean | null;

  /**
   * The reasoning effort to use when generating text reasoning models
   */
  reasoning_effort?: 'minimal' | 'low' | 'medium' | 'high' | null;

  /**
   * The temperature to use when generating text with the model. A higher temperature
   * will result in more random text.
   */
  temperature?: number;

  /**
   * The cost tier for the model (cloud only).
   */
  tier?: string | null;

  /**
   * Soft control for how verbose model output should be, used for GPT-5 models.
   */
  verbosity?: 'low' | 'medium' | 'high' | null;
}

export type ProviderCategory = 'base' | 'byok';

export type ProviderType =
  | 'anthropic'
  | 'azure'
  | 'bedrock'
  | 'cerebras'
  | 'deepseek'
  | 'google_ai'
  | 'google_vertex'
  | 'groq'
  | 'hugging-face'
  | 'letta'
  | 'lmstudio_openai'
  | 'mistral'
  | 'ollama'
  | 'openai'
  | 'together'
  | 'vllm'
  | 'xai';

export type ModelListResponse = Array<LlmConfig>;

export type ModelListEmbeddingResponse = Array<EmbeddingConfig>;

export interface ModelListParams {
  provider_category?: Array<ProviderCategory> | null;

  provider_name?: string | null;

  provider_type?: ProviderType | null;
}

export declare namespace Models {
  export {
    type EmbeddingConfig as EmbeddingConfig,
    type LlmConfig as LlmConfig,
    type ProviderCategory as ProviderCategory,
    type ProviderType as ProviderType,
    type ModelListResponse as ModelListResponse,
    type ModelListEmbeddingResponse as ModelListEmbeddingResponse,
    type ModelListParams as ModelListParams,
  };
}

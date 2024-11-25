// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EmbeddingAPI from './embedding';
import { Embedding, EmbeddingRetrieveResponse } from './embedding';

export class Models extends APIResource {
  embedding: EmbeddingAPI.Embedding = new EmbeddingAPI.Embedding(this._client);

  /**
   * List Llm Backends
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/v1/models/', options);
  }
}

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
export interface Embeddingconfig {
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

/**
 * Configuration for a Language Model (LLM) model. This object specifies all the
 * information necessary to access an LLM model to usage with Letta, except for
 * secret keys.
 *
 * Attributes: model (str): The name of the LLM model. model_endpoint_type (str):
 * The endpoint type for the model. model_endpoint (str): The endpoint for the
 * model. model_wrapper (str): The wrapper for the model. This is used to wrap
 * additional text around the input/output of the model. This is useful for
 * text-to-text completions, such as the Completions API in OpenAI. context_window
 * (int): The context window size for the model. put_inner_thoughts_in_kwargs
 * (bool): Puts `inner_thoughts` as a kwarg in the function call if this is set to
 * True. This helps with function calling performance and also the generation of
 * inner thoughts.
 */
export interface Llmconfig {
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
    | 'cohere'
    | 'google_ai'
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
    | 'together';

  /**
   * The endpoint for the model.
   */
  model_endpoint?: string | null;

  /**
   * The wrapper for the model.
   */
  model_wrapper?: string | null;

  /**
   * Puts 'inner_thoughts' as a kwarg in the function call if this is set to True.
   * This helps with function calling performance and also the generation of inner
   * thoughts.
   */
  put_inner_thoughts_in_kwargs?: boolean | null;
}

export type ModelListResponse = Array<Llmconfig>;

Models.Embedding = Embedding;

export declare namespace Models {
  export {
    type Embeddingconfig as Embeddingconfig,
    type Llmconfig as Llmconfig,
    type ModelListResponse as ModelListResponse,
  };

  export { Embedding as Embedding, type EmbeddingRetrieveResponse as EmbeddingRetrieveResponse };
}

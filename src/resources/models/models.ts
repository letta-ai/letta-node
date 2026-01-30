// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import * as EmbeddingsAPI from './embeddings';
import { EmbeddingListResponse, Embeddings } from './embeddings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Models extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);

  /**
   * List available LLM models using the asynchronous implementation for improved
   * performance.
   *
   * Returns Model format which extends LLMConfig with additional metadata fields.
   * Legacy LLMConfig fields are marked as deprecated but still available for
   * backward compatibility.
   */
  list(
    query: ModelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ModelListResponse> {
    return this._client.get('/v1/models/', { query, ...options });
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

export interface EmbeddingModel {
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
  provider_type: ProviderType;

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

/**
 * Configuration for Language Model (LLM) connection and generation parameters.
 *
 * .. deprecated:: LLMConfig is deprecated and should not be used as an input or
 * return type in API calls. Use the schemas in letta.schemas.model (ModelSettings,
 * OpenAIModelSettings, etc.) instead. For conversion, use the \_to_model() method
 * or Model.\_from_llm_config() method.
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
    | 'minimax'
    | 'mistral'
    | 'together'
    | 'bedrock'
    | 'deepseek'
    | 'xai'
    | 'zai'
    | 'openrouter'
    | 'chatgpt_oauth';

  /**
   * The framework compatibility type for the model.
   */
  compatibility_type?: 'gguf' | 'mlx' | null;

  /**
   * A human-friendly display name for the model.
   */
  display_name?: string | null;

  /**
   * The effort level for Anthropic Opus 4.5 model (controls token spending). Not
   * setting this gives similar performance to 'high'.
   */
  effort?: 'low' | 'medium' | 'high' | null;

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
   * @deprecated Deprecated: Use model_settings to configure parallel tool calls
   * instead. If set to True, enables parallel tool calling. Defaults to False.
   */
  parallel_tool_calls?: boolean | null;

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
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | null;

  /**
   * The response format for the model's output. Supports text, json_object, and
   * json_schema (structured outputs). Can be set via model_settings.
   */
  response_format?:
    | AgentsAPI.TextResponseFormat
    | AgentsAPI.JsonSchemaResponseFormat
    | AgentsAPI.JsonObjectResponseFormat
    | null;

  /**
   * Enable strict mode for tool calling. When true, tool schemas include strict:
   * true and additionalProperties: false, guaranteeing tool outputs match JSON
   * schemas.
   */
  strict?: boolean;

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

export interface Model {
  /**
   * @deprecated Deprecated: Use 'max_context_window' field instead. The context
   * window size for the model.
   */
  context_window: number;

  /**
   * The maximum context window for the model
   */
  max_context_window: number;

  /**
   * @deprecated Deprecated: Use 'name' field instead. LLM model name.
   */
  model: string;

  /**
   * @deprecated Deprecated: Use 'provider_type' field instead. The endpoint type for
   * the model.
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
    | 'minimax'
    | 'mistral'
    | 'together'
    | 'bedrock'
    | 'deepseek'
    | 'xai'
    | 'zai'
    | 'openrouter'
    | 'chatgpt_oauth';

  /**
   * The actual model name used by the provider
   */
  name: string;

  /**
   * The type of the provider
   */
  provider_type: ProviderType;

  /**
   * @deprecated Deprecated: The framework compatibility type for the model.
   */
  compatibility_type?: 'gguf' | 'mlx' | null;

  /**
   * A human-friendly display name for the model.
   */
  display_name?: string | null;

  /**
   * The effort level for Anthropic Opus 4.5 model (controls token spending). Not
   * setting this gives similar performance to 'high'.
   */
  effort?: 'low' | 'medium' | 'high' | null;

  /**
   * @deprecated Deprecated: Whether or not the model should use extended thinking if
   * it is a 'reasoning' style model.
   */
  enable_reasoner?: boolean;

  /**
   * @deprecated Deprecated: Positive values penalize new tokens based on their
   * existing frequency in the text so far.
   */
  frequency_penalty?: number | null;

  /**
   * The handle for this config, in the format provider/model-name.
   */
  handle?: string | null;

  /**
   * @deprecated Deprecated: Configurable thinking budget for extended thinking.
   */
  max_reasoning_tokens?: number;

  /**
   * @deprecated Deprecated: The maximum number of tokens to generate.
   */
  max_tokens?: number | null;

  /**
   * @deprecated Deprecated: The endpoint for the model.
   */
  model_endpoint?: string | null;

  /**
   * Type of model (llm or embedding)
   */
  model_type?: 'llm';

  /**
   * @deprecated Deprecated: The wrapper for the model.
   */
  model_wrapper?: string | null;

  /**
   * @deprecated Deprecated: If set to True, enables parallel tool calling.
   */
  parallel_tool_calls?: boolean | null;

  /**
   * @deprecated Deprecated: The provider category for the model.
   */
  provider_category?: ProviderCategory | null;

  /**
   * The provider name for the model.
   */
  provider_name?: string | null;

  /**
   * @deprecated Deprecated: Puts 'inner_thoughts' as a kwarg in the function call.
   */
  put_inner_thoughts_in_kwargs?: boolean | null;

  /**
   * @deprecated Deprecated: The reasoning effort to use when generating text
   * reasoning models.
   */
  reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | null;

  /**
   * The response format for the model's output. Supports text, json_object, and
   * json_schema (structured outputs). Can be set via model_settings.
   */
  response_format?:
    | AgentsAPI.TextResponseFormat
    | AgentsAPI.JsonSchemaResponseFormat
    | AgentsAPI.JsonObjectResponseFormat
    | null;

  /**
   * Enable strict mode for tool calling. When true, tool schemas include strict:
   * true and additionalProperties: false, guaranteeing tool outputs match JSON
   * schemas.
   */
  strict?: boolean;

  /**
   * @deprecated Deprecated: The temperature to use when generating text with the
   * model.
   */
  temperature?: number;

  /**
   * @deprecated Deprecated: The cost tier for the model (cloud only).
   */
  tier?: string | null;

  /**
   * @deprecated Deprecated: Soft control for how verbose model output should be.
   */
  verbosity?: 'low' | 'medium' | 'high' | null;
}

export type ProviderCategory = 'base' | 'byok';

export type ProviderType =
  | 'anthropic'
  | 'azure'
  | 'bedrock'
  | 'cerebras'
  | 'chatgpt_oauth'
  | 'deepseek'
  | 'google_ai'
  | 'google_vertex'
  | 'groq'
  | 'hugging-face'
  | 'letta'
  | 'lmstudio_openai'
  | 'minimax'
  | 'mistral'
  | 'ollama'
  | 'openai'
  | 'together'
  | 'vllm'
  | 'sglang'
  | 'openrouter'
  | 'xai'
  | 'zai';

export type ModelListResponse = Array<Model>;

export interface ModelListParams {
  provider_category?: Array<ProviderCategory> | null;

  provider_name?: string | null;

  provider_type?: ProviderType | null;
}

Models.Embeddings = Embeddings;

export declare namespace Models {
  export {
    type EmbeddingConfig as EmbeddingConfig,
    type EmbeddingModel as EmbeddingModel,
    type LlmConfig as LlmConfig,
    type Model as Model,
    type ProviderCategory as ProviderCategory,
    type ProviderType as ProviderType,
    type ModelListResponse as ModelListResponse,
    type ModelListParams as ModelListParams,
  };

  export { Embeddings as Embeddings, type EmbeddingListResponse as EmbeddingListResponse };
}

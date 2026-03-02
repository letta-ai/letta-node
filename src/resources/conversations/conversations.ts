// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import * as MessagesAPI from './messages';
import {
  CompactionRequest,
  CompactionResponse,
  MessageCompactParams,
  MessageCreateParams,
  MessageListParams,
  MessageStreamParams,
  MessageStreamResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new conversation for an agent.
   */
  create(params: ConversationCreateParams, options?: RequestOptions): APIPromise<Conversation> {
    const { agent_id, ...body } = params;
    return this._client.post('/v1/conversations/', { query: { agent_id }, body, ...options });
  }

  /**
   * Retrieve a specific conversation.
   */
  retrieve(conversationID: string, options?: RequestOptions): APIPromise<Conversation> {
    return this._client.get(path`/v1/conversations/${conversationID}`, options);
  }

  /**
   * Update a conversation.
   */
  update(
    conversationID: string,
    body: ConversationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Conversation> {
    return this._client.patch(path`/v1/conversations/${conversationID}`, { body, ...options });
  }

  /**
   * List all conversations for an agent (or all conversations if agent_id not
   * provided).
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get('/v1/conversations/', { query, ...options });
  }

  /**
   * Delete a conversation (soft delete).
   *
   * This marks the conversation as deleted but does not permanently remove it from
   * the database. The conversation will no longer appear in list operations. Any
   * isolated blocks associated with the conversation will be permanently deleted.
   */
  delete(conversationID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/conversations/${conversationID}`, options);
  }

  /**
   * Cancel runs associated with a conversation.
   *
   * Note: To cancel active runs, Redis is required.
   *
   * If conversation_id is an agent ID (starts with "agent-"), cancels runs for the
   * agent's default conversation.
   */
  cancel(conversationID: string, options?: RequestOptions): APIPromise<ConversationCancelResponse> {
    return this._client.post(path`/v1/conversations/${conversationID}/cancel`, options);
  }
}

/**
 * Represents a conversation on an agent for concurrent messaging.
 */
export interface Conversation {
  /**
   * The unique identifier of the conversation.
   */
  id: string;

  /**
   * The ID of the agent this conversation belongs to.
   */
  agent_id: string;

  /**
   * The timestamp when the object was created.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * The IDs of in-context messages for the conversation.
   */
  in_context_message_ids?: Array<string>;

  /**
   * IDs of blocks that are isolated (specific to this conversation, overriding agent
   * defaults).
   */
  isolated_block_ids?: Array<string>;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The model handle for this conversation (overrides agent's model). Format:
   * provider/model-name.
   */
  model?: string | null;

  /**
   * The model settings for this conversation (overrides agent's model settings).
   */
  model_settings?:
    | AgentsAPI.OpenAIModelSettings
    | AgentsAPI.AnthropicModelSettings
    | AgentsAPI.GoogleAIModelSettings
    | AgentsAPI.GoogleVertexModelSettings
    | AgentsAPI.AzureModelSettings
    | AgentsAPI.XaiModelSettings
    | Conversation.ZaiModelSettings
    | AgentsAPI.GroqModelSettings
    | AgentsAPI.DeepseekModelSettings
    | AgentsAPI.TogetherModelSettings
    | AgentsAPI.BedrockModelSettings
    | Conversation.OpenRouterModelSettings
    | Conversation.ChatGptoAuthModelSettings
    | null;

  /**
   * A summary of the conversation.
   */
  summary?: string | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
}

export namespace Conversation {
  /**
   * Z.ai (ZhipuAI) model configuration (OpenAI-compatible).
   */
  export interface ZaiModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'zai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    thinking?: ZaiModelSettings.Thinking;
  }

  export namespace ZaiModelSettings {
    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    export interface Thinking {
      /**
       * If False, preserved thinking is used (recommended for agents).
       */
      clear_thinking?: boolean;

      /**
       * Whether thinking is enabled or disabled.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  /**
   * OpenRouter model configuration (OpenAI-compatible).
   */
  export interface OpenRouterModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'openrouter';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * ChatGPT OAuth model configuration (uses ChatGPT backend API).
   */
  export interface ChatGptoAuthModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'chatgpt_oauth';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: ChatGptoAuthModelSettings.Reasoning;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace ChatGptoAuthModelSettings {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort level for GPT-5.x and o-series models.
       */
      reasoning_effort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh';
    }
  }
}

/**
 * Request model for creating a new conversation.
 */
export interface CreateConversation {
  /**
   * List of block labels that should be isolated (conversation-specific) rather than
   * shared across conversations. New blocks will be created as copies of the agent's
   * blocks with these labels.
   */
  isolated_block_labels?: Array<string> | null;

  /**
   * The model handle for this conversation (overrides agent's model). Format:
   * provider/model-name.
   */
  model?: string | null;

  /**
   * The model settings for this conversation (overrides agent's model settings).
   */
  model_settings?:
    | AgentsAPI.OpenAIModelSettings
    | AgentsAPI.AnthropicModelSettings
    | AgentsAPI.GoogleAIModelSettings
    | AgentsAPI.GoogleVertexModelSettings
    | AgentsAPI.AzureModelSettings
    | AgentsAPI.XaiModelSettings
    | CreateConversation.ZaiModelSettings
    | AgentsAPI.GroqModelSettings
    | AgentsAPI.DeepseekModelSettings
    | AgentsAPI.TogetherModelSettings
    | AgentsAPI.BedrockModelSettings
    | CreateConversation.OpenRouterModelSettings
    | CreateConversation.ChatGptoAuthModelSettings
    | null;

  /**
   * A summary of the conversation.
   */
  summary?: string | null;
}

export namespace CreateConversation {
  /**
   * Z.ai (ZhipuAI) model configuration (OpenAI-compatible).
   */
  export interface ZaiModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'zai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    thinking?: ZaiModelSettings.Thinking;
  }

  export namespace ZaiModelSettings {
    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    export interface Thinking {
      /**
       * If False, preserved thinking is used (recommended for agents).
       */
      clear_thinking?: boolean;

      /**
       * Whether thinking is enabled or disabled.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  /**
   * OpenRouter model configuration (OpenAI-compatible).
   */
  export interface OpenRouterModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'openrouter';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * ChatGPT OAuth model configuration (uses ChatGPT backend API).
   */
  export interface ChatGptoAuthModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'chatgpt_oauth';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: ChatGptoAuthModelSettings.Reasoning;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace ChatGptoAuthModelSettings {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort level for GPT-5.x and o-series models.
       */
      reasoning_effort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh';
    }
  }
}

/**
 * Request model for updating a conversation.
 */
export interface UpdateConversation {
  /**
   * The model handle for this conversation (overrides agent's model). Format:
   * provider/model-name.
   */
  model?: string | null;

  /**
   * The model settings for this conversation (overrides agent's model settings).
   */
  model_settings?:
    | AgentsAPI.OpenAIModelSettings
    | AgentsAPI.AnthropicModelSettings
    | AgentsAPI.GoogleAIModelSettings
    | AgentsAPI.GoogleVertexModelSettings
    | AgentsAPI.AzureModelSettings
    | AgentsAPI.XaiModelSettings
    | UpdateConversation.ZaiModelSettings
    | AgentsAPI.GroqModelSettings
    | AgentsAPI.DeepseekModelSettings
    | AgentsAPI.TogetherModelSettings
    | AgentsAPI.BedrockModelSettings
    | UpdateConversation.OpenRouterModelSettings
    | UpdateConversation.ChatGptoAuthModelSettings
    | null;

  /**
   * A summary of the conversation.
   */
  summary?: string | null;
}

export namespace UpdateConversation {
  /**
   * Z.ai (ZhipuAI) model configuration (OpenAI-compatible).
   */
  export interface ZaiModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'zai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    thinking?: ZaiModelSettings.Thinking;
  }

  export namespace ZaiModelSettings {
    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    export interface Thinking {
      /**
       * If False, preserved thinking is used (recommended for agents).
       */
      clear_thinking?: boolean;

      /**
       * Whether thinking is enabled or disabled.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  /**
   * OpenRouter model configuration (OpenAI-compatible).
   */
  export interface OpenRouterModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'openrouter';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * ChatGPT OAuth model configuration (uses ChatGPT backend API).
   */
  export interface ChatGptoAuthModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'chatgpt_oauth';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: ChatGptoAuthModelSettings.Reasoning;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace ChatGptoAuthModelSettings {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort level for GPT-5.x and o-series models.
       */
      reasoning_effort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh';
    }
  }
}

export type ConversationListResponse = Array<Conversation>;

export type ConversationDeleteResponse = unknown;

export type ConversationCancelResponse = { [key: string]: unknown };

export interface ConversationCreateParams {
  /**
   * Query param: The agent ID to create a conversation for
   */
  agent_id: string;

  /**
   * Body param: List of block labels that should be isolated (conversation-specific)
   * rather than shared across conversations. New blocks will be created as copies of
   * the agent's blocks with these labels.
   */
  isolated_block_labels?: Array<string> | null;

  /**
   * Body param: The model handle for this conversation (overrides agent's model).
   * Format: provider/model-name.
   */
  model?: string | null;

  /**
   * Body param: The model settings for this conversation (overrides agent's model
   * settings).
   */
  model_settings?:
    | AgentsAPI.OpenAIModelSettings
    | AgentsAPI.AnthropicModelSettings
    | AgentsAPI.GoogleAIModelSettings
    | AgentsAPI.GoogleVertexModelSettings
    | AgentsAPI.AzureModelSettings
    | AgentsAPI.XaiModelSettings
    | ConversationCreateParams.ZaiModelSettings
    | AgentsAPI.GroqModelSettings
    | AgentsAPI.DeepseekModelSettings
    | AgentsAPI.TogetherModelSettings
    | AgentsAPI.BedrockModelSettings
    | ConversationCreateParams.OpenRouterModelSettings
    | ConversationCreateParams.ChatGptoAuthModelSettings
    | null;

  /**
   * Body param: A summary of the conversation.
   */
  summary?: string | null;
}

export namespace ConversationCreateParams {
  /**
   * Z.ai (ZhipuAI) model configuration (OpenAI-compatible).
   */
  export interface ZaiModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'zai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    thinking?: ZaiModelSettings.Thinking;
  }

  export namespace ZaiModelSettings {
    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    export interface Thinking {
      /**
       * If False, preserved thinking is used (recommended for agents).
       */
      clear_thinking?: boolean;

      /**
       * Whether thinking is enabled or disabled.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  /**
   * OpenRouter model configuration (OpenAI-compatible).
   */
  export interface OpenRouterModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'openrouter';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * ChatGPT OAuth model configuration (uses ChatGPT backend API).
   */
  export interface ChatGptoAuthModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'chatgpt_oauth';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: ChatGptoAuthModelSettings.Reasoning;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace ChatGptoAuthModelSettings {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort level for GPT-5.x and o-series models.
       */
      reasoning_effort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh';
    }
  }
}

export interface ConversationUpdateParams {
  /**
   * The model handle for this conversation (overrides agent's model). Format:
   * provider/model-name.
   */
  model?: string | null;

  /**
   * The model settings for this conversation (overrides agent's model settings).
   */
  model_settings?:
    | AgentsAPI.OpenAIModelSettings
    | AgentsAPI.AnthropicModelSettings
    | AgentsAPI.GoogleAIModelSettings
    | AgentsAPI.GoogleVertexModelSettings
    | AgentsAPI.AzureModelSettings
    | AgentsAPI.XaiModelSettings
    | ConversationUpdateParams.ZaiModelSettings
    | AgentsAPI.GroqModelSettings
    | AgentsAPI.DeepseekModelSettings
    | AgentsAPI.TogetherModelSettings
    | AgentsAPI.BedrockModelSettings
    | ConversationUpdateParams.OpenRouterModelSettings
    | ConversationUpdateParams.ChatGptoAuthModelSettings
    | null;

  /**
   * A summary of the conversation.
   */
  summary?: string | null;
}

export namespace ConversationUpdateParams {
  /**
   * Z.ai (ZhipuAI) model configuration (OpenAI-compatible).
   */
  export interface ZaiModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'zai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    thinking?: ZaiModelSettings.Thinking;
  }

  export namespace ZaiModelSettings {
    /**
     * The thinking configuration for GLM-4.5+ models.
     */
    export interface Thinking {
      /**
       * If False, preserved thinking is used (recommended for agents).
       */
      clear_thinking?: boolean;

      /**
       * Whether thinking is enabled or disabled.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  /**
   * OpenRouter model configuration (OpenAI-compatible).
   */
  export interface OpenRouterModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'openrouter';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * ChatGPT OAuth model configuration (uses ChatGPT backend API).
   */
  export interface ChatGptoAuthModelSettings {
    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * Whether to enable parallel tool calling.
     */
    parallel_tool_calls?: boolean;

    /**
     * The type of the provider.
     */
    provider_type?: 'chatgpt_oauth';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: ChatGptoAuthModelSettings.Reasoning;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace ChatGptoAuthModelSettings {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort level for GPT-5.x and o-series models.
       */
      reasoning_effort?: 'none' | 'low' | 'medium' | 'high' | 'xhigh';
    }
  }
}

export interface ConversationListParams {
  /**
   * Cursor for pagination (conversation ID)
   */
  after?: string | null;

  /**
   * The agent ID to list conversations for (optional - returns all conversations if
   * not provided)
   */
  agent_id?: string | null;

  /**
   * Maximum number of conversations to return
   */
  limit?: number;

  /**
   * Sort order for conversations. 'asc' for oldest first, 'desc' for newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at' | 'last_run_completion';

  /**
   * Search for text within conversation summaries
   */
  summary_search?: string | null;
}

Conversations.Messages = Messages;

export declare namespace Conversations {
  export {
    type Conversation as Conversation,
    type CreateConversation as CreateConversation,
    type UpdateConversation as UpdateConversation,
    type ConversationListResponse as ConversationListResponse,
    type ConversationDeleteResponse as ConversationDeleteResponse,
    type ConversationCancelResponse as ConversationCancelResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Messages as Messages,
    type CompactionRequest as CompactionRequest,
    type CompactionResponse as CompactionResponse,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageCompactParams as MessageCompactParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

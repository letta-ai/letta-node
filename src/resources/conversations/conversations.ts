// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import * as MessagesAPI from './messages';
import {
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
   * List all conversations for an agent.
   */
  list(query: ConversationListParams, options?: RequestOptions): APIPromise<ConversationListResponse> {
    return this._client.get('/v1/conversations/', { query, ...options });
  }

  /**
   * Cancel runs associated with a conversation.
   *
   * Note: To cancel active runs, Redis is required.
   */
  cancel(conversationID: string, options?: RequestOptions): APIPromise<ConversationCancelResponse> {
    return this._client.post(path`/v1/conversations/${conversationID}/cancel`, options);
  }

  /**
   * Compact (summarize) a conversation's message history.
   *
   * This endpoint summarizes the in-context messages for a specific conversation,
   * reducing the message count while preserving important context.
   */
  compact(
    conversationID: string,
    body: ConversationCompactParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompactionResponse> {
    return this._client.post(path`/v1/conversations/${conversationID}/compact`, { body, ...options });
  }
}

export interface CompactionRequest {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * `model` is the only required user-facing field – it specifies the summarizer
   * model handle (e.g. `"openai/gpt-4o-mini"`). Per-model settings (temperature, max
   * tokens, etc.) are derived from the default configuration for that handle.
   */
  compaction_settings?: CompactionRequest.CompactionSettings | null;
}

export namespace CompactionRequest {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * `model` is the only required user-facing field – it specifies the summarizer
   * model handle (e.g. `"openai/gpt-4o-mini"`). Per-model settings (temperature, max
   * tokens, etc.) are derived from the default configuration for that handle.
   */
  export interface CompactionSettings {
    /**
     * Model handle to use for summarization (format: provider/model-name).
     */
    model: string;

    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window';

    /**
     * Optional model settings used to override defaults for the summarizer model.
     */
    model_settings?:
      | AgentsAPI.OpenAIModelSettings
      | AgentsAPI.AnthropicModelSettings
      | AgentsAPI.GoogleAIModelSettings
      | AgentsAPI.GoogleVertexModelSettings
      | AgentsAPI.AzureModelSettings
      | AgentsAPI.XaiModelSettings
      | CompactionSettings.ZaiModelSettings
      | AgentsAPI.GroqModelSettings
      | AgentsAPI.DeepseekModelSettings
      | AgentsAPI.TogetherModelSettings
      | AgentsAPI.BedrockModelSettings
      | CompactionSettings.ChatGptoAuthModelSettings
      | null;

    /**
     * The prompt to use for summarization.
     */
    prompt?: string;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement?: boolean;

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window mode).
     */
    sliding_window_percentage?: number;
  }

  export namespace CompactionSettings {
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
}

export interface CompactionResponse {
  num_messages_after: number;

  num_messages_before: number;

  summary: string;
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
   * A summary of the conversation.
   */
  summary?: string | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
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
   * A summary of the conversation.
   */
  summary?: string | null;
}

/**
 * Request model for updating a conversation.
 */
export interface UpdateConversation {
  /**
   * A summary of the conversation.
   */
  summary?: string | null;
}

export type ConversationListResponse = Array<Conversation>;

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
   * Body param: A summary of the conversation.
   */
  summary?: string | null;
}

export interface ConversationUpdateParams {
  /**
   * A summary of the conversation.
   */
  summary?: string | null;
}

export interface ConversationListParams {
  /**
   * The agent ID to list conversations for
   */
  agent_id: string;

  /**
   * Cursor for pagination (conversation ID)
   */
  after?: string | null;

  /**
   * Maximum number of conversations to return
   */
  limit?: number;
}

export interface ConversationCompactParams {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * `model` is the only required user-facing field – it specifies the summarizer
   * model handle (e.g. `"openai/gpt-4o-mini"`). Per-model settings (temperature, max
   * tokens, etc.) are derived from the default configuration for that handle.
   */
  compaction_settings?: ConversationCompactParams.CompactionSettings | null;
}

export namespace ConversationCompactParams {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * `model` is the only required user-facing field – it specifies the summarizer
   * model handle (e.g. `"openai/gpt-4o-mini"`). Per-model settings (temperature, max
   * tokens, etc.) are derived from the default configuration for that handle.
   */
  export interface CompactionSettings {
    /**
     * Model handle to use for summarization (format: provider/model-name).
     */
    model: string;

    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window';

    /**
     * Optional model settings used to override defaults for the summarizer model.
     */
    model_settings?:
      | AgentsAPI.OpenAIModelSettings
      | AgentsAPI.AnthropicModelSettings
      | AgentsAPI.GoogleAIModelSettings
      | AgentsAPI.GoogleVertexModelSettings
      | AgentsAPI.AzureModelSettings
      | AgentsAPI.XaiModelSettings
      | CompactionSettings.ZaiModelSettings
      | AgentsAPI.GroqModelSettings
      | AgentsAPI.DeepseekModelSettings
      | AgentsAPI.TogetherModelSettings
      | AgentsAPI.BedrockModelSettings
      | CompactionSettings.ChatGptoAuthModelSettings
      | null;

    /**
     * The prompt to use for summarization.
     */
    prompt?: string;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement?: boolean;

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window mode).
     */
    sliding_window_percentage?: number;
  }

  export namespace CompactionSettings {
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
}

Conversations.Messages = Messages;

export declare namespace Conversations {
  export {
    type CompactionRequest as CompactionRequest,
    type CompactionResponse as CompactionResponse,
    type Conversation as Conversation,
    type CreateConversation as CreateConversation,
    type UpdateConversation as UpdateConversation,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCancelResponse as ConversationCancelResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
    type ConversationCompactParams as ConversationCompactParams,
  };

  export {
    Messages as Messages,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import * as MessagesAPI from '../agents/messages';
import { MessagesArrayPage } from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Send a message to a conversation and get a response.
   *
   * This endpoint sends a message to an existing conversation. By default
   * (streaming=true), returns a streaming response (Server-Sent Events). Set
   * streaming=false to get a complete JSON response.
   *
   * If conversation_id is an agent ID (starts with "agent-"), routes to agent-direct
   * mode with locking but without conversation-specific features.
   */
  create(
    conversationID: string,
    params: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<Stream<MessagesAPI.LettaStreamingResponse>> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post(path`/v1/conversations/${conversationID}/messages`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
      stream: true,
    }) as APIPromise<Stream<MessagesAPI.LettaStreamingResponse>>;
  }

  /**
   * List all messages in a conversation.
   *
   * Returns LettaMessage objects (UserMessage, AssistantMessage, etc.) for all
   * messages in the conversation, with support for cursor-based pagination.
   *
   * If conversation_id is an agent ID (starts with "agent-"), returns messages from
   * the agent's default conversation (no conversation isolation).
   */
  list(
    conversationID: string,
    params: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesArrayPage, MessagesAPI.Message> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList(
      path`/v1/conversations/${conversationID}/messages`,
      ArrayPage<MessagesAPI.Message>,
      {
        query,
        ...options,
        headers: buildHeaders([
          {
            ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
            ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
            ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
          },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * Compact (summarize) a conversation's message history.
   *
   * This endpoint summarizes the in-context messages for a specific conversation,
   * reducing the message count while preserving important context.
   *
   * If conversation_id is an agent ID (starts with "agent-"), compacts the agent's
   * default conversation messages.
   */
  compact(
    conversationID: string,
    params: MessageCompactParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompactionResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params ?? {};
    return this._client.post(path`/v1/conversations/${conversationID}/compact`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Resume the stream for the most recent active run in a conversation.
   *
   * This endpoint allows you to reconnect to an active background stream for a
   * conversation, enabling recovery from network interruptions.
   *
   * If conversation_id is an agent ID (starts with "agent-"), retrieves the stream
   * for the agent's most recent active run.
   */
  stream(
    conversationID: string,
    params: MessageStreamParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<MessagesAPI.LettaStreamingResponse>> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params ?? {};
    return this._client.post(path`/v1/conversations/${conversationID}/stream`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
      stream: true,
    }) as APIPromise<Stream<MessagesAPI.LettaStreamingResponse>>;
  }
}

export interface CompactionRequest {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * Per-model settings (temperature, max tokens, etc.) are derived from the default
   * configuration for that handle.
   */
  compaction_settings?: CompactionRequest.CompactionSettings | null;
}

export namespace CompactionRequest {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * Per-model settings (temperature, max tokens, etc.) are derived from the default
   * configuration for that handle.
   */
  export interface CompactionSettings {
    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window' | 'self_compact_all' | 'self_compact_sliding_window';

    /**
     * Model handle to use for sliding_window/all summarization (format:
     * provider/model-name). If None, uses lightweight provider-specific defaults.
     */
    model?: string | null;

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
      | CompactionSettings.OpenRouterModelSettings
      | CompactionSettings.ChatGptoAuthModelSettings
      | null;

    /**
     * The prompt to use for summarization. If None, uses mode-specific default.
     */
    prompt?: string | null;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement?: boolean;

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window modes).
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
}

export interface CompactionResponse {
  num_messages_after: number;

  num_messages_before: number;

  summary: string;
}

export type MessageStreamResponse = unknown;

export interface MessageCreateParams {
  /**
   * @deprecated Body param: The name of the message argument in the designated
   * message tool. Still supported for legacy agent types, but deprecated for
   * letta_v1_agent onward.
   */
  assistant_message_tool_kwarg?: string;

  /**
   * @deprecated Body param: The name of the designated message tool. Still supported
   * for legacy agent types, but deprecated for letta_v1_agent onward.
   */
  assistant_message_tool_name?: string;

  /**
   * Body param: Whether to process the request in the background (only used when
   * streaming=true).
   */
  background?: boolean;

  /**
   * Body param: Client-side tools that the agent can call. When the agent calls a
   * client-side tool, execution pauses and returns control to the client to execute
   * the tool and provide the result via a ToolReturn.
   */
  client_tools?: Array<MessageCreateParams.ClientTool> | null;

  /**
   * @deprecated Body param: If set to True, enables reasoning before responses or
   * tool calls from the agent.
   */
  enable_thinking?: string;

  /**
   * Body param: If True, compaction events emit structured `SummaryMessage` and
   * `EventMessage` types. If False (default), compaction messages are not included
   * in the response.
   */
  include_compaction_messages?: boolean;

  /**
   * Body param: Whether to include periodic keepalive ping messages in the stream to
   * prevent connection timeouts (only used when streaming=true).
   */
  include_pings?: boolean;

  /**
   * Body param: Only return specified message types in the response. If `None`
   * (default) returns all messages.
   */
  include_return_message_types?: Array<MessagesAPI.MessageType> | null;

  /**
   * Body param: Syntactic sugar for a single user message. Equivalent to
   * messages=[{'role': 'user', 'content': input}].
   */
  input?:
    | string
    | Array<
        | MessagesAPI.TextContent
        | MessagesAPI.ImageContent
        | MessagesAPI.ToolCallContent
        | MessagesAPI.ToolReturnContent
        | MessagesAPI.ReasoningContent
        | MessagesAPI.RedactedReasoningContent
        | MessagesAPI.OmittedReasoningContent
        | MessageCreateParams.SummarizedReasoningContent
      >
    | null;

  /**
   * Body param: Maximum number of steps the agent should take to process the
   * request.
   */
  max_steps?: number;

  /**
   * Body param: The messages to be sent to the agent.
   */
  messages?: Array<
    AgentsAPI.MessageCreate | MessagesAPI.ApprovalCreate | MessageCreateParams.ToolReturnCreate
  > | null;

  /**
   * Body param: Model handle to use for this request instead of the agent's default
   * model. This allows sending a message to a different model without changing the
   * agent's configuration.
   */
  override_model?: string | null;

  /**
   * Body param: If True, returns log probabilities of the output tokens in the
   * response. Useful for RL training. Only supported for OpenAI-compatible providers
   * (including SGLang).
   */
  return_logprobs?: boolean;

  /**
   * Body param: If True, returns token IDs and logprobs for ALL LLM generations in
   * the agent step, not just the last one. Uses SGLang native /generate endpoint.
   * Returns 'turns' field with TurnTokenData for each assistant/tool turn. Required
   * for proper multi-turn RL training with loss masking.
   */
  return_token_ids?: boolean;

  /**
   * Body param: Flag to determine if individual tokens should be streamed, rather
   * than streaming per step (only used when streaming=true).
   */
  stream_tokens?: boolean;

  /**
   * Body param: If True (default), returns a streaming response (Server-Sent
   * Events). If False, returns a complete JSON response.
   */
  streaming?: boolean;

  /**
   * Body param: Number of most likely tokens to return at each position (0-20).
   * Requires return_logprobs=True.
   */
  top_logprobs?: number | null;

  /**
   * @deprecated Body param: Whether the server should parse specific tool call
   * arguments (default `send_message`) as `AssistantMessage` objects. Still
   * supported for legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export namespace MessageCreateParams {
  /**
   * Schema for a client-side tool passed in the request.
   *
   * Client-side tools are executed by the client, not the server. When the agent
   * calls a client-side tool, execution pauses and returns control to the client to
   * execute the tool and provide the result.
   */
  export interface ClientTool {
    /**
     * The name of the tool function
     */
    name: string;

    /**
     * Description of what the tool does
     */
    description?: string | null;

    /**
     * JSON Schema for the function parameters
     */
    parameters?: { [key: string]: unknown } | null;
  }

  /**
   * The style of reasoning content returned by the OpenAI Responses API
   */
  export interface SummarizedReasoningContent {
    /**
     * The unique identifier for this reasoning step.
     */
    id: string;

    /**
     * Summaries of the reasoning content.
     */
    summary: Array<SummarizedReasoningContent.Summary>;

    /**
     * The encrypted reasoning content.
     */
    encrypted_content?: string;

    /**
     * Indicates this is a summarized reasoning step.
     */
    type?: 'summarized_reasoning';
  }

  export namespace SummarizedReasoningContent {
    export interface Summary {
      /**
       * The index of the summary part.
       */
      index: number;

      /**
       * The text of the summary part.
       */
      text: string;
    }
  }

  /**
   * Submit tool return(s) from client-side tool execution.
   *
   * This is the preferred way to send tool results back to the agent after
   * client-side tool execution. It is equivalent to sending an ApprovalCreate with
   * tool return approvals, but provides a cleaner API for the common case.
   */
  export interface ToolReturnCreate {
    /**
     * List of tool returns from client-side execution
     */
    tool_returns: Array<MessagesAPI.ToolReturn>;

    /**
     * The message type to be created.
     */
    type?: 'tool_return';
  }
}

export interface MessageListParams extends ArrayPageParams {
  /**
   * Query param: Group ID to filter messages by.
   */
  group_id?: string | null;

  /**
   * Query param: Whether to include error messages and error statuses. For debugging
   * purposes only.
   */
  include_err?: boolean | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface MessageCompactParams {
  /**
   * Body param: Configuration for conversation compaction / summarization.
   *
   * Per-model settings (temperature, max tokens, etc.) are derived from the default
   * configuration for that handle.
   */
  compaction_settings?: MessageCompactParams.CompactionSettings | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export namespace MessageCompactParams {
  /**
   * Configuration for conversation compaction / summarization.
   *
   * Per-model settings (temperature, max tokens, etc.) are derived from the default
   * configuration for that handle.
   */
  export interface CompactionSettings {
    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window' | 'self_compact_all' | 'self_compact_sliding_window';

    /**
     * Model handle to use for sliding_window/all summarization (format:
     * provider/model-name). If None, uses lightweight provider-specific defaults.
     */
    model?: string | null;

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
      | CompactionSettings.OpenRouterModelSettings
      | CompactionSettings.ChatGptoAuthModelSettings
      | null;

    /**
     * The prompt to use for summarization. If None, uses mode-specific default.
     */
    prompt?: string | null;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement?: boolean;

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window modes).
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
}

export interface MessageStreamParams {
  /**
   * Body param: Number of entries to read per batch.
   */
  batch_size?: number | null;

  /**
   * Body param: Whether to include periodic keepalive ping messages in the stream to
   * prevent connection timeouts.
   */
  include_pings?: boolean | null;

  /**
   * Body param: Seconds to wait between polls when no new data.
   */
  poll_interval?: number | null;

  /**
   * Body param: Sequence id to use as a cursor for pagination. Response will start
   * streaming after this chunk sequence id
   */
  starting_after?: number;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export declare namespace Messages {
  export {
    type CompactionRequest as CompactionRequest,
    type CompactionResponse as CompactionResponse,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageCompactParams as MessageCompactParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

export { type MessagesArrayPage };

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import * as MessagesAPI from '../agents/messages';
import { MessagesArrayPage } from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { Stream } from '../../core/streaming';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Send a message to a conversation and get a response.
   *
   * This endpoint sends a message to an existing conversation. By default
   * (stream=true), returns a streaming response (Server-Sent Events). Set
   * stream=false to get a complete JSON response.
   */
  create(
    conversationID: string,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<Stream<MessagesAPI.LettaStreamingResponse>> {
    return this._client.post(path`/v1/conversations/${conversationID}/messages`, {
      body,
      ...options,
      stream: true,
    }) as APIPromise<Stream<MessagesAPI.LettaStreamingResponse>>;
  }

  /**
   * List all messages in a conversation.
   *
   * Returns LettaMessage objects (UserMessage, AssistantMessage, etc.) for all
   * messages in the conversation, with support for cursor-based pagination.
   */
  list(
    conversationID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesArrayPage, MessagesAPI.Message> {
    return this._client.getAPIList(
      path`/v1/conversations/${conversationID}/messages`,
      ArrayPage<MessagesAPI.Message>,
      { query, ...options },
    );
  }

  /**
   * Resume the stream for the most recent active run in a conversation.
   *
   * This endpoint allows you to reconnect to an active background stream for a
   * conversation, enabling recovery from network interruptions.
   */
  stream(
    conversationID: string,
    body: MessageStreamParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<MessagesAPI.LettaStreamingResponse>> {
    return this._client.post(path`/v1/conversations/${conversationID}/stream`, {
      body,
      ...options,
      stream: true,
    }) as APIPromise<Stream<MessagesAPI.LettaStreamingResponse>>;
  }
}

export type MessageStreamResponse = unknown;

export interface MessageCreateParams {
  /**
   * @deprecated The name of the message argument in the designated message tool.
   * Still supported for legacy agent types, but deprecated for letta_v1_agent
   * onward.
   */
  assistant_message_tool_kwarg?: string;

  /**
   * @deprecated The name of the designated message tool. Still supported for legacy
   * agent types, but deprecated for letta_v1_agent onward.
   */
  assistant_message_tool_name?: string;

  /**
   * Whether to process the request in the background (only used when stream=true).
   */
  background?: boolean;

  /**
   * Client-side tools that the agent can call. When the agent calls a client-side
   * tool, execution pauses and returns control to the client to execute the tool and
   * provide the result via a ToolReturn.
   */
  client_tools?: Array<MessageCreateParams.ClientTool> | null;

  /**
   * @deprecated If set to True, enables reasoning before responses or tool calls
   * from the agent.
   */
  enable_thinking?: string;

  /**
   * Whether to include periodic keepalive ping messages in the stream to prevent
   * connection timeouts (only used when stream=true).
   */
  include_pings?: boolean;

  /**
   * Only return specified message types in the response. If `None` (default) returns
   * all messages.
   */
  include_return_message_types?: Array<MessagesAPI.MessageType> | null;

  /**
   * Syntactic sugar for a single user message. Equivalent to messages=[{'role':
   * 'user', 'content': input}].
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
   * Maximum number of steps the agent should take to process the request.
   */
  max_steps?: number;

  /**
   * The messages to be sent to the agent.
   */
  messages?: Array<AgentsAPI.MessageCreate | MessagesAPI.ApprovalCreate> | null;

  /**
   * Model handle to use for this request instead of the agent's default model. This
   * allows sending a message to a different model without changing the agent's
   * configuration.
   */
  override_model?: string | null;

  /**
   * If True (default), returns a streaming response (Server-Sent Events). If False,
   * returns a complete JSON response.
   */
  stream?: boolean;

  /**
   * Flag to determine if individual tokens should be streamed, rather than streaming
   * per step (only used when stream=true).
   */
  stream_tokens?: boolean;

  /**
   * @deprecated Whether the server should parse specific tool call arguments
   * (default `send_message`) as `AssistantMessage` objects. Still supported for
   * legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;
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
}

export interface MessageListParams extends ArrayPageParams {
  /**
   * Group ID to filter messages by.
   */
  group_id?: string | null;

  /**
   * Whether to include error messages and error statuses. For debugging purposes
   * only.
   */
  include_err?: boolean | null;
}

export interface MessageStreamParams {
  /**
   * Number of entries to read per batch.
   */
  batch_size?: number | null;

  /**
   * Whether to include periodic keepalive ping messages in the stream to prevent
   * connection timeouts.
   */
  include_pings?: boolean | null;

  /**
   * Seconds to wait between polls when no new data.
   */
  poll_interval?: number | null;

  /**
   * Sequence id to use as a cursor for pagination. Response will start streaming
   * after this chunk sequence id
   */
  starting_after?: number;
}

export declare namespace Messages {
  export {
    type MessageStreamResponse as MessageStreamResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

export { type MessagesArrayPage };

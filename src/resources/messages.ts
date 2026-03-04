// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsMessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Retrieve a message by ID.
   */
  retrieve(messageID: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/v1/messages/${messageID}`, options);
  }

  /**
   * List messages across all agents for the current user.
   */
  list(
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get('/v1/messages/', { query, ...options });
  }

  /**
   * Search messages across the organization with optional agent filtering. Returns
   * messages with FTS/vector ranks and total RRF score.
   *
   * This is a cloud-only feature.
   */
  search(body: MessageSearchParams, options?: RequestOptions): APIPromise<MessageSearchResponse> {
    return this._client.post('/v1/messages/search', { body, ...options });
  }
}

export interface MessageSearchRequest {
  /**
   * Text query for full-text search
   */
  query: string;

  /**
   * Filter messages by agent ID
   */
  agent_id?: string | null;

  /**
   * Filter messages by conversation ID
   */
  conversation_id?: string | null;

  /**
   * Filter messages created on or before this date
   */
  end_date?: string | null;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Search mode to use
   */
  search_mode?: 'vector' | 'fts' | 'hybrid';

  /**
   * Filter messages created after this date
   */
  start_date?: string | null;
}

/**
 * Result from a message search operation with scoring details.
 */
export interface MessageSearchResult {
  /**
   * The embedded content (LLM-friendly)
   */
  embedded_text: string;

  /**
   * The raw message object
   */
  message: AgentsMessagesAPI.InternalMessage;

  /**
   * Reciprocal Rank Fusion combined score
   */
  rrf_score: number;

  /**
   * Full-text search rank position if FTS was used
   */
  fts_rank?: number | null;

  /**
   * Vector search rank position if vector search was used
   */
  vector_rank?: number | null;
}

export type MessageRetrieveResponse = Array<AgentsMessagesAPI.Message>;

export type MessageListResponse = Array<AgentsMessagesAPI.Message>;

export type MessageSearchResponse = Array<
  | MessageSearchResponse.SystemMessageListResult
  | MessageSearchResponse.UserMessageListResult
  | MessageSearchResponse.ReasoningMessageListResult
  | MessageSearchResponse.AssistantMessageListResult
>;

export namespace MessageSearchResponse {
  /**
   * System message list result with agent context.
   *
   * Shape is identical to UpdateSystemMessage but includes the owning agent_id and
   * message id.
   */
  export interface SystemMessageListResult {
    /**
     * The message content sent by the system (can be a string or an array of
     * multi-modal content parts)
     */
    content: string;

    /**
     * The time the message was created in ISO format.
     */
    created_at: string;

    /**
     * The unique identifier of the message.
     */
    message_id: string;

    /**
     * The unique identifier of the agent that owns the message.
     */
    agent_id?: string | null;

    /**
     * The unique identifier of the conversation that the message belongs to.
     */
    conversation_id?: string | null;

    message_type?: 'system_message';
  }

  /**
   * User message list result with agent context.
   *
   * Shape is identical to UpdateUserMessage but includes the owning agent_id and
   * message id.
   */
  export interface UserMessageListResult {
    /**
     * The message content sent by the user (can be a string or an array of multi-modal
     * content parts)
     */
    content: Array<AgentsMessagesAPI.LettaUserMessageContentUnion> | string;

    /**
     * The time the message was created in ISO format.
     */
    created_at: string;

    /**
     * The unique identifier of the message.
     */
    message_id: string;

    /**
     * The unique identifier of the agent that owns the message.
     */
    agent_id?: string | null;

    /**
     * The unique identifier of the conversation that the message belongs to.
     */
    conversation_id?: string | null;

    message_type?: 'user_message';
  }

  /**
   * Reasoning message list result with agent context.
   *
   * Shape is identical to UpdateReasoningMessage but includes the owning agent_id
   * and message id.
   */
  export interface ReasoningMessageListResult {
    /**
     * The time the message was created in ISO format.
     */
    created_at: string;

    /**
     * The unique identifier of the message.
     */
    message_id: string;

    reasoning: string;

    /**
     * The unique identifier of the agent that owns the message.
     */
    agent_id?: string | null;

    /**
     * The unique identifier of the conversation that the message belongs to.
     */
    conversation_id?: string | null;

    message_type?: 'reasoning_message';
  }

  /**
   * Assistant message list result with agent context.
   *
   * Shape is identical to UpdateAssistantMessage but includes the owning agent_id
   * and message id.
   */
  export interface AssistantMessageListResult {
    /**
     * The message content sent by the assistant (can be a string or an array of
     * content parts)
     */
    content: Array<AgentsMessagesAPI.LettaAssistantMessageContentUnion> | string;

    /**
     * The time the message was created in ISO format.
     */
    created_at: string;

    /**
     * The unique identifier of the message.
     */
    message_id: string;

    /**
     * The unique identifier of the agent that owns the message.
     */
    agent_id?: string | null;

    /**
     * The unique identifier of the conversation that the message belongs to.
     */
    conversation_id?: string | null;

    message_type?: 'assistant_message';
  }
}

export interface MessageListParams {
  /**
   * Message ID cursor for pagination. Returns messages that come after this message
   * ID in the specified sort order
   */
  after?: string | null;

  /**
   * Message ID cursor for pagination. Returns messages that come before this message
   * ID in the specified sort order
   */
  before?: string | null;

  /**
   * Conversation ID to filter messages by
   */
  conversation_id?: string | null;

  /**
   * Maximum number of messages to return
   */
  limit?: number | null;

  /**
   * Sort order for messages by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';
}

export interface MessageSearchParams {
  /**
   * Text query for full-text search
   */
  query: string;

  /**
   * Filter messages by agent ID
   */
  agent_id?: string | null;

  /**
   * Filter messages by conversation ID
   */
  conversation_id?: string | null;

  /**
   * Filter messages created on or before this date
   */
  end_date?: string | null;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Search mode to use
   */
  search_mode?: 'vector' | 'fts' | 'hybrid';

  /**
   * Filter messages created after this date
   */
  start_date?: string | null;
}

export declare namespace Messages {
  export {
    type MessageSearchRequest as MessageSearchRequest,
    type MessageSearchResult as MessageSearchResult,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageSearchResponse as MessageSearchResponse,
    type MessageListParams as MessageListParams,
    type MessageSearchParams as MessageSearchParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ToolsAPI from './tools';
import * as AgentsMessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
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

export type MessageListResponse = Array<AgentsMessagesAPI.Message>;

export type MessageSearchResponse = Array<
  | AgentsMessagesAPI.SystemMessage
  | AgentsMessagesAPI.UserMessage
  | AgentsMessagesAPI.ReasoningMessage
  | AgentsMessagesAPI.HiddenReasoningMessage
  | AgentsMessagesAPI.ToolCallMessage
  | ToolsAPI.ToolReturnMessage
  | AgentsMessagesAPI.AssistantMessage
  | AgentsMessagesAPI.ApprovalRequestMessage
  | AgentsMessagesAPI.ApprovalResponseMessage
  | AgentsMessagesAPI.SummaryMessage
  | AgentsMessagesAPI.EventMessage
>;

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
    type MessageListResponse as MessageListResponse,
    type MessageSearchResponse as MessageSearchResponse,
    type MessageListParams as MessageListParams,
    type MessageSearchParams as MessageSearchParams,
  };
}

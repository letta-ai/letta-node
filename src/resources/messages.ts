// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsMessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Retrieve a message by ID.
   */
  retrieve(
    messageID: string,
    params: MessageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageRetrieveResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/messages/${messageID}`, {
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
   * List messages across all agents for the current user.
   */
  list(
    params: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.get('/v1/messages/', {
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
    });
  }

  /**
   * Search messages across the organization with optional agent filtering. Returns
   * messages with FTS/vector ranks and total RRF score.
   *
   * This is a cloud-only feature.
   */
  search(params: MessageSearchParams, options?: RequestOptions): APIPromise<MessageSearchResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post('/v1/messages/search', {
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

export interface MessageRetrieveParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface MessageListParams {
  /**
   * Query param: Message ID cursor for pagination. Returns messages that come after
   * this message ID in the specified sort order
   */
  after?: string | null;

  /**
   * Query param: Message ID cursor for pagination. Returns messages that come before
   * this message ID in the specified sort order
   */
  before?: string | null;

  /**
   * Query param: Conversation ID to filter messages by
   */
  conversation_id?: string | null;

  /**
   * Query param: Maximum number of messages to return
   */
  limit?: number | null;

  /**
   * Query param: Sort order for messages by creation time. 'asc' for oldest first,
   * 'desc' for newest first
   */
  order?: 'asc' | 'desc';

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

export interface MessageSearchParams {
  /**
   * Body param: Text query for full-text search
   */
  query: string;

  /**
   * Body param: Filter messages by agent ID
   */
  agent_id?: string | null;

  /**
   * Body param: Filter messages by conversation ID
   */
  conversation_id?: string | null;

  /**
   * Body param: Filter messages created on or before this date
   */
  end_date?: string | null;

  /**
   * Body param: Maximum number of results to return
   */
  limit?: number;

  /**
   * Body param: Search mode to use
   */
  search_mode?: 'vector' | 'fts' | 'hybrid';

  /**
   * Body param: Filter messages created after this date
   */
  start_date?: string | null;

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
    type MessageSearchRequest as MessageSearchRequest,
    type MessageSearchResult as MessageSearchResult,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageSearchResponse as MessageSearchResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
    type MessageSearchParams as MessageSearchParams,
  };
}

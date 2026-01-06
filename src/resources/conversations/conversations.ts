// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageListParams,
  MessageListResponse,
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
   * List all conversations for an agent.
   */
  list(query: ConversationListParams, options?: RequestOptions): APIPromise<ConversationListResponse> {
    return this._client.get('/v1/conversations/', { query, ...options });
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
   * A summary of the conversation.
   */
  summary?: string | null;
}

export type ConversationListResponse = Array<Conversation>;

export interface ConversationCreateParams {
  /**
   * Query param: The agent ID to create a conversation for
   */
  agent_id: string;

  /**
   * Body param: A summary of the conversation.
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

Conversations.Messages = Messages;

export declare namespace Conversations {
  export {
    type Conversation as Conversation,
    type CreateConversation as CreateConversation,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

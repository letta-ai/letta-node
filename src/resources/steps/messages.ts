// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from '../tools';
import * as MessagesAPI from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * List messages for a given step.
   */
  list(
    stepID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/v1/steps/${stepID}/messages`, { query, ...options });
  }
}

export type MessageListResponse = Array<
  | MessagesAPI.SystemMessage
  | MessagesAPI.UserMessage
  | MessagesAPI.ReasoningMessage
  | MessagesAPI.HiddenReasoningMessage
  | MessagesAPI.ToolCallMessage
  | ToolsAPI.ToolReturnMessage
  | MessagesAPI.AssistantMessage
  | MessagesAPI.ApprovalRequestMessage
  | MessagesAPI.ApprovalResponseMessage
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

  /**
   * Sort by field
   */
  order_by?: 'created_at';
}

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse, type MessageListParams as MessageListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schedule extends APIResource {
  /**
   * Schedule a message to be sent by the agent at a specified time or on a recurring
   * basis.
   */
  create(
    agentID: string,
    body: ScheduleCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleCreateResponse> {
    return this._client.post(path`/v1/agents/${agentID}/schedule`, { body, ...options });
  }

  /**
   * Retrieve a scheduled message by its ID for a specific agent.
   */
  retrieve(
    scheduledMessageID: string,
    params: ScheduleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleRetrieveResponse> {
    const { agent_id } = params;
    return this._client.get(path`/v1/agents/${agent_id}/schedule/${scheduledMessageID}`, options);
  }

  /**
   * List all scheduled messages for a specific agent.
   */
  list(
    agentID: string,
    query: ScheduleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/schedule`, { query, ...options });
  }

  /**
   * Delete a scheduled message by its ID for a specific agent.
   */
  delete(
    scheduledMessageID: string,
    params: ScheduleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleDeleteResponse> {
    const { agent_id, ...body } = params;
    return this._client.delete(path`/v1/agents/${agent_id}/schedule/${scheduledMessageID}`, {
      body,
      ...options,
    });
  }
}

export interface ScheduleCreateResponse {
  id: string;

  next_scheduled_at?: string;
}

export interface ScheduleRetrieveResponse {
  id: string;

  agent_id: string;

  message: ScheduleRetrieveResponse.Message;

  next_scheduled_time: string | null;

  schedule: ScheduleRetrieveResponse.UnionMember0 | ScheduleRetrieveResponse.UnionMember1;
}

export namespace ScheduleRetrieveResponse {
  export interface Message {
    messages: Array<Message.Message>;

    callback_url?: string;

    include_return_message_types?: Array<
      | 'system_message'
      | 'user_message'
      | 'assistant_message'
      | 'reasoning_message'
      | 'hidden_reasoning_message'
      | 'tool_call_message'
      | 'tool_return_message'
      | 'approval_request_message'
      | 'approval_response_message'
    >;

    max_steps?: number;
  }

  export namespace Message {
    export interface Message {
      content: Array<Message.UnionMember0 | Message.UnionMember1> | string;

      role: 'user' | 'assistant' | 'system';

      name?: string;

      otid?: string;

      sender_id?: string;

      type?: 'message';
    }

    export namespace Message {
      export interface UnionMember0 {
        text: string;

        signature?: string | null;

        type?: 'text';
      }

      export interface UnionMember1 {
        source: UnionMember1.Source;

        type: 'image';
      }

      export namespace UnionMember1 {
        export interface Source {
          data: string;

          media_type: string;

          detail?: string;

          type?: 'base64';
        }
      }
    }
  }

  export interface UnionMember0 {
    scheduled_at: number;

    type?: 'one-time';
  }

  export interface UnionMember1 {
    cron_expression: string;

    type: 'recurring';
  }
}

export interface ScheduleListResponse {
  has_next_page: boolean;

  scheduled_messages: Array<ScheduleListResponse.ScheduledMessage>;
}

export namespace ScheduleListResponse {
  export interface ScheduledMessage {
    id: string;

    agent_id: string;

    message: ScheduledMessage.Message;

    next_scheduled_time: string | null;

    schedule: ScheduledMessage.UnionMember0 | ScheduledMessage.UnionMember1;
  }

  export namespace ScheduledMessage {
    export interface Message {
      messages: Array<Message.Message>;

      callback_url?: string;

      include_return_message_types?: Array<
        | 'system_message'
        | 'user_message'
        | 'assistant_message'
        | 'reasoning_message'
        | 'hidden_reasoning_message'
        | 'tool_call_message'
        | 'tool_return_message'
        | 'approval_request_message'
        | 'approval_response_message'
      >;

      max_steps?: number;
    }

    export namespace Message {
      export interface Message {
        content: Array<Message.UnionMember0 | Message.UnionMember1> | string;

        role: 'user' | 'assistant' | 'system';

        name?: string;

        otid?: string;

        sender_id?: string;

        type?: 'message';
      }

      export namespace Message {
        export interface UnionMember0 {
          text: string;

          signature?: string | null;

          type?: 'text';
        }

        export interface UnionMember1 {
          source: UnionMember1.Source;

          type: 'image';
        }

        export namespace UnionMember1 {
          export interface Source {
            data: string;

            media_type: string;

            detail?: string;

            type?: 'base64';
          }
        }
      }
    }

    export interface UnionMember0 {
      scheduled_at: number;

      type?: 'one-time';
    }

    export interface UnionMember1 {
      cron_expression: string;

      type: 'recurring';
    }
  }
}

export interface ScheduleDeleteResponse {
  success: true;
}

export interface ScheduleCreateParams {
  messages: Array<ScheduleCreateParams.Message>;

  schedule: ScheduleCreateParams.UnionMember0 | ScheduleCreateParams.UnionMember1;

  callback_url?: string;

  include_return_message_types?: Array<
    | 'system_message'
    | 'user_message'
    | 'assistant_message'
    | 'reasoning_message'
    | 'hidden_reasoning_message'
    | 'tool_call_message'
    | 'tool_return_message'
    | 'approval_request_message'
    | 'approval_response_message'
  >;

  max_steps?: number;
}

export namespace ScheduleCreateParams {
  export interface Message {
    content: Array<Message.UnionMember0 | Message.UnionMember1> | string;

    role: 'user' | 'assistant' | 'system';

    name?: string;

    otid?: string;

    sender_id?: string;

    type?: 'message';
  }

  export namespace Message {
    export interface UnionMember0 {
      text: string;

      signature?: string | null;

      type?: 'text';
    }

    export interface UnionMember1 {
      source: UnionMember1.Source;

      type: 'image';
    }

    export namespace UnionMember1 {
      export interface Source {
        data: string;

        media_type: string;

        detail?: string;

        type?: 'base64';
      }
    }
  }

  export interface UnionMember0 {
    scheduled_at: number;

    type?: 'one-time';
  }

  export interface UnionMember1 {
    cron_expression: string;

    type: 'recurring';
  }
}

export interface ScheduleRetrieveParams {
  agent_id: string;
}

export interface ScheduleListParams {
  after?: string;

  limit?: string;
}

export interface ScheduleDeleteParams {
  agent_id: string;
}

export declare namespace Schedule {
  export {
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleRetrieveResponse as ScheduleRetrieveResponse,
    type ScheduleListResponse as ScheduleListResponse,
    type ScheduleDeleteResponse as ScheduleDeleteResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
    type ScheduleRetrieveParams as ScheduleRetrieveParams,
    type ScheduleListParams as ScheduleListParams,
    type ScheduleDeleteParams as ScheduleDeleteParams,
  };
}

import { EventSource } from 'extended-eventsource';
import { MessageCreateParams, MessageCreateResponse } from '@letta-ai/letta/resources/agents';
import { safeJSON } from '@letta-ai/letta/core';
import Letta from '@letta-ai/letta';
import RequestOptions = Letta.RequestOptions;

interface StreamInputOptions {
  agentId: string;
  baseUrl: string;
  headers: Record<string, string>;
  payload: MessageCreateParams;
  requestOptions?: RequestOptions | undefined;
}

function hasMessageType(message: MessageResponse): message is MessageResponse & { message_type: string } {
  return Object.prototype.hasOwnProperty.call(message, 'message_type');
}

export function isAssistantMessage(
  message: MessageResponse,
): message is MessageCreateResponse.AssistantMessage {
  if (hasMessageType(message)) {
    return message.message_type === 'assistant_message';
  }

  return false;
}

export function isFunctionCall(message: MessageResponse): message is MessageCreateResponse.FunctionCall {
  if (hasMessageType(message)) {
    return message.message_type === 'function_call';
  }

  return false;
}

export function isFunctionCallDelta(
  message: MessageResponse,
): message is MessageCreateResponse.FunctionCallDelta {
  if (hasMessageType(message)) {
    return message.message_type === 'function_call_delta';
  }

  return false;
}

export function isFunctionCallMessage(
  message: MessageResponse,
): message is MessageCreateResponse.FunctionCallMessage {
  if (hasMessageType(message)) {
    return message.message_type === 'function_call_message';
  }

  return false;
}

export function isFunctionReturn(message: MessageResponse): message is MessageCreateResponse.FunctionReturn {
  if (hasMessageType(message)) {
    return message.message_type === 'function_return';
  }

  return false;
}

export function isInternalMonologue(
  message: MessageResponse,
): message is MessageCreateResponse.InternalMonologue {
  if (hasMessageType(message)) {
    return message.message_type === 'internal_monologue';
  }

  return false;
}

export function isLettaUsageStatistics(
  message: MessageResponse,
): message is MessageCreateResponse.LettaUsageStatistics {
  if (hasMessageType(message)) {
    return message.message_type === 'letta_usage_statistics';
  }

  return false;
}

type MessageResponse =
  | MessageCreateResponse.AssistantMessage
  | MessageCreateResponse.FunctionCall
  | MessageCreateResponse.FunctionCallDelta
  | MessageCreateResponse.FunctionCallMessage
  | MessageCreateResponse.FunctionReturn
  | MessageCreateResponse.InternalMonologue
  | MessageCreateResponse.LettaUsageStatistics
  | '[DONE]'
  | '[DONE_GEN]'
  | '[DONE_STEP]';

type ErrorCallback = (event: Event) => void;
type MessageCallback = (message: MessageResponse) => void;

export interface StreamResponse {
  onMessage: (message: MessageCallback) => void;
  onError: (error: ErrorCallback) => void;
  abort: () => void;
}

export function streamMessages(options: StreamInputOptions): StreamResponse {
  const { agentId, baseUrl, payload, headers, requestOptions = {} } = options;

  const abortController = new AbortController();

  if (requestOptions?.signal) {
    requestOptions.signal.addEventListener('abort', () => {
      abortController.abort();
    });
  }

  const eventsource = new EventSource(`${baseUrl}/v1/agents/${agentId}/messages/stream`, {
    withCredentials: true,
    method: requestOptions.method || 'POST',
    disableRetry: true,
    keepalive: false,
    retry: requestOptions.maxRetries || 0,
    abortController,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
      ...headers,
      ...requestOptions.headers,
    },
    body: JSON.stringify({
      stream_tokens: true,
      stream_steps: true,
      ...payload,
    }),
  });

  return {
    abort: () => {
      abortController.abort();
    },
    onMessage: (callback) => {
      eventsource.onmessage = (event) => {
        if (['[DONE]', '[DONE_GEN]', '[DONE_STEP]'].includes(event.data)) {
          callback(event.data);
          return;
        }

        const message = safeJSON(event.data);
        if (message) {
          callback(message as MessageResponse);
        }
      };
    },
    onError: (callback) => {
      eventsource.onerror = (event: Event) => {
        callback(event);
      };
    },
  };
}

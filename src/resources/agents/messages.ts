// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import * as ToolsAPI from '../tools';
import * as AgentsAPI from './agents';
import * as RunsAPI from '../runs/runs';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, ObjectPage, PagePromise } from '../../core/pagination';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Retrieve message history for an agent.
   */
  list(
    agentID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LettaMessageUnionsArrayPage, LettaMessageUnion> {
    return this._client.getAPIList(path`/v1/agents/${agentID}/messages`, ArrayPage<LettaMessageUnion>, {
      query,
      ...options,
    });
  }

  /**
   * Cancel runs associated with an agent. If run_ids are passed in, cancel those in
   * particular.
   *
   * Note to cancel active runs associated with an agent, redis is required.
   */
  cancel(
    agentID: string,
    body: MessageCancelParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageCancelResponse> {
    return this._client.post(path`/v1/agents/${agentID}/messages/cancel`, { body, ...options });
  }

  /**
   * Update the details of a message associated with an agent.
   */
  modify(
    messageID: string,
    params: MessageModifyParams,
    options?: RequestOptions,
  ): APIPromise<MessageModifyResponse> {
    const { agent_id, ...body } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/messages/${messageID}`, { body, ...options });
  }

  /**
   * Resets the messages for an agent
   */
  reset(
    agentID: string,
    body: MessageResetParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    return this._client.patch(path`/v1/agents/${agentID}/reset-messages`, { body, ...options });
  }

  /**
   * Process a user message and return the agent's response. This endpoint accepts a
   * message from a user and processes it through the agent.
   *
   * The response format is controlled by the `streaming` field in the request body:
   *
   * - If `streaming=false` (default): Returns a complete LettaResponse with all
   *   messages
   * - If `streaming=true`: Returns a Server-Sent Events (SSE) stream
   *
   * Additional streaming options (only used when streaming=true):
   *
   * - `stream_tokens`: Stream individual tokens instead of complete steps
   * - `include_pings`: Include keepalive pings to prevent connection timeouts
   * - `background`: Process the request in the background
   */
  send(
    agentID: string,
    body: MessageSendParamsNonStreaming,
    options?: RequestOptions,
  ): APIPromise<LettaResponse>;
  send(
    agentID: string,
    body: MessageSendParamsStreaming,
    options?: RequestOptions,
  ): APIPromise<Stream<LettaStreamingResponse>>;
  send(
    agentID: string,
    body: MessageSendParamsBase,
    options?: RequestOptions,
  ): APIPromise<Stream<LettaStreamingResponse> | LettaResponse>;
  send(
    agentID: string,
    body: MessageSendParams,
    options?: RequestOptions,
  ): APIPromise<LettaResponse> | APIPromise<Stream<LettaStreamingResponse>> {
    return this._client.post(path`/v1/agents/${agentID}/messages`, {
      body,
      ...options,
      stream: body.streaming ?? false,
    }) as APIPromise<LettaResponse> | APIPromise<Stream<LettaStreamingResponse>>;
  }

  /**
   * Asynchronously process a user message and return a run object. The actual
   * processing happens in the background, and the status can be checked using the
   * run ID.
   *
   * This is "asynchronous" in the sense that it's a background run and explicitly
   * must be fetched by the run ID.
   */
  sendAsync(agentID: string, body: MessageSendAsyncParams, options?: RequestOptions): APIPromise<Run> {
    return this._client.post(path`/v1/agents/${agentID}/messages/async`, { body, ...options });
  }

  /**
   * Process a user message and return the agent's response. This endpoint accepts a
   * message from a user and processes it through the agent. It will stream the steps
   * of the response always, and stream the tokens if 'stream_tokens' is set to True.
   */
  stream(
    agentID: string,
    body: MessageStreamParams,
    options?: RequestOptions,
  ): APIPromise<Stream<LettaStreamingResponse>> {
    return this._client.post(path`/v1/agents/${agentID}/messages/stream`, {
      body,
      ...options,
      stream: true,
    }) as APIPromise<Stream<LettaStreamingResponse>>;
  }

  /**
   * Summarize an agent's conversation history.
   */
  summarize(agentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/agents/${agentID}/summarize`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type LettaMessageUnionsArrayPage = ArrayPage<LettaMessageUnion>;

export type RunsArrayPage = ArrayPage<Run>;

export type MessagesObjectPage = ObjectPage<Message>;

/**
 * Input to approve or deny a tool call request
 */
export interface ApprovalCreate {
  /**
   * @deprecated The message ID of the approval request
   */
  approval_request_id?: string | null;

  /**
   * The list of approval responses
   */
  approvals?: Array<ApprovalReturn | ToolReturn> | null;

  /**
   * @deprecated Whether the tool has been approved
   */
  approve?: boolean | null;

  /**
   * The multi-agent group that the message was sent in
   */
  group_id?: string | null;

  /**
   * @deprecated An optional explanation for the provided approval status
   */
  reason?: string | null;

  /**
   * The message type to be created.
   */
  type?: 'approval';
}

/**
 * A message representing a request for approval to call a tool (generated by the
 * LLM to trigger tool execution).
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message tool_call (ToolCall): The tool call
 */
export interface ApprovalRequestMessage {
  id: string;

  date: string;

  /**
   * @deprecated The tool call that has been requested by the llm to run
   */
  tool_call: ToolCall | ToolCallDelta;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'approval_request_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;

  /**
   * The tool calls that have been requested by the llm to run, which are pending
   * approval
   */
  tool_calls?: Array<ToolCall> | ToolCallDelta | null;
}

/**
 * A message representing a response form the user indicating whether a tool has
 * been approved to run.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message approve: (bool) Whether the tool has been approved approval_request_id:
 * The ID of the approval request reason: (Optional[str]) An optional explanation
 * for the provided approval status
 */
export interface ApprovalResponseMessage {
  id: string;

  date: string;

  /**
   * @deprecated The message ID of the approval request
   */
  approval_request_id?: string | null;

  /**
   * The list of approval responses
   */
  approvals?: Array<ApprovalReturn | ToolReturn> | null;

  /**
   * @deprecated Whether the tool has been approved
   */
  approve?: boolean | null;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'approval_response_message';

  name?: string | null;

  otid?: string | null;

  /**
   * @deprecated An optional explanation for the provided approval status
   */
  reason?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

export interface ApprovalReturn {
  /**
   * Whether the tool has been approved
   */
  approve: boolean;

  /**
   * The ID of the tool call that corresponds to this approval
   */
  tool_call_id: string;

  /**
   * An optional explanation for the provided approval status
   */
  reason?: string | null;

  /**
   * The message type to be created.
   */
  type?: 'approval';
}

/**
 * A message sent by the LLM in response to user input. Used in the LLM context.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message content (Union[str, List[LettaAssistantMessageContentUnion]]): The
 * message content sent by the agent (can be a string or an array of content parts)
 */
export interface AssistantMessage {
  id: string;

  /**
   * The message content sent by the agent (can be a string or an array of content
   * parts)
   */
  content: Array<LettaAssistantMessageContentUnion> | string;

  date: string;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'assistant_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

/**
 * A message for notifying the developer that an event that has occured (e.g. a
 * compaction). Events are NOT part of the context window.
 */
export interface EventMessage {
  id: string;

  date: string;

  event_data: { [key: string]: unknown };

  event_type: 'compaction';

  is_err?: boolean | null;

  message_type?: 'event';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

/**
 * Representation of an agent's internal reasoning where reasoning content has been
 * hidden from the response.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message state (Literal["redacted", "omitted"]): Whether the reasoning content
 * was redacted by the provider or simply omitted by the API hidden_reasoning
 * (Optional[str]): The internal reasoning of the agent
 */
export interface HiddenReasoningMessage {
  id: string;

  date: string;

  state: 'redacted' | 'omitted';

  hidden_reasoning?: string | null;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'hidden_reasoning_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

export interface ImageContent {
  /**
   * The source of the image.
   */
  source: ImageContent.URLImage | ImageContent.Base64Image | ImageContent.LettaImage;

  /**
   * The type of the message.
   */
  type?: 'image';
}

export namespace ImageContent {
  export interface URLImage {
    /**
     * The URL of the image.
     */
    url: string;

    /**
     * The source type for the image.
     */
    type?: 'url';
  }

  export interface Base64Image {
    /**
     * The base64 encoded image data.
     */
    data: string;

    /**
     * The media type for the image.
     */
    media_type: string;

    /**
     * What level of detail to use when processing and understanding the image (low,
     * high, or auto to let the model decide)
     */
    detail?: string | null;

    /**
     * The source type for the image.
     */
    type?: 'base64';
  }

  export interface LettaImage {
    /**
     * The unique identifier of the image file persisted in storage.
     */
    file_id: string;

    /**
     * The base64 encoded image data.
     */
    data?: string | null;

    /**
     * What level of detail to use when processing and understanding the image (low,
     * high, or auto to let the model decide)
     */
    detail?: string | null;

    /**
     * The media type for the image.
     */
    media_type?: string | null;

    /**
     * The source type for the image.
     */
    type?: 'letta';
  }
}

/**
 * Status of the job.
 */
export type JobStatus = 'created' | 'running' | 'completed' | 'failed' | 'pending' | 'cancelled' | 'expired';

export type JobType = 'job' | 'run' | 'batch';

export interface LettaAssistantMessageContentUnion {
  /**
   * The text content of the message.
   */
  text: string;

  /**
   * Stores a unique identifier for any reasoning associated with this text content.
   */
  signature?: string | null;

  /**
   * The type of the message.
   */
  type?: 'text';
}

/**
 * A message generated by the system. Never streamed back on a response, only used
 * for cursor pagination.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message content (str): The message content sent by the system
 */
export type LettaMessageUnion =
  | SystemMessage
  | UserMessage
  | ReasoningMessage
  | HiddenReasoningMessage
  | ToolCallMessage
  | ToolsAPI.ToolReturnMessage
  | AssistantMessage
  | ApprovalRequestMessage
  | ApprovalResponseMessage
  | SummaryMessage
  | EventMessage;

export interface LettaRequest {
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
   * @deprecated If set to True, enables reasoning before responses or tool calls
   * from the agent.
   */
  enable_thinking?: string;

  /**
   * Only return specified message types in the response. If `None` (default) returns
   * all messages.
   */
  include_return_message_types?: Array<MessageType> | null;

  /**
   * Syntactic sugar for a single user message. Equivalent to messages=[{'role':
   * 'user', 'content': input}].
   */
  input?:
    | string
    | Array<
        | TextContent
        | ImageContent
        | ToolCallContent
        | ToolReturnContent
        | ReasoningContent
        | RedactedReasoningContent
        | OmittedReasoningContent
        | LettaRequest.SummarizedReasoningContent
      >
    | null;

  /**
   * Maximum number of steps the agent should take to process the request.
   */
  max_steps?: number;

  /**
   * The messages to be sent to the agent.
   */
  messages?: Array<AgentsAPI.MessageCreate | ApprovalCreate> | null;

  /**
   * @deprecated Whether the server should parse specific tool call arguments
   * (default `send_message`) as `AssistantMessage` objects. Still supported for
   * legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;
}

export namespace LettaRequest {
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

/**
 * Response object from an agent interaction, consisting of the new messages
 * generated by the agent and usage statistics. The type of the returned messages
 * can be either `Message` or `LettaMessage`, depending on what was specified in
 * the request.
 *
 * Attributes: messages (List[Union[Message, LettaMessage]]): The messages returned
 * by the agent. usage (LettaUsageStatistics): The usage statistics
 */
export interface LettaResponse {
  /**
   * The messages returned by the agent.
   */
  messages: Array<LettaMessageUnion>;

  /**
   * The stop reason from Letta indicating why agent loop stopped execution.
   */
  stop_reason: LettaResponse.StopReason;

  /**
   * The usage statistics of the agent.
   */
  usage: LettaResponse.Usage;
}

export namespace LettaResponse {
  /**
   * The stop reason from Letta indicating why agent loop stopped execution.
   */
  export interface StopReason {
    /**
     * The reason why execution stopped.
     */
    stop_reason: RunsAPI.StopReasonType;

    /**
     * The type of the message.
     */
    message_type?: 'stop_reason';
  }

  /**
   * The usage statistics of the agent.
   */
  export interface Usage {
    /**
     * The number of tokens generated by the agent.
     */
    completion_tokens?: number;

    message_type?: 'usage_statistics';

    /**
     * The number of tokens in the prompt.
     */
    prompt_tokens?: number;

    /**
     * The background task run IDs associated with the agent interaction
     */
    run_ids?: Array<string> | null;

    /**
     * The number of steps taken by the agent.
     */
    step_count?: number;

    /**
     * The total number of tokens processed by the agent.
     */
    total_tokens?: number;
  }
}

export interface LettaStreamingRequest {
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
   * Whether to process the request in the background (only used when
   * streaming=true).
   */
  background?: boolean;

  /**
   * @deprecated If set to True, enables reasoning before responses or tool calls
   * from the agent.
   */
  enable_thinking?: string;

  /**
   * Whether to include periodic keepalive ping messages in the stream to prevent
   * connection timeouts (only used when streaming=true).
   */
  include_pings?: boolean;

  /**
   * Only return specified message types in the response. If `None` (default) returns
   * all messages.
   */
  include_return_message_types?: Array<MessageType> | null;

  /**
   * Syntactic sugar for a single user message. Equivalent to messages=[{'role':
   * 'user', 'content': input}].
   */
  input?:
    | string
    | Array<
        | TextContent
        | ImageContent
        | ToolCallContent
        | ToolReturnContent
        | ReasoningContent
        | RedactedReasoningContent
        | OmittedReasoningContent
        | LettaStreamingRequest.SummarizedReasoningContent
      >
    | null;

  /**
   * Maximum number of steps the agent should take to process the request.
   */
  max_steps?: number;

  /**
   * The messages to be sent to the agent.
   */
  messages?: Array<AgentsAPI.MessageCreate | ApprovalCreate> | null;

  /**
   * Flag to determine if individual tokens should be streamed, rather than streaming
   * per step (only used when streaming=true).
   */
  stream_tokens?: boolean;

  /**
   * If True, returns a streaming response (Server-Sent Events). If False (default),
   * returns a complete response.
   */
  streaming?: boolean;

  /**
   * @deprecated Whether the server should parse specific tool call arguments
   * (default `send_message`) as `AssistantMessage` objects. Still supported for
   * legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;
}

export namespace LettaStreamingRequest {
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

/**
 * Streaming response type for Server-Sent Events (SSE) endpoints. Each event in
 * the stream will be one of these types.
 */
export type LettaStreamingResponse =
  | SystemMessage
  | UserMessage
  | ReasoningMessage
  | HiddenReasoningMessage
  | ToolCallMessage
  | ToolsAPI.ToolReturnMessage
  | AssistantMessage
  | ApprovalRequestMessage
  | ApprovalResponseMessage
  | LettaStreamingResponse.LettaPing
  | LettaStreamingResponse.LettaStopReason
  | LettaStreamingResponse.LettaUsageStatistics;

export namespace LettaStreamingResponse {
  /**
   * Ping messages are a keep-alive to prevent SSE streams from timing out during
   * long running requests.
   */
  export interface LettaPing {
    /**
     * The type of the message.
     */
    message_type: 'ping';
  }

  /**
   * The stop reason from Letta indicating why agent loop stopped execution.
   */
  export interface LettaStopReason {
    /**
     * The reason why execution stopped.
     */
    stop_reason: RunsAPI.StopReasonType;

    /**
     * The type of the message.
     */
    message_type?: 'stop_reason';
  }

  /**
   * Usage statistics for the agent interaction.
   *
   * Attributes: completion_tokens (int): The number of tokens generated by the
   * agent. prompt_tokens (int): The number of tokens in the prompt. total_tokens
   * (int): The total number of tokens processed by the agent. step_count (int): The
   * number of steps taken by the agent.
   */
  export interface LettaUsageStatistics {
    /**
     * The number of tokens generated by the agent.
     */
    completion_tokens?: number;

    message_type?: 'usage_statistics';

    /**
     * The number of tokens in the prompt.
     */
    prompt_tokens?: number;

    /**
     * The background task run IDs associated with the agent interaction
     */
    run_ids?: Array<string> | null;

    /**
     * The number of steps taken by the agent.
     */
    step_count?: number;

    /**
     * The total number of tokens processed by the agent.
     */
    total_tokens?: number;
  }
}

export type LettaUserMessageContentUnion = TextContent | ImageContent;

/**
 * Letta's internal representation of a message. Includes methods to convert to/from LLM provider formats.
 *
 *     Attributes:
 *         id (str): The unique identifier of the message.
 *         role (MessageRole): The role of the participant.
 *         text (str): The text of the message.
 *         user_id (str): The unique identifier of the user.
 *         agent_id (str): The unique identifier of the agent.
 *         model (str): The model used to make the function call.
 *         name (str): The name of the participant.
 *         created_at (datetime): The time the message was created.
 *         tool_calls (List[OpenAIToolCall,]): The list of tool calls requested.
 *         tool_call_id (str): The id of the tool call.
 *         step_id (str): The id of the step that this message was created in.
 *         otid (str): The offline threading id associated with this message.
 *         tool_returns (List[ToolReturn]): The list of tool returns requested.
 *         group_id (str): The multi-agent group that the message was sent in.
 *         sender_id (str): The id of the sender of the message, can be an identity id or agent id.
 *
 * t
 */
export interface Message {
  /**
   * The human-friendly ID of the Message
   */
  id: string;

  /**
   * The role of the participant.
   */
  role: MessageRole;

  /**
   * The unique identifier of the agent.
   */
  agent_id?: string | null;

  /**
   * The id of the approval request if this message is associated with a tool call
   * request.
   */
  approval_request_id?: string | null;

  /**
   * The list of approvals for this message.
   */
  approvals?: Array<ApprovalReturn | Message.LettaSchemasMessageToolReturn> | null;

  /**
   * Whether tool call is approved.
   */
  approve?: boolean | null;

  /**
   * The id of the LLMBatchItem that this message is associated with
   */
  batch_item_id?: string | null;

  /**
   * The content of the message.
   */
  content?: Array<
    | TextContent
    | ImageContent
    | ToolCallContent
    | ToolReturnContent
    | ReasoningContent
    | RedactedReasoningContent
    | OmittedReasoningContent
    | Message.SummarizedReasoningContent
  > | null;

  /**
   * The timestamp when the object was created.
   */
  created_at?: string;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * The reason the tool call request was denied.
   */
  denial_reason?: string | null;

  /**
   * The multi-agent group that the message was sent in
   */
  group_id?: string | null;

  /**
   * Whether this message is part of an error step. Used only for debugging purposes.
   */
  is_err?: boolean | null;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The model used to make the function call.
   */
  model?: string | null;

  /**
   * For role user/assistant: the (optional) name of the participant. For role
   * tool/function: the name of the function called.
   */
  name?: string | null;

  /**
   * The offline threading id associated with this message
   */
  otid?: string | null;

  /**
   * The id of the run that this message was created in.
   */
  run_id?: string | null;

  /**
   * The id of the sender of the message, can be an identity id or agent id
   */
  sender_id?: string | null;

  /**
   * The id of the step that this message was created in.
   */
  step_id?: string | null;

  /**
   * The ID of the tool call. Only applicable for role tool.
   */
  tool_call_id?: string | null;

  /**
   * The list of tool calls requested. Only applicable for role assistant.
   */
  tool_calls?: Array<Message.ToolCall> | null;

  /**
   * Tool execution return information for prior tool calls
   */
  tool_returns?: Array<Message.ToolReturn> | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
}

export namespace Message {
  export interface LettaSchemasMessageToolReturn {
    /**
     * The status of the tool call
     */
    status: 'success' | 'error';

    /**
     * The function response string
     */
    func_response?: string | null;

    /**
     * Captured stderr from the tool invocation
     */
    stderr?: Array<string> | null;

    /**
     * Captured stdout (e.g. prints, logs) from the tool invocation
     */
    stdout?: Array<string> | null;

    /**
     * The ID for the tool call
     */
    tool_call_id?: unknown;
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

  export interface ToolCall {
    id: string;

    function: ToolCall.Function;

    type: 'function';

    [k: string]: unknown;
  }

  export namespace ToolCall {
    export interface Function {
      arguments: string;

      name: string;

      [k: string]: unknown;
    }
  }

  export interface ToolReturn {
    /**
     * The status of the tool call
     */
    status: 'success' | 'error';

    /**
     * The function response string
     */
    func_response?: string | null;

    /**
     * Captured stderr from the tool invocation
     */
    stderr?: Array<string> | null;

    /**
     * Captured stdout (e.g. prints, logs) from the tool invocation
     */
    stdout?: Array<string> | null;

    /**
     * The ID for the tool call
     */
    tool_call_id?: unknown;
  }
}

export type MessageRole = 'assistant' | 'user' | 'tool' | 'function' | 'system' | 'approval';

export type MessageType =
  | 'system_message'
  | 'user_message'
  | 'assistant_message'
  | 'reasoning_message'
  | 'hidden_reasoning_message'
  | 'tool_call_message'
  | 'tool_return_message'
  | 'approval_request_message'
  | 'approval_response_message';

/**
 * A placeholder for reasoning content we know is present, but isn't returned by
 * the provider (e.g. OpenAI GPT-5 on ChatCompletions)
 */
export interface OmittedReasoningContent {
  /**
   * A unique identifier for this reasoning step.
   */
  signature?: string | null;

  /**
   * Indicates this is an omitted reasoning step.
   */
  type?: 'omitted_reasoning';
}

/**
 * Sent via the Anthropic Messages API
 */
export interface ReasoningContent {
  /**
   * Whether the reasoning content was generated by a reasoner model that processed
   * this step.
   */
  is_native: boolean;

  /**
   * The intermediate reasoning or thought process content.
   */
  reasoning: string;

  /**
   * A unique identifier for this reasoning step.
   */
  signature?: string | null;

  /**
   * Indicates this is a reasoning/intermediate step.
   */
  type?: 'reasoning';
}

/**
 * Representation of an agent's internal reasoning.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message source (Literal["reasoner_model", "non_reasoner_model"]): Whether the
 * reasoning content was generated natively by a reasoner model or derived via
 * prompting reasoning (str): The internal reasoning of the agent signature
 * (Optional[str]): The model-generated signature of the reasoning step
 */
export interface ReasoningMessage {
  id: string;

  date: string;

  reasoning: string;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'reasoning_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  signature?: string | null;

  source?: 'reasoner_model' | 'non_reasoner_model';

  step_id?: string | null;
}

/**
 * Sent via the Anthropic Messages API
 */
export interface RedactedReasoningContent {
  /**
   * The redacted or filtered intermediate reasoning content.
   */
  data: string;

  /**
   * Indicates this is a redacted thinking step.
   */
  type?: 'redacted_reasoning';
}

/**
 * Representation of a run - a conversation or processing session for an agent.
 * Runs track when agents process messages and maintain the relationship between
 * agents, steps, and messages.
 */
export interface Run {
  /**
   * The human-friendly ID of the Run
   */
  id: string;

  /**
   * The unique identifier of the agent associated with the run.
   */
  agent_id: string;

  /**
   * Whether the run was created in background mode.
   */
  background?: boolean | null;

  /**
   * The base template ID that the run belongs to.
   */
  base_template_id?: string | null;

  /**
   * Optional error message from attempting to POST the callback endpoint.
   */
  callback_error?: string | null;

  /**
   * Timestamp when the callback was last attempted.
   */
  callback_sent_at?: string | null;

  /**
   * HTTP status code returned by the callback endpoint.
   */
  callback_status_code?: number | null;

  /**
   * If set, POST to this URL when the run completes.
   */
  callback_url?: string | null;

  /**
   * The timestamp when the run was completed.
   */
  completed_at?: string | null;

  /**
   * The timestamp when the run was created.
   */
  created_at?: string;

  /**
   * Additional metadata for the run.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The request configuration for the run.
   */
  request_config?: Run.RequestConfig | null;

  /**
   * The current status of the run.
   */
  status?: 'created' | 'running' | 'completed' | 'failed' | 'cancelled';

  /**
   * The reason why the run was stopped.
   */
  stop_reason?: RunsAPI.StopReasonType | null;

  /**
   * Total run duration in nanoseconds
   */
  total_duration_ns?: number | null;

  /**
   * Time to first token for a run in nanoseconds
   */
  ttft_ns?: number | null;
}

export namespace Run {
  /**
   * The request configuration for the run.
   */
  export interface RequestConfig {
    /**
     * The name of the message argument in the designated message tool.
     */
    assistant_message_tool_kwarg?: string;

    /**
     * The name of the designated message tool.
     */
    assistant_message_tool_name?: string;

    /**
     * Only return specified message types in the response. If `None` (default) returns
     * all messages.
     */
    include_return_message_types?: Array<MessagesAPI.MessageType> | null;

    /**
     * Whether the server should parse specific tool call arguments (default
     * `send_message`) as `AssistantMessage` objects.
     */
    use_assistant_message?: boolean;
  }
}

/**
 * A message representing a summary of the conversation. Sent to the LLM as a user
 * or system message depending on the provider.
 */
export interface SummaryMessage {
  id: string;

  date: string;

  summary: string;

  is_err?: boolean | null;

  message_type?: 'summary';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

/**
 * A message generated by the system. Never streamed back on a response, only used
 * for cursor pagination.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message content (str): The message content sent by the system
 */
export interface SystemMessage {
  id: string;

  /**
   * The message content sent by the system
   */
  content: string;

  date: string;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'system_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

export interface TextContent {
  /**
   * The text content of the message.
   */
  text: string;

  /**
   * Stores a unique identifier for any reasoning associated with this text content.
   */
  signature?: string | null;

  /**
   * The type of the message.
   */
  type?: 'text';
}

export interface ToolCall {
  arguments: string;

  name: string;

  tool_call_id: string;
}

export interface ToolCallContent {
  /**
   * A unique identifier for this specific tool call instance.
   */
  id: string;

  /**
   * The parameters being passed to the tool, structured as a dictionary of parameter
   * names to values.
   */
  input: { [key: string]: unknown };

  /**
   * The name of the tool being called.
   */
  name: string;

  /**
   * Stores a unique identifier for any reasoning associated with this tool call.
   */
  signature?: string | null;

  /**
   * Indicates this content represents a tool call event.
   */
  type?: 'tool_call';
}

export interface ToolCallDelta {
  arguments?: string | null;

  name?: string | null;

  tool_call_id?: string | null;
}

/**
 * A message representing a request to call a tool (generated by the LLM to trigger
 * tool execution).
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message tool_call (Union[ToolCall, ToolCallDelta]): The tool call
 */
export interface ToolCallMessage {
  id: string;

  date: string;

  /**
   * @deprecated
   */
  tool_call: ToolCall | ToolCallDelta;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'tool_call_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;

  tool_calls?: Array<ToolCall> | ToolCallDelta | null;
}

export interface ToolReturn {
  status: 'success' | 'error';

  tool_call_id: string;

  tool_return: string;

  stderr?: Array<string> | null;

  stdout?: Array<string> | null;

  /**
   * The message type to be created.
   */
  type?: 'tool';
}

export interface ToolReturnContent {
  /**
   * The content returned by the tool execution.
   */
  content: string;

  /**
   * Indicates whether the tool execution resulted in an error.
   */
  is_error: boolean;

  /**
   * References the ID of the ToolCallContent that initiated this tool call.
   */
  tool_call_id: string;

  /**
   * Indicates this content represents a tool return event.
   */
  type?: 'tool_return';
}

export interface UpdateAssistantMessage {
  /**
   * The message content sent by the assistant (can be a string or an array of
   * content parts)
   */
  content: Array<LettaAssistantMessageContentUnion> | string;

  message_type?: 'assistant_message';
}

export interface UpdateReasoningMessage {
  reasoning: string;

  message_type?: 'reasoning_message';
}

export interface UpdateSystemMessage {
  /**
   * The message content sent by the system (can be a string or an array of
   * multi-modal content parts)
   */
  content: string;

  message_type?: 'system_message';
}

export interface UpdateUserMessage {
  /**
   * The message content sent by the user (can be a string or an array of multi-modal
   * content parts)
   */
  content: Array<LettaUserMessageContentUnion> | string;

  message_type?: 'user_message';
}

/**
 * A message sent by the user. Never streamed back on a response, only used for
 * cursor pagination.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message content (Union[str, List[LettaUserMessageContentUnion]]): The message
 * content sent by the user (can be a string or an array of multi-modal content
 * parts)
 */
export interface UserMessage {
  id: string;

  /**
   * The message content sent by the user (can be a string or an array of multi-modal
   * content parts)
   */
  content: Array<LettaUserMessageContentUnion> | string;

  date: string;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'user_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  step_id?: string | null;
}

export type MessageCancelResponse = { [key: string]: unknown };

/**
 * A message generated by the system. Never streamed back on a response, only used
 * for cursor pagination.
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message content (str): The message content sent by the system
 */
export type MessageModifyResponse =
  | SystemMessage
  | UserMessage
  | ReasoningMessage
  | HiddenReasoningMessage
  | ToolCallMessage
  | ToolsAPI.ToolReturnMessage
  | AssistantMessage
  | ApprovalRequestMessage
  | ApprovalResponseMessage
  | SummaryMessage
  | EventMessage;

export interface MessageListParams extends ArrayPageParams {
  /**
   * @deprecated The name of the message argument.
   */
  assistant_message_tool_kwarg?: string;

  /**
   * @deprecated The name of the designated message tool.
   */
  assistant_message_tool_name?: string;

  /**
   * Group ID to filter messages by.
   */
  group_id?: string | null;

  /**
   * Whether to include error messages and error statuses. For debugging purposes
   * only.
   */
  include_err?: boolean | null;

  /**
   * @deprecated Whether to use assistant messages
   */
  use_assistant_message?: boolean;
}

export interface MessageCancelParams {
  /**
   * Optional list of run IDs to cancel
   */
  run_ids?: Array<string> | null;
}

export type MessageModifyParams =
  | MessageModifyParams.UpdateSystemMessage
  | MessageModifyParams.UpdateUserMessage
  | MessageModifyParams.UpdateReasoningMessage
  | MessageModifyParams.UpdateAssistantMessage;

export declare namespace MessageModifyParams {
  export interface UpdateSystemMessage {
    /**
     * Path param: The ID of the agent in the format 'agent-<uuid4>'
     */
    agent_id: string;

    /**
     * Body param: The message content sent by the system (can be a string or an array
     * of multi-modal content parts)
     */
    content: string;

    /**
     * Body param:
     */
    message_type?: 'system_message';
  }

  export interface UpdateUserMessage {
    /**
     * Path param: The ID of the agent in the format 'agent-<uuid4>'
     */
    agent_id: string;

    /**
     * Body param: The message content sent by the user (can be a string or an array of
     * multi-modal content parts)
     */
    content: Array<LettaUserMessageContentUnion> | string;

    /**
     * Body param:
     */
    message_type?: 'user_message';
  }

  export interface UpdateReasoningMessage {
    /**
     * Path param: The ID of the agent in the format 'agent-<uuid4>'
     */
    agent_id: string;

    /**
     * Body param:
     */
    reasoning: string;

    /**
     * Body param:
     */
    message_type?: 'reasoning_message';
  }

  export interface UpdateAssistantMessage {
    /**
     * Path param: The ID of the agent in the format 'agent-<uuid4>'
     */
    agent_id: string;

    /**
     * Body param: The message content sent by the assistant (can be a string or an
     * array of content parts)
     */
    content: Array<LettaAssistantMessageContentUnion> | string;

    /**
     * Body param:
     */
    message_type?: 'assistant_message';
  }
}

export interface MessageResetParams {
  /**
   * If true, adds the default initial messages after resetting.
   */
  add_default_initial_messages?: boolean;
}

export type MessageSendParams = MessageSendParamsNonStreaming | MessageSendParamsStreaming;

export interface MessageSendParamsBase {
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
   * Whether to process the request in the background (only used when
   * streaming=true).
   */
  background?: boolean;

  /**
   * @deprecated If set to True, enables reasoning before responses or tool calls
   * from the agent.
   */
  enable_thinking?: string;

  /**
   * Whether to include periodic keepalive ping messages in the stream to prevent
   * connection timeouts (only used when streaming=true).
   */
  include_pings?: boolean;

  /**
   * Only return specified message types in the response. If `None` (default) returns
   * all messages.
   */
  include_return_message_types?: Array<MessageType> | null;

  /**
   * Syntactic sugar for a single user message. Equivalent to messages=[{'role':
   * 'user', 'content': input}].
   */
  input?:
    | string
    | Array<
        | TextContent
        | ImageContent
        | ToolCallContent
        | ToolReturnContent
        | ReasoningContent
        | RedactedReasoningContent
        | OmittedReasoningContent
        | MessageSendParams.SummarizedReasoningContent
      >
    | null;

  /**
   * Maximum number of steps the agent should take to process the request.
   */
  max_steps?: number;

  /**
   * The messages to be sent to the agent.
   */
  messages?: Array<AgentsAPI.MessageCreate | ApprovalCreate> | null;

  /**
   * Flag to determine if individual tokens should be streamed, rather than streaming
   * per step (only used when streaming=true).
   */
  stream_tokens?: boolean;

  /**
   * If True, returns a streaming response (Server-Sent Events). If False (default),
   * returns a complete response.
   */
  streaming?: boolean;

  /**
   * @deprecated Whether the server should parse specific tool call arguments
   * (default `send_message`) as `AssistantMessage` objects. Still supported for
   * legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;
}

export namespace MessageSendParams {
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

  export type MessageSendParamsNonStreaming = MessagesAPI.MessageSendParamsNonStreaming;
  export type MessageSendParamsStreaming = MessagesAPI.MessageSendParamsStreaming;
}

export interface MessageSendParamsNonStreaming extends MessageSendParamsBase {
  /**
   * If True, returns a streaming response (Server-Sent Events). If False (default),
   * returns a complete response.
   */
  streaming?: false;
}

export interface MessageSendParamsStreaming extends MessageSendParamsBase {
  /**
   * If True, returns a streaming response (Server-Sent Events). If False (default),
   * returns a complete response.
   */
  streaming: true;
}

export interface MessageSendAsyncParams {
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
   * Optional callback URL to POST to when the job completes
   */
  callback_url?: string | null;

  /**
   * @deprecated If set to True, enables reasoning before responses or tool calls
   * from the agent.
   */
  enable_thinking?: string;

  /**
   * Only return specified message types in the response. If `None` (default) returns
   * all messages.
   */
  include_return_message_types?: Array<MessageType> | null;

  /**
   * Syntactic sugar for a single user message. Equivalent to messages=[{'role':
   * 'user', 'content': input}].
   */
  input?:
    | string
    | Array<
        | TextContent
        | ImageContent
        | ToolCallContent
        | ToolReturnContent
        | ReasoningContent
        | RedactedReasoningContent
        | OmittedReasoningContent
        | MessageSendAsyncParams.SummarizedReasoningContent
      >
    | null;

  /**
   * Maximum number of steps the agent should take to process the request.
   */
  max_steps?: number;

  /**
   * The messages to be sent to the agent.
   */
  messages?: Array<AgentsAPI.MessageCreate | ApprovalCreate> | null;

  /**
   * @deprecated Whether the server should parse specific tool call arguments
   * (default `send_message`) as `AssistantMessage` objects. Still supported for
   * legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;
}

export namespace MessageSendAsyncParams {
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

export interface MessageStreamParams {
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
   * Whether to process the request in the background (only used when
   * streaming=true).
   */
  background?: boolean;

  /**
   * @deprecated If set to True, enables reasoning before responses or tool calls
   * from the agent.
   */
  enable_thinking?: string;

  /**
   * Whether to include periodic keepalive ping messages in the stream to prevent
   * connection timeouts (only used when streaming=true).
   */
  include_pings?: boolean;

  /**
   * Only return specified message types in the response. If `None` (default) returns
   * all messages.
   */
  include_return_message_types?: Array<MessageType> | null;

  /**
   * Syntactic sugar for a single user message. Equivalent to messages=[{'role':
   * 'user', 'content': input}].
   */
  input?:
    | string
    | Array<
        | TextContent
        | ImageContent
        | ToolCallContent
        | ToolReturnContent
        | ReasoningContent
        | RedactedReasoningContent
        | OmittedReasoningContent
        | MessageStreamParams.SummarizedReasoningContent
      >
    | null;

  /**
   * Maximum number of steps the agent should take to process the request.
   */
  max_steps?: number;

  /**
   * The messages to be sent to the agent.
   */
  messages?: Array<AgentsAPI.MessageCreate | ApprovalCreate> | null;

  /**
   * Flag to determine if individual tokens should be streamed, rather than streaming
   * per step (only used when streaming=true).
   */
  stream_tokens?: boolean;

  /**
   * If True, returns a streaming response (Server-Sent Events). If False (default),
   * returns a complete response.
   */
  streaming?: boolean;

  /**
   * @deprecated Whether the server should parse specific tool call arguments
   * (default `send_message`) as `AssistantMessage` objects. Still supported for
   * legacy agent types, but deprecated for letta_v1_agent onward.
   */
  use_assistant_message?: boolean;
}

export namespace MessageStreamParams {
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

export declare namespace Messages {
  export {
    type ApprovalCreate as ApprovalCreate,
    type ApprovalRequestMessage as ApprovalRequestMessage,
    type ApprovalResponseMessage as ApprovalResponseMessage,
    type ApprovalReturn as ApprovalReturn,
    type AssistantMessage as AssistantMessage,
    type EventMessage as EventMessage,
    type HiddenReasoningMessage as HiddenReasoningMessage,
    type ImageContent as ImageContent,
    type JobStatus as JobStatus,
    type JobType as JobType,
    type LettaAssistantMessageContentUnion as LettaAssistantMessageContentUnion,
    type LettaMessageUnion as LettaMessageUnion,
    type LettaRequest as LettaRequest,
    type LettaResponse as LettaResponse,
    type LettaStreamingRequest as LettaStreamingRequest,
    type LettaStreamingResponse as LettaStreamingResponse,
    type LettaUserMessageContentUnion as LettaUserMessageContentUnion,
    type Message as Message,
    type MessageRole as MessageRole,
    type MessageType as MessageType,
    type OmittedReasoningContent as OmittedReasoningContent,
    type ReasoningContent as ReasoningContent,
    type ReasoningMessage as ReasoningMessage,
    type RedactedReasoningContent as RedactedReasoningContent,
    type Run as Run,
    type SummaryMessage as SummaryMessage,
    type SystemMessage as SystemMessage,
    type TextContent as TextContent,
    type ToolCall as ToolCall,
    type ToolCallContent as ToolCallContent,
    type ToolCallDelta as ToolCallDelta,
    type ToolCallMessage as ToolCallMessage,
    type ToolReturn as ToolReturn,
    type ToolReturnContent as ToolReturnContent,
    type UpdateAssistantMessage as UpdateAssistantMessage,
    type UpdateReasoningMessage as UpdateReasoningMessage,
    type UpdateSystemMessage as UpdateSystemMessage,
    type UpdateUserMessage as UpdateUserMessage,
    type UserMessage as UserMessage,
    type MessageCancelResponse as MessageCancelResponse,
    type MessageModifyResponse as MessageModifyResponse,
    type LettaMessageUnionsArrayPage as LettaMessageUnionsArrayPage,
    type MessageListParams as MessageListParams,
    type MessageCancelParams as MessageCancelParams,
    type MessageModifyParams as MessageModifyParams,
    type MessageResetParams as MessageResetParams,
    type MessageSendParams as MessageSendParams,
    type MessageSendParamsNonStreaming as MessageSendParamsNonStreaming,
    type MessageSendParamsStreaming as MessageSendParamsStreaming,
    type MessageSendAsyncParams as MessageSendAsyncParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface LettaResponse {
    AssistantMessage?: Letta.LettaResponseAssistantMessage;
    /**
     * Usage statistics for the agent interaction.
     *
     * Attributes:
     * completion_tokens (int): The number of tokens generated by the agent.
     * prompt_tokens (int): The number of tokens in the prompt.
     * total_tokens (int): The total number of tokens processed by the agent.
     * step_count (int): The number of steps taken by the agent.
     */
    LettaUsageStatistics?: Letta.LettaResponseLettaUsageStatistics;
    /**
     * Representation of an agent's internal reasoning.
     *
     * Attributes:
     * reasoning (str): The internal reasoning of the agent
     * id (str): The ID of the message
     * date (datetime): The date the message was created in ISO format
     */
    ReasoningMessage?: Letta.LettaResponseReasoningMessage;
    /**
     * A message generated by the system. Never streamed back on a response, only used for cursor pagination.
     *
     * Attributes:
     * message (str): The message sent by the system
     * id (str): The ID of the message
     * date (datetime): The date the message was created in ISO format
     */
    SystemMessage?: Letta.LettaResponseSystemMessage;
    ToolCall?: Letta.LettaResponseToolCall;
    ToolCallDelta?: Letta.LettaResponseToolCallDelta;
    /**
     * A message representing a request to call a tool (generated by the LLM to trigger tool execution).
     *
     * Attributes:
     * tool_call (Union[ToolCall, ToolCallDelta]): The tool call
     * id (str): The ID of the message
     * date (datetime): The date the message was created in ISO format
     */
    ToolCallMessage?: Letta.LettaResponseToolCallMessage;
    /**
     * A message representing the return value of a tool call (generated by Letta executing the requested tool).
     *
     * Attributes:
     * tool_return (str): The return value of the tool
     * status (Literal["success", "error"]): The status of the tool call
     * id (str): The ID of the message
     * date (datetime): The date the message was created in ISO format
     * tool_call_id (str): A unique identifier for the tool call that generated this message
     * stdout (Optional[List(str)]): Captured stdout (e.g. prints, logs) from the tool invocation
     * stderr (Optional[List(str)]): Captured stderr from the tool invocation
     */
    ToolReturnMessage?: Letta.LettaResponseToolReturnMessage;
    /**
     * A message sent by the user. Never streamed back on a response, only used for cursor pagination.
     *
     * Attributes:
     * message (str): The message sent by the user
     * id (str): The ID of the message
     * date (datetime): The date the message was created in ISO format
     */
    UserMessage?: Letta.LettaResponseUserMessage;
}

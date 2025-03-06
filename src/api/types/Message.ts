/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Letta's internal representation of a message. Includes methods to convert to/from LLM provider formats.
 *
 * Attributes:
 *     id (str): The unique identifier of the message.
 *     role (MessageRole): The role of the participant.
 *     text (str): The text of the message.
 *     user_id (str): The unique identifier of the user.
 *     agent_id (str): The unique identifier of the agent.
 *     model (str): The model used to make the function call.
 *     name (str): The name of the participant.
 *     created_at (datetime): The time the message was created.
 *     tool_calls (List[OpenAIToolCall,]): The list of tool calls requested.
 *     tool_call_id (str): The id of the tool call.
 */
export interface Message {
    /** The id of the user that made this object. */
    createdById?: string;
    /** The id of the user that made this object. */
    lastUpdatedById?: string;
    /** The timestamp when the object was created. */
    createdAt?: Date;
    /** The timestamp when the object was last updated. */
    updatedAt?: Date;
    /** The human-friendly ID of the Message */
    id?: string;
    /** The role of the participant. */
    role: Letta.MessageRole;
    /** The content of the message. */
    content?: Letta.TextContent[];
    /** The unique identifier of the agent. */
    agentId?: string;
    /** The model used to make the function call. */
    model?: string;
    /** The name of the participant. */
    name?: string;
    /** The list of tool calls requested. */
    toolCalls?: Letta.ChatCompletionMessageToolCall[];
    /** The id of the tool call. */
    toolCallId?: string;
    /** The id of the step that this message was created in. */
    stepId?: string;
    /** The offline threading id associated with this message */
    otid?: string;
    /** Tool execution return information for prior tool calls */
    toolReturns?: Letta.ToolReturn[];
}

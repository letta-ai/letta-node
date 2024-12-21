/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Letta's internal representation of a message. Includes methods to convert to/from LLM provider formats.
 *
 * Attributes:
 * id (str): The unique identifier of the message.
 * role (MessageRole): The role of the participant.
 * text (str): The text of the message.
 * user_id (str): The unique identifier of the user.
 * agent_id (str): The unique identifier of the agent.
 * model (str): The model used to make the function call.
 * name (str): The name of the participant.
 * created_at (datetime): The time the message was created.
 * tool_calls (List[ToolCall]): The list of tool calls requested.
 * tool_call_id (str): The id of the tool call.
 */
export interface LettaSchemasMessageMessage {
    /** The id of the user that made this object. */
    created_by_id?: string;
    /** The id of the user that made this object. */
    last_updated_by_id?: string;
    /** The timestamp when the object was created. */
    created_at?: string;
    /** The timestamp when the object was last updated. */
    updated_at?: string;
    /** The human-friendly ID of the Message */
    id?: string;
    /** The role of the participant. */
    role: Letta.MessageRole;
    /** The text of the message. */
    text?: string;
    /** The unique identifier of the organization. */
    organization_id?: string;
    /** The unique identifier of the agent. */
    agent_id?: string;
    /** The model used to make the function call. */
    model?: string;
    /** The name of the participant. */
    name?: string;
    /** The list of tool calls requested. */
    tool_calls?: Letta.LettaSchemasOpenaiChatCompletionsToolCallOutput[];
    /** The id of the tool call. */
    tool_call_id?: string;
}

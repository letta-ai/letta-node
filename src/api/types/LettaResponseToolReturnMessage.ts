/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

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
export interface LettaResponseToolReturnMessage {
    id: string;
    date: string;
    message_type?: "tool_return_message";
    tool_return: string;
    status: Letta.LettaResponseToolReturnMessageStatus;
    tool_call_id: string;
    stdout?: string[];
    stderr?: string[];
}
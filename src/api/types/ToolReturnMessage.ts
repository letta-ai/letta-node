/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * A message representing the return value of a tool call (generated by Letta executing the requested tool).
 *
 * Args:
 *     id (str): The ID of the message
 *     date (datetime): The date the message was created in ISO format
 *     tool_return (str): The return value of the tool
 *     status (Literal["success", "error"]): The status of the tool call
 *     tool_call_id (str): A unique identifier for the tool call that generated this message
 *     stdout (Optional[List(str)]): Captured stdout (e.g. prints, logs) from the tool invocation
 *     stderr (Optional[List(str)]): Captured stderr from the tool invocation
 */
export interface ToolReturnMessage {
    id: string;
    date: Date;
    messageType: "tool_return_message";
    toolReturn: string;
    status: Letta.ToolReturnMessageStatus;
    toolCallId: string;
    stdout?: string[];
    stderr?: string[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface LettaRequest {
    /** The messages to be sent to the agent. */
    messages: Letta.MessageCreate[];
    /** The name of the designated message tool. */
    assistant_message_tool_name?: string;
    /** The name of the message argument in the designated message tool. */
    assistant_message_tool_kwarg?: string;
}

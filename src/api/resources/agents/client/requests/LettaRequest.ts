/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../index";

/**
 * @example
 *     {
 *         messages: [{
 *                 role: "user",
 *                 text: "text"
 *             }]
 *     }
 */
export interface LettaRequest {
    /** The messages to be sent to the agent. */
    messages: Letta.LettaRequestMessages;
    /** The name of the designated message tool. */
    assistant_message_tool_name?: string;
    /** The name of the message argument in the designated message tool. */
    assistant_message_tool_kwarg?: string;
}

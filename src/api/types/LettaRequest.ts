/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface LettaRequest {
    /** The messages to be sent to the agent. */
    messages: Letta.MessageCreate[];
    /** The name of the designated message tool. */
    assistantMessageToolName?: string;
    /** The name of the message argument in the designated message tool. */
    assistantMessageToolKwarg?: string;
}

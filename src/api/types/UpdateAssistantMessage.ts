/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface UpdateAssistantMessage {
    messageType?: "assistant_message";
    /** The message content sent by the assistant (can be a string or an array of content parts) */
    content: Letta.UpdateAssistantMessageContent;
}

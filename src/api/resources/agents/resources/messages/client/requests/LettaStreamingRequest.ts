/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../../../index";

/**
 * @example
 *     {
 *         messages: [{
 *                 role: "user",
 *                 text: "text"
 *             }]
 *     }
 */
export interface LettaStreamingRequest {
    /** The messages to be sent to the agent. */
    messages: Letta.MessageCreate[];
    /** Whether the server should parse specific tool call arguments (default `send_message`) as `AssistantMessage` objects. */
    useAssistantMessage?: boolean;
    /** The name of the designated message tool. */
    assistantMessageToolName?: string;
    /** The name of the message argument in the designated message tool. */
    assistantMessageToolKwarg?: string;
    /** Flag to determine if individual tokens should be streamed. Set to True for token streaming (requires stream_steps = True). */
    streamTokens?: boolean;
}

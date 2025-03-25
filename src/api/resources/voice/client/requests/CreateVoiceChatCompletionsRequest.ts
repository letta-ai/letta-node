/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             messages: [{
 *                     content: "content",
 *                     role: "developer"
 *                 }],
 *             model: "model"
 *         }
 *     }
 */
export interface CreateVoiceChatCompletionsRequest {
    userId?: string;
    body: Letta.CreateVoiceChatCompletionsRequestBody;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface LettaSchemasOpenaiChatCompletionsToolCallOutput {
    /** The ID of the tool call */
    id: string;
    type?: string;
    /** The arguments and name for the function */
    function: Letta.ToolCallFunctionOutput;
}

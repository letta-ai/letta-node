/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ToolCallFunctionOutput } from "./ToolCallFunctionOutput";

export const LettaSchemasOpenaiChatCompletionsToolCallOutput: core.serialization.ObjectSchema<
    serializers.LettaSchemasOpenaiChatCompletionsToolCallOutput.Raw,
    Letta.LettaSchemasOpenaiChatCompletionsToolCallOutput
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.string().optional(),
    function: ToolCallFunctionOutput,
});

export declare namespace LettaSchemasOpenaiChatCompletionsToolCallOutput {
    interface Raw {
        id: string;
        type?: string | null;
        function: ToolCallFunctionOutput.Raw;
    }
}

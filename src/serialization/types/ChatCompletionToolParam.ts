/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { FunctionDefinitionInput } from "./FunctionDefinitionInput";

export const ChatCompletionToolParam: core.serialization.ObjectSchema<
    serializers.ChatCompletionToolParam.Raw,
    Letta.ChatCompletionToolParam
> = core.serialization.object({
    function: FunctionDefinitionInput,
    type: core.serialization.stringLiteral("function"),
});

export declare namespace ChatCompletionToolParam {
    export interface Raw {
        function: FunctionDefinitionInput.Raw;
        type: "function";
    }
}

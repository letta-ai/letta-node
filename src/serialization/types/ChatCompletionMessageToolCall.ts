/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { FunctionOutput } from "./FunctionOutput";

export const ChatCompletionMessageToolCall: core.serialization.ObjectSchema<
    serializers.ChatCompletionMessageToolCall.Raw,
    Letta.ChatCompletionMessageToolCall
> = core.serialization
    .object({
        id: core.serialization.string(),
        function: FunctionOutput,
        type: core.serialization.stringLiteral("function"),
    })
    .passthrough();

export declare namespace ChatCompletionMessageToolCall {
    export interface Raw {
        id: string;
        function: FunctionOutput.Raw;
        type: "function";
        [key: string]: any;
    }
}

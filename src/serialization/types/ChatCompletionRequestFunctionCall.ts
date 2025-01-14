/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { FunctionCallInput } from "./FunctionCallInput";

export const ChatCompletionRequestFunctionCall: core.serialization.Schema<
    serializers.ChatCompletionRequestFunctionCall.Raw,
    Letta.ChatCompletionRequestFunctionCall
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("none"),
    core.serialization.stringLiteral("auto"),
    FunctionCallInput,
]);

export declare namespace ChatCompletionRequestFunctionCall {
    export type Raw = "none" | "auto" | FunctionCallInput.Raw;
}

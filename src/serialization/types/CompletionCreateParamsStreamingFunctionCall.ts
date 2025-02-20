/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ChatCompletionFunctionCallOptionParam } from "./ChatCompletionFunctionCallOptionParam";

export const CompletionCreateParamsStreamingFunctionCall: core.serialization.Schema<
    serializers.CompletionCreateParamsStreamingFunctionCall.Raw,
    Letta.CompletionCreateParamsStreamingFunctionCall
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("none"),
    core.serialization.stringLiteral("auto"),
    ChatCompletionFunctionCallOptionParam,
]);

export declare namespace CompletionCreateParamsStreamingFunctionCall {
    export type Raw = "none" | "auto" | ChatCompletionFunctionCallOptionParam.Raw;
}

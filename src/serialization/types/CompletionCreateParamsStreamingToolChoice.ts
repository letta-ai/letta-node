/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ChatCompletionNamedToolChoiceParam } from "./ChatCompletionNamedToolChoiceParam";

export const CompletionCreateParamsStreamingToolChoice: core.serialization.Schema<
    serializers.CompletionCreateParamsStreamingToolChoice.Raw,
    Letta.CompletionCreateParamsStreamingToolChoice
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("none"),
    core.serialization.stringLiteral("auto"),
    core.serialization.stringLiteral("required"),
    ChatCompletionNamedToolChoiceParam,
]);

export declare namespace CompletionCreateParamsStreamingToolChoice {
    export type Raw = "none" | "auto" | "required" | ChatCompletionNamedToolChoiceParam.Raw;
}

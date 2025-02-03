/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ChatCompletionContentPartTextParam } from "./ChatCompletionContentPartTextParam";

export const ChatCompletionSystemMessageParamContent: core.serialization.Schema<
    serializers.ChatCompletionSystemMessageParamContent.Raw,
    Letta.ChatCompletionSystemMessageParamContent
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(ChatCompletionContentPartTextParam),
]);

export declare namespace ChatCompletionSystemMessageParamContent {
    export type Raw = string | ChatCompletionContentPartTextParam.Raw[];
}

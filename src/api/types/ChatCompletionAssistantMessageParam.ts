/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface ChatCompletionAssistantMessageParam {
    role: "assistant";
    audio?: Letta.Audio;
    content?: Letta.ChatCompletionAssistantMessageParamContent;
    functionCall?: Letta.FunctionCall;
    name?: string;
    refusal?: string;
    toolCalls?: Letta.ChatCompletionMessageToolCallParam[];
}

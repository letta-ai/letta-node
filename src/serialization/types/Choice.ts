/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { LettaSchemasOpenaiChatCompletionResponseMessage } from "./LettaSchemasOpenaiChatCompletionResponseMessage";
import { MessageContentLogProb } from "./MessageContentLogProb";

export const Choice: core.serialization.ObjectSchema<serializers.Choice.Raw, Letta.Choice> = core.serialization.object({
    finishReason: core.serialization.property("finish_reason", core.serialization.string()),
    index: core.serialization.number(),
    message: LettaSchemasOpenaiChatCompletionResponseMessage,
    logprobs: core.serialization
        .record(core.serialization.string(), core.serialization.list(MessageContentLogProb).optional())
        .optional(),
    seed: core.serialization.number().optional(),
});

export declare namespace Choice {
    export interface Raw {
        finish_reason: string;
        index: number;
        message: LettaSchemasOpenaiChatCompletionResponseMessage.Raw;
        logprobs?: Record<string, MessageContentLogProb.Raw[] | null | undefined> | null;
        seed?: number | null;
    }
}

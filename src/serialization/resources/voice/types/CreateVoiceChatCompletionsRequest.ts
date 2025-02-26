/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { CompletionCreateParamsNonStreaming } from "../../../types/CompletionCreateParamsNonStreaming";
import { CompletionCreateParamsStreaming } from "../../../types/CompletionCreateParamsStreaming";

export const CreateVoiceChatCompletionsRequest: core.serialization.Schema<
    serializers.CreateVoiceChatCompletionsRequest.Raw,
    Letta.CreateVoiceChatCompletionsRequest
> = core.serialization.undiscriminatedUnion([CompletionCreateParamsNonStreaming, CompletionCreateParamsStreaming]);

export declare namespace CreateVoiceChatCompletionsRequest {
    export type Raw = CompletionCreateParamsNonStreaming.Raw | CompletionCreateParamsStreaming.Raw;
}

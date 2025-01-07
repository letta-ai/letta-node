/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Letta from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { MessageCreate } from "../../../../../../types/MessageCreate";

export const LettaStreamingRequest: core.serialization.Schema<
    serializers.agents.LettaStreamingRequest.Raw,
    Letta.agents.LettaStreamingRequest
> = core.serialization.object({
    messages: core.serialization.list(MessageCreate),
    assistantMessageToolName: core.serialization.property(
        "assistant_message_tool_name",
        core.serialization.string().optional()
    ),
    assistantMessageToolKwarg: core.serialization.property(
        "assistant_message_tool_kwarg",
        core.serialization.string().optional()
    ),
    streamTokens: core.serialization.property("stream_tokens", core.serialization.boolean().optional()),
});

export declare namespace LettaStreamingRequest {
    interface Raw {
        messages: MessageCreate.Raw[];
        assistant_message_tool_name?: string | null;
        assistant_message_tool_kwarg?: string | null;
        stream_tokens?: boolean | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Letta from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { MessageRole } from "../../../../../../types/MessageRole";
import { MessageUpdateContent } from "../../types/MessageUpdateContent";
import { ChatCompletionMessageToolCall } from "../../../../../../types/ChatCompletionMessageToolCall";

export const MessageUpdate: core.serialization.Schema<
    serializers.agents.MessageUpdate.Raw,
    Letta.agents.MessageUpdate
> = core.serialization.object({
    role: MessageRole.optional(),
    content: MessageUpdateContent.optional(),
    name: core.serialization.string().optional(),
    toolCalls: core.serialization.property(
        "tool_calls",
        core.serialization.list(ChatCompletionMessageToolCall).optional(),
    ),
    toolCallId: core.serialization.property("tool_call_id", core.serialization.string().optional()),
});

export declare namespace MessageUpdate {
    export interface Raw {
        role?: MessageRole.Raw | null;
        content?: MessageUpdateContent.Raw | null;
        name?: string | null;
        tool_calls?: ChatCompletionMessageToolCall.Raw[] | null;
        tool_call_id?: string | null;
    }
}

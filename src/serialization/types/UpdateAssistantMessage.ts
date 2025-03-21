/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { UpdateAssistantMessageContent } from "./UpdateAssistantMessageContent";

export const UpdateAssistantMessage: core.serialization.ObjectSchema<
    serializers.UpdateAssistantMessage.Raw,
    Letta.UpdateAssistantMessage
> = core.serialization.object({
    messageType: core.serialization.property(
        "message_type",
        core.serialization.stringLiteral("assistant_message").optional(),
    ),
    content: UpdateAssistantMessageContent,
});

export declare namespace UpdateAssistantMessage {
    export interface Raw {
        message_type?: "assistant_message" | null;
        content: UpdateAssistantMessageContent.Raw;
    }
}

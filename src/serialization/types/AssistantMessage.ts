/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { AssistantMessageContent } from "./AssistantMessageContent";

export const AssistantMessage: core.serialization.ObjectSchema<
    serializers.AssistantMessage.Raw,
    Letta.AssistantMessage
> = core.serialization.object({
    id: core.serialization.string(),
    date: core.serialization.date(),
    name: core.serialization.string().optional(),
    messageType: core.serialization.property("message_type", core.serialization.stringLiteral("assistant_message")),
    content: AssistantMessageContent,
});

export declare namespace AssistantMessage {
    export interface Raw {
        id: string;
        date: string;
        name?: string | null;
        message_type: "assistant_message";
        content: AssistantMessageContent.Raw;
    }
}

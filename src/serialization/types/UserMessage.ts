/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { UserMessageContent } from "./UserMessageContent";

export const UserMessage: core.serialization.ObjectSchema<serializers.UserMessage.Raw, Letta.UserMessage> =
    core.serialization.object({
        id: core.serialization.string(),
        date: core.serialization.date(),
        name: core.serialization.string().optional(),
        messageType: core.serialization.property("message_type", core.serialization.stringLiteral("user_message")),
        otid: core.serialization.string().optional(),
        senderId: core.serialization.property("sender_id", core.serialization.string().optional()),
        stepId: core.serialization.property("step_id", core.serialization.string().optional()),
        content: UserMessageContent,
    });

export declare namespace UserMessage {
    export interface Raw {
        id: string;
        date: string;
        name?: string | null;
        message_type: "user_message";
        otid?: string | null;
        sender_id?: string | null;
        step_id?: string | null;
        content: UserMessageContent.Raw;
    }
}

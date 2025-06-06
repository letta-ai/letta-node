/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ToolReturnMessageStatus } from "./ToolReturnMessageStatus";

export const ToolReturnMessage: core.serialization.ObjectSchema<
    serializers.ToolReturnMessage.Raw,
    Letta.ToolReturnMessage
> = core.serialization.object({
    id: core.serialization.string(),
    date: core.serialization.date(),
    name: core.serialization.string().optional(),
    messageType: core.serialization.property("message_type", core.serialization.stringLiteral("tool_return_message")),
    otid: core.serialization.string().optional(),
    senderId: core.serialization.property("sender_id", core.serialization.string().optional()),
    stepId: core.serialization.property("step_id", core.serialization.string().optional()),
    toolReturn: core.serialization.property("tool_return", core.serialization.string()),
    status: ToolReturnMessageStatus,
    toolCallId: core.serialization.property("tool_call_id", core.serialization.string()),
    stdout: core.serialization.list(core.serialization.string()).optional(),
    stderr: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ToolReturnMessage {
    export interface Raw {
        id: string;
        date: string;
        name?: string | null;
        message_type: "tool_return_message";
        otid?: string | null;
        sender_id?: string | null;
        step_id?: string | null;
        tool_return: string;
        status: ToolReturnMessageStatus.Raw;
        tool_call_id: string;
        stdout?: string[] | null;
        stderr?: string[] | null;
    }
}

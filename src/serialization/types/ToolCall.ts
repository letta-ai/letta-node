/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ToolCall: core.serialization.ObjectSchema<serializers.ToolCall.Raw, Letta.ToolCall> =
    core.serialization.object({
        name: core.serialization.string(),
        arguments: core.serialization.string(),
        toolCallId: core.serialization.property("tool_call_id", core.serialization.string()),
    });

export declare namespace ToolCall {
    export interface Raw {
        name: string;
        arguments: string;
        tool_call_id: string;
    }
}

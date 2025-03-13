/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const McpTool: core.serialization.ObjectSchema<serializers.McpTool.Raw, Letta.McpTool> = core.serialization
    .object({
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        inputSchema: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    })
    .passthrough();

export declare namespace McpTool {
    export interface Raw {
        name: string;
        description?: string | null;
        inputSchema: Record<string, unknown>;
        [key: string]: any;
    }
}

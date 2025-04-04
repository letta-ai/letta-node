/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { McpServerType } from "./McpServerType";

export const StdioServerConfig: core.serialization.ObjectSchema<
    serializers.StdioServerConfig.Raw,
    Letta.StdioServerConfig
> = core.serialization.object({
    serverName: core.serialization.property("server_name", core.serialization.string()),
    type: McpServerType.optional(),
    command: core.serialization.string(),
    args: core.serialization.list(core.serialization.string()),
    env: core.serialization.record(core.serialization.string(), core.serialization.string().optional()).optional(),
});

export declare namespace StdioServerConfig {
    export interface Raw {
        server_name: string;
        type?: McpServerType.Raw | null;
        command: string;
        args: string[];
        env?: Record<string, string | null | undefined> | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Letta from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const AgentsCreateRequest: core.serialization.Schema<
    serializers.templates.AgentsCreateRequest.Raw,
    Letta.templates.AgentsCreateRequest
> = core.serialization.object({
    tags: core.serialization.list(core.serialization.string()).optional(),
    agentName: core.serialization.property("agent_name", core.serialization.string().optional()),
    memoryVariables: core.serialization.property(
        "memory_variables",
        core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    ),
    toolVariables: core.serialization.property(
        "tool_variables",
        core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    ),
    identityIds: core.serialization.property(
        "identity_ids",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace AgentsCreateRequest {
    export interface Raw {
        tags?: string[] | null;
        agent_name?: string | null;
        memory_variables?: Record<string, string> | null;
        tool_variables?: Record<string, string> | null;
        identity_ids?: string[] | null;
    }
}

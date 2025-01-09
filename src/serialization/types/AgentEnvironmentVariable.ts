/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const AgentEnvironmentVariable: core.serialization.ObjectSchema<
    serializers.AgentEnvironmentVariable.Raw,
    Letta.AgentEnvironmentVariable
> = core.serialization.object({
    createdById: core.serialization.property("created_by_id", core.serialization.string().optional()),
    lastUpdatedById: core.serialization.property("last_updated_by_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    id: core.serialization.string().optional(),
    key: core.serialization.string(),
    value: core.serialization.string(),
    description: core.serialization.string().optional(),
    agentId: core.serialization.property("agent_id", core.serialization.string()),
});

export declare namespace AgentEnvironmentVariable {
    interface Raw {
        created_by_id?: string | null;
        last_updated_by_id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        id?: string | null;
        key: string;
        value: string;
        description?: string | null;
        agent_id: string;
    }
}

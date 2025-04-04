/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ManagerType } from "./ManagerType";

export const Group: core.serialization.ObjectSchema<serializers.Group.Raw, Letta.Group> = core.serialization.object({
    id: core.serialization.string(),
    managerType: core.serialization.property("manager_type", ManagerType),
    agentIds: core.serialization.property("agent_ids", core.serialization.list(core.serialization.string())),
    description: core.serialization.string(),
    sharedBlockIds: core.serialization.property(
        "shared_block_ids",
        core.serialization.list(core.serialization.string()).optional(),
    ),
    managerAgentId: core.serialization.property("manager_agent_id", core.serialization.string().optional()),
    terminationToken: core.serialization.property("termination_token", core.serialization.string().optional()),
    maxTurns: core.serialization.property("max_turns", core.serialization.number().optional()),
    backgroundAgentsInterval: core.serialization.property(
        "background_agents_interval",
        core.serialization.number().optional(),
    ),
    turnsCounter: core.serialization.property("turns_counter", core.serialization.number().optional()),
    lastProcessedMessageId: core.serialization.property(
        "last_processed_message_id",
        core.serialization.string().optional(),
    ),
});

export declare namespace Group {
    export interface Raw {
        id: string;
        manager_type: ManagerType.Raw;
        agent_ids: string[];
        description: string;
        shared_block_ids?: string[] | null;
        manager_agent_id?: string | null;
        termination_token?: string | null;
        max_turns?: number | null;
        background_agents_interval?: number | null;
        turns_counter?: number | null;
        last_processed_message_id?: string | null;
    }
}

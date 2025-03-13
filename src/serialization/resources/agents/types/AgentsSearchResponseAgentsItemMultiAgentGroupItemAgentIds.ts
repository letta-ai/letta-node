/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType } from "./AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType";
import { AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId } from "./AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId";
import { AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken } from "./AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken";
import { AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns } from "./AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns";

export const AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIds: core.serialization.ObjectSchema<
    serializers.AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIds.Raw,
    Letta.AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIds
> = core.serialization.object({
    id: core.serialization.string(),
    managerType: core.serialization.property(
        "manager_type",
        AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType,
    ),
    agentIds: core.serialization.property("agent_ids", core.serialization.list(core.serialization.string())),
    description: core.serialization.string(),
    managerAgentId: core.serialization.property(
        "manager_agent_id",
        AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId.optional(),
    ),
    terminationToken: core.serialization.property(
        "termination_token",
        AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken.optional(),
    ),
    maxTurns: core.serialization.property(
        "max_turns",
        AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns.optional(),
    ),
});

export declare namespace AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIds {
    export interface Raw {
        id: string;
        manager_type: AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType.Raw;
        agent_ids: string[];
        description: string;
        manager_agent_id?: AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId.Raw | null;
        termination_token?: AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken.Raw | null;
        max_turns?: AgentsSearchResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns.Raw | null;
    }
}

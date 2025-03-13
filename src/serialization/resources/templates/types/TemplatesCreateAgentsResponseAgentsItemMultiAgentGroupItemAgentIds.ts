/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType } from "./TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType";
import { TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId } from "./TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId";
import { TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken } from "./TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken";
import { TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns } from "./TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns";

export const TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIds: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIds.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIds
> = core.serialization.object({
    id: core.serialization.string(),
    managerType: core.serialization.property(
        "manager_type",
        TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType,
    ),
    agentIds: core.serialization.property("agent_ids", core.serialization.list(core.serialization.string())),
    description: core.serialization.string(),
    managerAgentId: core.serialization.property(
        "manager_agent_id",
        TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId.optional(),
    ),
    terminationToken: core.serialization.property(
        "termination_token",
        TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken.optional(),
    ),
    maxTurns: core.serialization.property(
        "max_turns",
        TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns.optional(),
    ),
});

export declare namespace TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIds {
    export interface Raw {
        id: string;
        manager_type: TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType.Raw;
        agent_ids: string[];
        description: string;
        manager_agent_id?: TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId.Raw | null;
        termination_token?: TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken.Raw | null;
        max_turns?: TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns.Raw | null;
    }
}

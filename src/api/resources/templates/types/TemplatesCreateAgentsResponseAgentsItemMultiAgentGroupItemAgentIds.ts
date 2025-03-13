/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../index";

export interface TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIds {
    id: string;
    managerType: Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerType;
    agentIds: string[];
    description: string;
    managerAgentId?: Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsManagerAgentId;
    terminationToken?: Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsTerminationToken;
    maxTurns?: Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurns;
}

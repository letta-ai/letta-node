/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const AgentsSearchResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem.Raw,
    Letta.AgentsSearchResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace AgentsSearchResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem {
    export type Raw = string | (string | null | undefined);
}

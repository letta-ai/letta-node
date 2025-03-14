/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemMultiAgentGroupAgentIds } from "./AgentsSearchResponseAgentsItemMultiAgentGroupAgentIds";
import { AgentsSearchResponseAgentsItemMultiAgentGroupItem } from "./AgentsSearchResponseAgentsItemMultiAgentGroupItem";

export const AgentsSearchResponseAgentsItemMultiAgentGroup: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemMultiAgentGroup.Raw,
    Letta.AgentsSearchResponseAgentsItemMultiAgentGroup
> = core.serialization.undiscriminatedUnion([
    AgentsSearchResponseAgentsItemMultiAgentGroupAgentIds,
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemMultiAgentGroupItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemMultiAgentGroup {
    export type Raw =
        | AgentsSearchResponseAgentsItemMultiAgentGroupAgentIds.Raw
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemMultiAgentGroupItem.Raw | null | undefined)[]
        | unknown;
}

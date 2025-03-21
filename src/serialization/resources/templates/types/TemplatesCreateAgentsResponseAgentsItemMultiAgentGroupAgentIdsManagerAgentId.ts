/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem } from "./TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem";

export const TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentId: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentId.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentId {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupAgentIdsManagerAgentIdItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurnsItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurnsItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurnsItem
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMultiAgentGroupItemAgentIdsMaxTurnsItem {
    export type Raw = number | (string | null | undefined);
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemMaxCountLimitType: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemMaxCountLimitType.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemMaxCountLimitType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("max_count_per_step"),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemMaxCountLimitType {
    export type Raw = "max_count_per_step" | unknown;
}

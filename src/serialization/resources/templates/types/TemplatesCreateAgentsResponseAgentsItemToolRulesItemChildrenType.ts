/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildrenType: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildrenType.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildrenType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("constrain_child_tools"),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildrenType {
    export type Raw = "constrain_child_tools" | unknown;
}

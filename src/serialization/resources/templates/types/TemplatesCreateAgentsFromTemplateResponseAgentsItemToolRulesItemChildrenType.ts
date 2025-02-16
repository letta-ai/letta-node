/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildrenType: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildrenType.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildrenType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("constrain_child_tools"),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildrenType {
    export type Raw = "constrain_child_tools" | unknown;
}

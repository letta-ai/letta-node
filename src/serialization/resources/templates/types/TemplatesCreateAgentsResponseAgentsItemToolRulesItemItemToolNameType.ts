/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemToolNameType: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemToolNameType.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemToolNameType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("continue_loop"),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemToolNameType {
    export type Raw = "continue_loop" | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemToolRulesItemTwoType: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRulesItemTwoType.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRulesItemTwoType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("exit_loop"),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRulesItemTwoType {
    export type Raw = "exit_loop" | unknown;
}

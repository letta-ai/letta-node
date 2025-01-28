/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemChildrenType: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemChildrenType.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemChildrenType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("InitToolRule"),
    core.serialization.stringLiteral("TerminalToolRule"),
    core.serialization.stringLiteral("continue_loop"),
    core.serialization.stringLiteral("conditional"),
    core.serialization.stringLiteral("ToolRule"),
    core.serialization.stringLiteral("require_parent_tools"),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemChildrenType {
    export type Raw =
        | "InitToolRule"
        | "TerminalToolRule"
        | "continue_loop"
        | "conditional"
        | "ToolRule"
        | "require_parent_tools"
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItem),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules {
    export type Raw =
        | TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItem.Raw[]
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemToolRulesItem } from "./TemplatesCreateAgentsResponseAgentsItemToolRulesItem";

export const TemplatesCreateAgentsResponseAgentsItemToolRules: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRules.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRules
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemToolRulesItem),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemToolRulesItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRules {
    export type Raw =
        | TemplatesCreateAgentsResponseAgentsItemToolRulesItem.Raw[]
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemToolRulesItem.Raw | null | undefined)[]
        | unknown;
}

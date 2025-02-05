/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolRulesItem } from "./AgentsSearchResponseAgentsItemToolRulesItem";

export const AgentsSearchResponseAgentsItemToolRules: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolRules.Raw,
    Letta.AgentsSearchResponseAgentsItemToolRules
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(AgentsSearchResponseAgentsItemToolRulesItem),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemToolRulesItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemToolRules {
    export type Raw =
        | AgentsSearchResponseAgentsItemToolRulesItem.Raw[]
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemToolRulesItem.Raw | null | undefined)[]
        | unknown;
}

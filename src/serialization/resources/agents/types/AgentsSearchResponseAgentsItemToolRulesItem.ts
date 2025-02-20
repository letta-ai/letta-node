/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolRulesItemItem } from "./AgentsSearchResponseAgentsItemToolRulesItemItem";

export const AgentsSearchResponseAgentsItemToolRulesItem: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolRulesItem.Raw,
    Letta.AgentsSearchResponseAgentsItemToolRulesItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(AgentsSearchResponseAgentsItemToolRulesItemItem),
    core.serialization.string().optional(),
]);

export declare namespace AgentsSearchResponseAgentsItemToolRulesItem {
    export type Raw = AgentsSearchResponseAgentsItemToolRulesItemItem.Raw[] | (string | null | undefined);
}

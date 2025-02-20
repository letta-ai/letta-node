/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const AgentsSearchResponseAgentsItemToolRulesItemChildrenType: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolRulesItemChildrenType.Raw,
    Letta.AgentsSearchResponseAgentsItemToolRulesItemChildrenType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("constrain_child_tools"),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemToolRulesItemChildrenType {
    export type Raw = "constrain_child_tools" | unknown;
}

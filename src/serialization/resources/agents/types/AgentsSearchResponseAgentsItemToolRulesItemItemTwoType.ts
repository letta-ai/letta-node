/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const AgentsSearchResponseAgentsItemToolRulesItemItemTwoType: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolRulesItemItemTwoType.Raw,
    Letta.AgentsSearchResponseAgentsItemToolRulesItemItemTwoType
> = core.serialization.undiscriminatedUnion([
    core.serialization.stringLiteral("exit_loop"),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemToolRulesItemItemTwoType {
    export type Raw = "exit_loop" | unknown;
}

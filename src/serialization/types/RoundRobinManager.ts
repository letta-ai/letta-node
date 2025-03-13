/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const RoundRobinManager: core.serialization.ObjectSchema<
    serializers.RoundRobinManager.Raw,
    Letta.RoundRobinManager
> = core.serialization.object({
    managerType: core.serialization.property("manager_type", core.serialization.stringLiteral("round_robin")),
    maxTurns: core.serialization.property("max_turns", core.serialization.number().optional()),
});

export declare namespace RoundRobinManager {
    export interface Raw {
        manager_type: "round_robin";
        max_turns?: number | null;
    }
}

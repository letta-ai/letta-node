/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ManagerType: core.serialization.Schema<serializers.ManagerType.Raw, Letta.ManagerType> =
    core.serialization.enum_(["round_robin", "supervisor", "dynamic", "sleeptime", "swarm"]);

export declare namespace ManagerType {
    export type Raw = "round_robin" | "supervisor" | "dynamic" | "sleeptime" | "swarm";
}

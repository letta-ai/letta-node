/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { DynamicManagerUpdate } from "../../../types/DynamicManagerUpdate";
import { RoundRobinManagerUpdate } from "../../../types/RoundRobinManagerUpdate";
import { SleeptimeManagerUpdate } from "../../../types/SleeptimeManagerUpdate";
import { SupervisorManagerUpdate } from "../../../types/SupervisorManagerUpdate";
import { VoiceSleeptimeManagerUpdate } from "../../../types/VoiceSleeptimeManagerUpdate";

export const GroupUpdateManagerConfig: core.serialization.Schema<
    serializers.GroupUpdateManagerConfig.Raw,
    Letta.GroupUpdateManagerConfig
> = core.serialization.undiscriminatedUnion([
    DynamicManagerUpdate,
    RoundRobinManagerUpdate,
    SleeptimeManagerUpdate,
    SupervisorManagerUpdate,
    VoiceSleeptimeManagerUpdate,
]);

export declare namespace GroupUpdateManagerConfig {
    export type Raw =
        | DynamicManagerUpdate.Raw
        | RoundRobinManagerUpdate.Raw
        | SleeptimeManagerUpdate.Raw
        | SupervisorManagerUpdate.Raw
        | VoiceSleeptimeManagerUpdate.Raw;
}

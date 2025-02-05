/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedByIdItem } from "./AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedByIdItem";

export const AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedById: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedById.Raw,
    Letta.AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedByIdItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemLastUpdatedByIdItem.Raw | null | undefined)[]
        | unknown;
}

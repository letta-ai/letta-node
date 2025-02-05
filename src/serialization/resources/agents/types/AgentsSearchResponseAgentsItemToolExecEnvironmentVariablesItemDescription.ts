/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescriptionItem } from "./AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescriptionItem";

export const AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescription: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescription.Raw,
    Letta.AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescription
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescriptionItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescription {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemToolExecEnvironmentVariablesItemDescriptionItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemProjectIdItem } from "./AgentsSearchResponseAgentsItemProjectIdItem";

export const AgentsSearchResponseAgentsItemProjectId: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemProjectId.Raw,
    Letta.AgentsSearchResponseAgentsItemProjectId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemProjectIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemProjectId {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemProjectIdItem.Raw | null | undefined)[]
        | unknown;
}

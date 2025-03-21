/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemCreatedAtItem } from "./AgentsSearchResponseAgentsItemCreatedAtItem";

export const AgentsSearchResponseAgentsItemCreatedAt: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemCreatedAt.Raw,
    Letta.AgentsSearchResponseAgentsItemCreatedAt
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemCreatedAtItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemCreatedAt {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemCreatedAtItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemSourcesItemCreatedByIdItem } from "./AgentsSearchResponseAgentsItemSourcesItemCreatedByIdItem";

export const AgentsSearchResponseAgentsItemSourcesItemCreatedById: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemSourcesItemCreatedById.Raw,
    Letta.AgentsSearchResponseAgentsItemSourcesItemCreatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemSourcesItemCreatedByIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemSourcesItemCreatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemSourcesItemCreatedByIdItem.Raw | null | undefined)[]
        | unknown;
}

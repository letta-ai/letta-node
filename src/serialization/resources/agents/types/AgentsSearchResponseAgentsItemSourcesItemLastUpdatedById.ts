/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemSourcesItemLastUpdatedByIdItem } from "./AgentsSearchResponseAgentsItemSourcesItemLastUpdatedByIdItem";

export const AgentsSearchResponseAgentsItemSourcesItemLastUpdatedById: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemSourcesItemLastUpdatedById.Raw,
    Letta.AgentsSearchResponseAgentsItemSourcesItemLastUpdatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemSourcesItemLastUpdatedByIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemSourcesItemLastUpdatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemSourcesItemLastUpdatedByIdItem.Raw | null | undefined)[]
        | unknown;
}

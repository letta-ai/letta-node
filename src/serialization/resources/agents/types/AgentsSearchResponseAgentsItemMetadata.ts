/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemMetadataItem } from "./AgentsSearchResponseAgentsItemMetadataItem";

export const AgentsSearchResponseAgentsItemMetadata: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemMetadata.Raw,
    Letta.AgentsSearchResponseAgentsItemMetadata
> = core.serialization.undiscriminatedUnion([
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemMetadataItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemMetadata {
    export type Raw =
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemMetadataItem.Raw | null | undefined)[]
        | unknown;
}

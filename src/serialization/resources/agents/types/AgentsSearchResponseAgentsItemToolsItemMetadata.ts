/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolsItemMetadataItem } from "./AgentsSearchResponseAgentsItemToolsItemMetadataItem";

export const AgentsSearchResponseAgentsItemToolsItemMetadata: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemToolsItemMetadata.Raw,
    Letta.AgentsSearchResponseAgentsItemToolsItemMetadata
> = core.serialization.undiscriminatedUnion([
    core.serialization.unknown(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemToolsItemMetadataItem.optional()),
]);

export declare namespace AgentsSearchResponseAgentsItemToolsItemMetadata {
    export type Raw =
        | unknown
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemToolsItemMetadataItem.Raw | null | undefined)[];
}

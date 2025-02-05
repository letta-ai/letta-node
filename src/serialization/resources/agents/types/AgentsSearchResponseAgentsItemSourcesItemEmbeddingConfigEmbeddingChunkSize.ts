/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSizeItem } from "./AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSizeItem";

export const AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSize: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSize.Raw,
    Letta.AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSize
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSizeItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSize {
    export type Raw =
        | number
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSizeItem.Raw | null | undefined)[]
        | unknown;
}

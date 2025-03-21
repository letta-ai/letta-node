/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem } from "./AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem";

export const AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSize: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSize.Raw,
    Letta.AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSize
> = core.serialization.undiscriminatedUnion([
    core.serialization.number(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSize {
    export type Raw =
        | number
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem.Raw | null | undefined)[]
        | unknown;
}

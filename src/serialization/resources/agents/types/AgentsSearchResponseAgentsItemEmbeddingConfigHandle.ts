/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemEmbeddingConfigHandleItem } from "./AgentsSearchResponseAgentsItemEmbeddingConfigHandleItem";

export const AgentsSearchResponseAgentsItemEmbeddingConfigHandle: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemEmbeddingConfigHandle.Raw,
    Letta.AgentsSearchResponseAgentsItemEmbeddingConfigHandle
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemEmbeddingConfigHandleItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemEmbeddingConfigHandle {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemEmbeddingConfigHandleItem.Raw | null | undefined)[]
        | unknown;
}

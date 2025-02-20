/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem } from "./TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem";

export const TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandle: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandle.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandle
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandle {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem.Raw | null | undefined)[]
        | unknown;
}

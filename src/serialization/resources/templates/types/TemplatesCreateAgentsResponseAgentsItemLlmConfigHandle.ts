/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemLlmConfigHandleItem } from "./TemplatesCreateAgentsResponseAgentsItemLlmConfigHandleItem";

export const TemplatesCreateAgentsResponseAgentsItemLlmConfigHandle: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemLlmConfigHandle.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemLlmConfigHandle
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemLlmConfigHandleItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemLlmConfigHandle {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemLlmConfigHandleItem.Raw | null | undefined)[]
        | unknown;
}

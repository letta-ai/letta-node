/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapperItem } from "./TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapperItem";

export const TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapper: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapper.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapper
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapperItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapper {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemLlmConfigModelWrapperItem.Raw | null | undefined)[]
        | unknown;
}

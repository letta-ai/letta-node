/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapperItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapperItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapper: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapper.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapper
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapperItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapper {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapperItem.Raw | null | undefined)[]
        | unknown;
}

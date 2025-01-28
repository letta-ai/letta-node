/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpointItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpointItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpoint: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpoint.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpoint
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpointItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpoint {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpointItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadataItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadataItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadata: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadata.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadata
> = core.serialization.undiscriminatedUnion([
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadataItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadata {
    export type Raw =
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemMetadataItem.Raw | null | undefined)[]
        | unknown;
}

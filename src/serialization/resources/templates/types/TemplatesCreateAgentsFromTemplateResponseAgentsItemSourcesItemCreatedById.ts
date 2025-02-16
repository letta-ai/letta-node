/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedByIdItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedByIdItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedById: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedById.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedByIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemCreatedByIdItem.Raw | null | undefined)[]
        | unknown;
}

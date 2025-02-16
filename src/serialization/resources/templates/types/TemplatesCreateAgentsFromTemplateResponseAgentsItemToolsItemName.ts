/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemNameItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemNameItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemNameItem.optional()),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemNameItem.Raw | null | undefined)[];
}

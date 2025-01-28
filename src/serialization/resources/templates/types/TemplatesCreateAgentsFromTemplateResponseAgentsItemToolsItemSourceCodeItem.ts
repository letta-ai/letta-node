/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCodeItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCodeItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCodeItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCodeItem {
    export type Raw = string | (string | null | undefined);
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemToolType } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemToolType";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemDescription } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemDescription";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceType } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceType";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemOrganizationId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemOrganizationId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCode } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCode";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemJsonSchema } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemJsonSchema";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemCreatedById } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemCreatedById";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemLastUpdatedById } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemLastUpdatedById";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    toolType: core.serialization.property(
        "tool_type",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemToolType.optional(),
    ),
    description: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemDescription.optional(),
    sourceType: core.serialization.property(
        "source_type",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceType.optional(),
    ),
    organizationId: core.serialization.property(
        "organization_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemOrganizationId.optional(),
    ),
    name: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName.optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
    sourceCode: core.serialization.property(
        "source_code",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCode.optional(),
    ),
    jsonSchema: core.serialization.property(
        "json_schema",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemJsonSchema.optional(),
    ),
    returnCharLimit: core.serialization.property("return_char_limit", core.serialization.number().optional()),
    createdById: core.serialization.property(
        "created_by_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemCreatedById.optional(),
    ),
    lastUpdatedById: core.serialization.property(
        "last_updated_by_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemLastUpdatedById.optional(),
    ),
});

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem {
    export interface Raw {
        id?: string | null;
        tool_type?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemToolType.Raw | null;
        description?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemDescription.Raw | null;
        source_type?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceType.Raw | null;
        organization_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemOrganizationId.Raw | null;
        name?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemName.Raw | null;
        tags?: string[] | null;
        source_code?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemSourceCode.Raw | null;
        json_schema?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemJsonSchema.Raw | null;
        return_char_limit?: number | null;
        created_by_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemCreatedById.Raw | null;
        last_updated_by_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItemLastUpdatedById.Raw | null;
    }
}

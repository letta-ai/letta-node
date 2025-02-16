/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLimit } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLimit";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemName } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemName";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemIsTemplate } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemIsTemplate";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLabel } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLabel";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemDescription } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemDescription";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadata } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadata";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemOrganizationId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemOrganizationId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemCreatedById } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemCreatedById";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItem: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItem
> = core.serialization.object({
    value: core.serialization.string(),
    limit: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLimit.optional(),
    name: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemName.optional(),
    isTemplate: core.serialization.property(
        "is_template",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemIsTemplate.optional(),
    ),
    label: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLabel.optional(),
    description: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemDescription.optional(),
    metadata: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadata.optional(),
    id: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId.optional(),
    organizationId: core.serialization.property(
        "organization_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemOrganizationId.optional(),
    ),
    createdById: core.serialization.property(
        "created_by_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemCreatedById.optional(),
    ),
    lastUpdatedById: core.serialization.property(
        "last_updated_by_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById.optional(),
    ),
});

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItem {
    export interface Raw {
        value: string;
        limit?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLimit.Raw | null;
        name?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemName.Raw | null;
        is_template?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemIsTemplate.Raw | null;
        label?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLabel.Raw | null;
        description?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemDescription.Raw | null;
        metadata?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadata.Raw | null;
        id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId.Raw | null;
        organization_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemOrganizationId.Raw | null;
        created_by_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemCreatedById.Raw | null;
        last_updated_by_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById.Raw | null;
    }
}

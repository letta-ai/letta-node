/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemLimit } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemLimit";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemName } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemName";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemIsTemplate } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemIsTemplate";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemLabel } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemLabel";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemDescription } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemDescription";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemMetadata } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemMetadata";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemId } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemId";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemCreatedById } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemCreatedById";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemLastUpdatedById } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemLastUpdatedById";

export const AgentsSearchResponseAgentsItemMemoryBlocksItem: core.serialization.ObjectSchema<
    serializers.AgentsSearchResponseAgentsItemMemoryBlocksItem.Raw,
    Letta.AgentsSearchResponseAgentsItemMemoryBlocksItem
> = core.serialization.object({
    value: core.serialization.string(),
    limit: AgentsSearchResponseAgentsItemMemoryBlocksItemLimit.optional(),
    name: AgentsSearchResponseAgentsItemMemoryBlocksItemName.optional(),
    isTemplate: core.serialization.property(
        "is_template",
        AgentsSearchResponseAgentsItemMemoryBlocksItemIsTemplate.optional(),
    ),
    label: AgentsSearchResponseAgentsItemMemoryBlocksItemLabel.optional(),
    description: AgentsSearchResponseAgentsItemMemoryBlocksItemDescription.optional(),
    metadata: AgentsSearchResponseAgentsItemMemoryBlocksItemMetadata.optional(),
    id: AgentsSearchResponseAgentsItemMemoryBlocksItemId.optional(),
    organizationId: core.serialization.property(
        "organization_id",
        AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId.optional(),
    ),
    createdById: core.serialization.property(
        "created_by_id",
        AgentsSearchResponseAgentsItemMemoryBlocksItemCreatedById.optional(),
    ),
    lastUpdatedById: core.serialization.property(
        "last_updated_by_id",
        AgentsSearchResponseAgentsItemMemoryBlocksItemLastUpdatedById.optional(),
    ),
});

export declare namespace AgentsSearchResponseAgentsItemMemoryBlocksItem {
    export interface Raw {
        value: string;
        limit?: AgentsSearchResponseAgentsItemMemoryBlocksItemLimit.Raw | null;
        name?: AgentsSearchResponseAgentsItemMemoryBlocksItemName.Raw | null;
        is_template?: AgentsSearchResponseAgentsItemMemoryBlocksItemIsTemplate.Raw | null;
        label?: AgentsSearchResponseAgentsItemMemoryBlocksItemLabel.Raw | null;
        description?: AgentsSearchResponseAgentsItemMemoryBlocksItemDescription.Raw | null;
        metadata?: AgentsSearchResponseAgentsItemMemoryBlocksItemMetadata.Raw | null;
        id?: AgentsSearchResponseAgentsItemMemoryBlocksItemId.Raw | null;
        organization_id?: AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId.Raw | null;
        created_by_id?: AgentsSearchResponseAgentsItemMemoryBlocksItemCreatedById.Raw | null;
        last_updated_by_id?: AgentsSearchResponseAgentsItemMemoryBlocksItemLastUpdatedById.Raw | null;
    }
}

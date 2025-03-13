/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemCreatedById } from "./TemplatesCreateAgentsResponseAgentsItemCreatedById";
import { TemplatesCreateAgentsResponseAgentsItemLastUpdatedById } from "./TemplatesCreateAgentsResponseAgentsItemLastUpdatedById";
import { TemplatesCreateAgentsResponseAgentsItemCreatedAt } from "./TemplatesCreateAgentsResponseAgentsItemCreatedAt";
import { TemplatesCreateAgentsResponseAgentsItemUpdatedAt } from "./TemplatesCreateAgentsResponseAgentsItemUpdatedAt";
import { TemplatesCreateAgentsResponseAgentsItemToolRules } from "./TemplatesCreateAgentsResponseAgentsItemToolRules";
import { TemplatesCreateAgentsResponseAgentsItemMessageIds } from "./TemplatesCreateAgentsResponseAgentsItemMessageIds";
import { TemplatesCreateAgentsResponseAgentsItemAgentType } from "./TemplatesCreateAgentsResponseAgentsItemAgentType";
import { TemplatesCreateAgentsResponseAgentsItemLlmConfig } from "./TemplatesCreateAgentsResponseAgentsItemLlmConfig";
import { TemplatesCreateAgentsResponseAgentsItemEmbeddingConfig } from "./TemplatesCreateAgentsResponseAgentsItemEmbeddingConfig";
import { TemplatesCreateAgentsResponseAgentsItemOrganizationId } from "./TemplatesCreateAgentsResponseAgentsItemOrganizationId";
import { TemplatesCreateAgentsResponseAgentsItemDescription } from "./TemplatesCreateAgentsResponseAgentsItemDescription";
import { TemplatesCreateAgentsResponseAgentsItemMetadata } from "./TemplatesCreateAgentsResponseAgentsItemMetadata";
import { TemplatesCreateAgentsResponseAgentsItemMemory } from "./TemplatesCreateAgentsResponseAgentsItemMemory";
import { TemplatesCreateAgentsResponseAgentsItemToolsItem } from "./TemplatesCreateAgentsResponseAgentsItemToolsItem";
import { TemplatesCreateAgentsResponseAgentsItemSourcesItem } from "./TemplatesCreateAgentsResponseAgentsItemSourcesItem";
import { TemplatesCreateAgentsResponseAgentsItemToolExecEnvironmentVariables } from "./TemplatesCreateAgentsResponseAgentsItemToolExecEnvironmentVariables";
import { TemplatesCreateAgentsResponseAgentsItemProjectId } from "./TemplatesCreateAgentsResponseAgentsItemProjectId";
import { TemplatesCreateAgentsResponseAgentsItemTemplateId } from "./TemplatesCreateAgentsResponseAgentsItemTemplateId";
import { TemplatesCreateAgentsResponseAgentsItemBaseTemplateId } from "./TemplatesCreateAgentsResponseAgentsItemBaseTemplateId";
import { TemplatesCreateAgentsResponseAgentsItemIdentityIds } from "./TemplatesCreateAgentsResponseAgentsItemIdentityIds";
import { TemplatesCreateAgentsResponseAgentsItemMessageBufferAutoclear } from "./TemplatesCreateAgentsResponseAgentsItemMessageBufferAutoclear";
import { TemplatesCreateAgentsResponseAgentsItemMultiAgentGroup } from "./TemplatesCreateAgentsResponseAgentsItemMultiAgentGroup";

export const TemplatesCreateAgentsResponseAgentsItem: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsResponseAgentsItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItem
> = core.serialization.object({
    createdById: core.serialization.property(
        "created_by_id",
        TemplatesCreateAgentsResponseAgentsItemCreatedById.optional(),
    ),
    lastUpdatedById: core.serialization.property(
        "last_updated_by_id",
        TemplatesCreateAgentsResponseAgentsItemLastUpdatedById.optional(),
    ),
    createdAt: core.serialization.property("created_at", TemplatesCreateAgentsResponseAgentsItemCreatedAt.optional()),
    updatedAt: core.serialization.property("updated_at", TemplatesCreateAgentsResponseAgentsItemUpdatedAt.optional()),
    id: core.serialization.string(),
    name: core.serialization.string(),
    toolRules: core.serialization.property("tool_rules", TemplatesCreateAgentsResponseAgentsItemToolRules.optional()),
    messageIds: core.serialization.property(
        "message_ids",
        TemplatesCreateAgentsResponseAgentsItemMessageIds.optional(),
    ),
    system: core.serialization.string(),
    agentType: core.serialization.property("agent_type", TemplatesCreateAgentsResponseAgentsItemAgentType),
    llmConfig: core.serialization.property("llm_config", TemplatesCreateAgentsResponseAgentsItemLlmConfig),
    embeddingConfig: core.serialization.property(
        "embedding_config",
        TemplatesCreateAgentsResponseAgentsItemEmbeddingConfig,
    ),
    organizationId: core.serialization.property(
        "organization_id",
        TemplatesCreateAgentsResponseAgentsItemOrganizationId.optional(),
    ),
    description: TemplatesCreateAgentsResponseAgentsItemDescription.optional(),
    metadata: TemplatesCreateAgentsResponseAgentsItemMetadata.optional(),
    memory: TemplatesCreateAgentsResponseAgentsItemMemory,
    tools: core.serialization.list(TemplatesCreateAgentsResponseAgentsItemToolsItem),
    sources: core.serialization.list(TemplatesCreateAgentsResponseAgentsItemSourcesItem),
    tags: core.serialization.list(core.serialization.string()),
    toolExecEnvironmentVariables: core.serialization.property(
        "tool_exec_environment_variables",
        TemplatesCreateAgentsResponseAgentsItemToolExecEnvironmentVariables.optional(),
    ),
    projectId: core.serialization.property("project_id", TemplatesCreateAgentsResponseAgentsItemProjectId.optional()),
    templateId: core.serialization.property(
        "template_id",
        TemplatesCreateAgentsResponseAgentsItemTemplateId.optional(),
    ),
    baseTemplateId: core.serialization.property(
        "base_template_id",
        TemplatesCreateAgentsResponseAgentsItemBaseTemplateId.optional(),
    ),
    identityIds: core.serialization.property(
        "identity_ids",
        TemplatesCreateAgentsResponseAgentsItemIdentityIds.optional(),
    ),
    messageBufferAutoclear: core.serialization.property(
        "message_buffer_autoclear",
        TemplatesCreateAgentsResponseAgentsItemMessageBufferAutoclear.optional(),
    ),
    multiAgentGroup: core.serialization.property(
        "multi_agent_group",
        TemplatesCreateAgentsResponseAgentsItemMultiAgentGroup.optional(),
    ),
});

export declare namespace TemplatesCreateAgentsResponseAgentsItem {
    export interface Raw {
        created_by_id?: TemplatesCreateAgentsResponseAgentsItemCreatedById.Raw | null;
        last_updated_by_id?: TemplatesCreateAgentsResponseAgentsItemLastUpdatedById.Raw | null;
        created_at?: TemplatesCreateAgentsResponseAgentsItemCreatedAt.Raw | null;
        updated_at?: TemplatesCreateAgentsResponseAgentsItemUpdatedAt.Raw | null;
        id: string;
        name: string;
        tool_rules?: TemplatesCreateAgentsResponseAgentsItemToolRules.Raw | null;
        message_ids?: TemplatesCreateAgentsResponseAgentsItemMessageIds.Raw | null;
        system: string;
        agent_type: TemplatesCreateAgentsResponseAgentsItemAgentType.Raw;
        llm_config: TemplatesCreateAgentsResponseAgentsItemLlmConfig.Raw;
        embedding_config: TemplatesCreateAgentsResponseAgentsItemEmbeddingConfig.Raw;
        organization_id?: TemplatesCreateAgentsResponseAgentsItemOrganizationId.Raw | null;
        description?: TemplatesCreateAgentsResponseAgentsItemDescription.Raw | null;
        metadata?: TemplatesCreateAgentsResponseAgentsItemMetadata.Raw | null;
        memory: TemplatesCreateAgentsResponseAgentsItemMemory.Raw;
        tools: TemplatesCreateAgentsResponseAgentsItemToolsItem.Raw[];
        sources: TemplatesCreateAgentsResponseAgentsItemSourcesItem.Raw[];
        tags: string[];
        tool_exec_environment_variables?: TemplatesCreateAgentsResponseAgentsItemToolExecEnvironmentVariables.Raw | null;
        project_id?: TemplatesCreateAgentsResponseAgentsItemProjectId.Raw | null;
        template_id?: TemplatesCreateAgentsResponseAgentsItemTemplateId.Raw | null;
        base_template_id?: TemplatesCreateAgentsResponseAgentsItemBaseTemplateId.Raw | null;
        identity_ids?: TemplatesCreateAgentsResponseAgentsItemIdentityIds.Raw | null;
        message_buffer_autoclear?: TemplatesCreateAgentsResponseAgentsItemMessageBufferAutoclear.Raw | null;
        multi_agent_group?: TemplatesCreateAgentsResponseAgentsItemMultiAgentGroup.Raw | null;
    }
}

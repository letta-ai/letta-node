/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedById } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedById";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedAt } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedAt";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemUpdatedAt } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemUpdatedAt";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageIds } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageIds";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemAgentType } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemAgentType";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfig } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfig";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfig } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfig";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemOrganizationId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemOrganizationId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemDescription } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemDescription";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMetadata } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMetadata";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemory } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemory";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItem";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariables } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariables";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemProjectId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemProjectId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemTemplateId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemTemplateId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemBaseTemplateId } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemBaseTemplateId";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageBufferAutoclear } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageBufferAutoclear";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItem: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItem
> = core.serialization.object({
    createdById: core.serialization.property(
        "created_by_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedById.optional(),
    ),
    lastUpdatedById: core.serialization.property(
        "last_updated_by_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById.optional(),
    ),
    createdAt: core.serialization.property(
        "created_at",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedAt.optional(),
    ),
    updatedAt: core.serialization.property(
        "updated_at",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemUpdatedAt.optional(),
    ),
    id: core.serialization.string(),
    name: core.serialization.string(),
    toolRules: core.serialization.property(
        "tool_rules",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules.optional(),
    ),
    messageIds: core.serialization.property(
        "message_ids",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageIds.optional(),
    ),
    system: core.serialization.string(),
    agentType: core.serialization.property("agent_type", TemplatesCreateAgentsFromTemplateResponseAgentsItemAgentType),
    llmConfig: core.serialization.property("llm_config", TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfig),
    embeddingConfig: core.serialization.property(
        "embedding_config",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfig,
    ),
    organizationId: core.serialization.property(
        "organization_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemOrganizationId.optional(),
    ),
    description: TemplatesCreateAgentsFromTemplateResponseAgentsItemDescription.optional(),
    metadata: TemplatesCreateAgentsFromTemplateResponseAgentsItemMetadata.optional(),
    memory: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemory,
    tools: core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem),
    sources: core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItem),
    tags: core.serialization.list(core.serialization.string()),
    toolExecEnvironmentVariables: core.serialization.property(
        "tool_exec_environment_variables",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariables.optional(),
    ),
    projectId: core.serialization.property(
        "project_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemProjectId.optional(),
    ),
    templateId: core.serialization.property(
        "template_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemTemplateId.optional(),
    ),
    baseTemplateId: core.serialization.property(
        "base_template_id",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemBaseTemplateId.optional(),
    ),
    messageBufferAutoclear: core.serialization.property(
        "message_buffer_autoclear",
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageBufferAutoclear.optional(),
    ),
});

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItem {
    export interface Raw {
        created_by_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedById.Raw | null;
        last_updated_by_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById.Raw | null;
        created_at?: TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedAt.Raw | null;
        updated_at?: TemplatesCreateAgentsFromTemplateResponseAgentsItemUpdatedAt.Raw | null;
        id: string;
        name: string;
        tool_rules?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules.Raw | null;
        message_ids?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageIds.Raw | null;
        system: string;
        agent_type: TemplatesCreateAgentsFromTemplateResponseAgentsItemAgentType.Raw;
        llm_config: TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfig.Raw;
        embedding_config: TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfig.Raw;
        organization_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemOrganizationId.Raw | null;
        description?: TemplatesCreateAgentsFromTemplateResponseAgentsItemDescription.Raw | null;
        metadata?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMetadata.Raw | null;
        memory: TemplatesCreateAgentsFromTemplateResponseAgentsItemMemory.Raw;
        tools: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem.Raw[];
        sources: TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItem.Raw[];
        tags: string[];
        tool_exec_environment_variables?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariables.Raw | null;
        project_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemProjectId.Raw | null;
        template_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemTemplateId.Raw | null;
        base_template_id?: TemplatesCreateAgentsFromTemplateResponseAgentsItemBaseTemplateId.Raw | null;
        message_buffer_autoclear?: TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageBufferAutoclear.Raw | null;
    }
}

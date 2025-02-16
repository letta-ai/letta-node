/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../index";

export interface TemplatesCreateAgentsFromTemplateResponseAgentsItem {
    createdById?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedById;
    lastUpdatedById?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById;
    createdAt?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemCreatedAt;
    updatedAt?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemUpdatedAt;
    id: string;
    name: string;
    toolRules?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRules;
    messageIds?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageIds;
    system: string;
    agentType: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemAgentType;
    llmConfig: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfig;
    embeddingConfig: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfig;
    organizationId?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemOrganizationId;
    description?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemDescription;
    metadata?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMetadata;
    memory: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemory;
    tools: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolsItem[];
    sources: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItem[];
    tags: string[];
    toolExecEnvironmentVariables?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariables;
    projectId?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemProjectId;
    templateId?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemTemplateId;
    baseTemplateId?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemBaseTemplateId;
    messageBufferAutoclear?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMessageBufferAutoclear;
}

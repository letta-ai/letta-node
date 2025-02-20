/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../index";

export interface TemplatesCreateAgentsResponseAgentsItem {
    createdById?: Letta.TemplatesCreateAgentsResponseAgentsItemCreatedById;
    lastUpdatedById?: Letta.TemplatesCreateAgentsResponseAgentsItemLastUpdatedById;
    createdAt?: Letta.TemplatesCreateAgentsResponseAgentsItemCreatedAt;
    updatedAt?: Letta.TemplatesCreateAgentsResponseAgentsItemUpdatedAt;
    id: string;
    name: string;
    toolRules?: Letta.TemplatesCreateAgentsResponseAgentsItemToolRules;
    messageIds?: Letta.TemplatesCreateAgentsResponseAgentsItemMessageIds;
    system: string;
    agentType: Letta.TemplatesCreateAgentsResponseAgentsItemAgentType;
    llmConfig: Letta.TemplatesCreateAgentsResponseAgentsItemLlmConfig;
    embeddingConfig: Letta.TemplatesCreateAgentsResponseAgentsItemEmbeddingConfig;
    organizationId?: Letta.TemplatesCreateAgentsResponseAgentsItemOrganizationId;
    description?: Letta.TemplatesCreateAgentsResponseAgentsItemDescription;
    metadata?: Letta.TemplatesCreateAgentsResponseAgentsItemMetadata;
    memory: Letta.TemplatesCreateAgentsResponseAgentsItemMemory;
    tools: Letta.TemplatesCreateAgentsResponseAgentsItemToolsItem[];
    sources: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItem[];
    tags: string[];
    toolExecEnvironmentVariables?: Letta.TemplatesCreateAgentsResponseAgentsItemToolExecEnvironmentVariables;
    projectId?: Letta.TemplatesCreateAgentsResponseAgentsItemProjectId;
    templateId?: Letta.TemplatesCreateAgentsResponseAgentsItemTemplateId;
    baseTemplateId?: Letta.TemplatesCreateAgentsResponseAgentsItemBaseTemplateId;
    identifierKey?: Letta.TemplatesCreateAgentsResponseAgentsItemIdentifierKey;
    messageBufferAutoclear?: Letta.TemplatesCreateAgentsResponseAgentsItemMessageBufferAutoclear;
}

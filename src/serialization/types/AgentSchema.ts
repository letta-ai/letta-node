/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { CoreMemoryBlockSchema } from "./CoreMemoryBlockSchema";
import { EmbeddingConfig } from "./EmbeddingConfig";
import { LlmConfig } from "./LlmConfig";
import { MessageSchema } from "./MessageSchema";
import { TagSchema } from "./TagSchema";
import { ToolEnvVarSchema } from "./ToolEnvVarSchema";
import { AgentSchemaToolRulesItem } from "./AgentSchemaToolRulesItem";
import { ToolSchema } from "./ToolSchema";

export const AgentSchema: core.serialization.ObjectSchema<serializers.AgentSchema.Raw, Letta.AgentSchema> =
    core.serialization.object({
        agentType: core.serialization.property("agent_type", core.serialization.string()),
        coreMemory: core.serialization.property("core_memory", core.serialization.list(CoreMemoryBlockSchema)),
        createdAt: core.serialization.property("created_at", core.serialization.string()),
        description: core.serialization.string().optional(),
        embeddingConfig: core.serialization.property("embedding_config", EmbeddingConfig),
        llmConfig: core.serialization.property("llm_config", LlmConfig),
        messageBufferAutoclear: core.serialization.property("message_buffer_autoclear", core.serialization.boolean()),
        inContextMessageIndices: core.serialization.property(
            "in_context_message_indices",
            core.serialization.list(core.serialization.number()),
        ),
        messages: core.serialization.list(MessageSchema),
        metadata: core.serialization.property(
            "metadata_",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        ),
        multiAgentGroup: core.serialization.property("multi_agent_group", core.serialization.unknown()),
        name: core.serialization.string(),
        system: core.serialization.string(),
        tags: core.serialization.list(TagSchema),
        toolExecEnvironmentVariables: core.serialization.property(
            "tool_exec_environment_variables",
            core.serialization.list(ToolEnvVarSchema),
        ),
        toolRules: core.serialization.property("tool_rules", core.serialization.list(AgentSchemaToolRulesItem)),
        tools: core.serialization.list(ToolSchema),
        updatedAt: core.serialization.property("updated_at", core.serialization.string()),
        version: core.serialization.string(),
    });

export declare namespace AgentSchema {
    export interface Raw {
        agent_type: string;
        core_memory: CoreMemoryBlockSchema.Raw[];
        created_at: string;
        description?: string | null;
        embedding_config: EmbeddingConfig.Raw;
        llm_config: LlmConfig.Raw;
        message_buffer_autoclear: boolean;
        in_context_message_indices: number[];
        messages: MessageSchema.Raw[];
        metadata_?: Record<string, unknown> | null;
        multi_agent_group?: unknown;
        name: string;
        system: string;
        tags: TagSchema.Raw[];
        tool_exec_environment_variables: ToolEnvVarSchema.Raw[];
        tool_rules: AgentSchemaToolRulesItem.Raw[];
        tools: ToolSchema.Raw[];
        updated_at: string;
        version: string;
    }
}

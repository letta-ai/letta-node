/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../index";

/**
 * @example
 *     {
 *         memoryBlocks: [{
 *                 value: "value",
 *                 label: "label"
 *             }]
 *     }
 */
export interface CreateAgentRequest {
    /** The name of the agent. */
    name?: string;
    /** The blocks to create in the agent's in-context memory. */
    memoryBlocks: Letta.CreateBlock[];
    /** The tools used by the agent. */
    tools?: string[];
    /** The ids of the tools used by the agent. */
    toolIds?: string[];
    /** The ids of the sources used by the agent. */
    sourceIds?: string[];
    /** The ids of the blocks used by the agent. */
    blockIds?: string[];
    /** The tool rules governing the agent. */
    toolRules?: Letta.CreateAgentRequestToolRulesItem[];
    /** The tags associated with the agent. */
    tags?: string[];
    /** The system prompt used by the agent. */
    system?: string;
    /** The type of agent. */
    agentType?: Letta.AgentType;
    /** The LLM configuration used by the agent. */
    llmConfig?: Letta.LlmConfig;
    /** The embedding configuration used by the agent. */
    embeddingConfig?: Letta.EmbeddingConfig;
    /** The initial set of messages to put in the agent's in-context memory. */
    initialMessageSequence?: Letta.MessageCreate[];
    /** The LLM configuration used by the agent. */
    includeBaseTools?: boolean;
    /** The description of the agent. */
    description?: string;
    /** The metadata of the agent. */
    metadata?: Record<string, unknown>;
    /** The LLM configuration handle used by the agent, specified in the format provider/model-name, as an alternative to specifying llm_config. */
    llm?: string;
    /** The embedding configuration handle used by the agent, specified in the format provider/model-name. */
    embedding?: string;
    /** The context window limit used by the agent. */
    contextWindowLimit?: number;
    /** The embedding chunk size used by the agent. */
    embeddingChunkSize?: number;
    /** The template id used to configure the agent */
    fromTemplate?: string;
    /** The project slug that the agent will be associated with. */
    project?: string;
    /** The environment variables for tool execution specific to this agent. */
    toolExecEnvironmentVariables?: Record<string, string | undefined>;
    /** The variables that should be set for the agent. */
    variables?: Record<string, string | undefined>;
}

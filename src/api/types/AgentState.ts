/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Representation of an agent's state. This is the state of the agent at a given time, and is persisted in the DB backend. The state has all the information needed to recreate a persisted agent.
 *
 * Parameters:
 *     id (str): The unique identifier of the agent.
 *     name (str): The name of the agent (must be unique to the user).
 *     created_at (datetime): The datetime the agent was created.
 *     message_ids (List[str]): The ids of the messages in the agent's in-context memory.
 *     memory (Memory): The in-context memory of the agent.
 *     tools (List[str]): The tools used by the agent. This includes any memory editing functions specified in `memory`.
 *     system (str): The system prompt used by the agent.
 *     llm_config (LLMConfig): The LLM configuration used by the agent.
 *     embedding_config (EmbeddingConfig): The embedding configuration used by the agent.
 */
export interface AgentState {
    /** The id of the user that made this object. */
    createdById?: string;
    /** The id of the user that made this object. */
    lastUpdatedById?: string;
    /** The timestamp when the object was created. */
    createdAt?: Date;
    /** The timestamp when the object was last updated. */
    updatedAt?: Date;
    /** The id of the agent. Assigned by the database. */
    id: string;
    /** The name of the agent. */
    name: string;
    /** The list of tool rules. */
    toolRules?: Letta.AgentStateToolRulesItem[];
    /** The ids of the messages in the agent's in-context memory. */
    messageIds?: string[];
    /** The system prompt used by the agent. */
    system: string;
    /** The type of agent. */
    agentType: Letta.AgentType;
    /** The LLM configuration used by the agent. */
    llmConfig: Letta.LlmConfig;
    /** The embedding configuration used by the agent. */
    embeddingConfig: Letta.EmbeddingConfig;
    /** The unique identifier of the organization associated with the agent. */
    organizationId?: string;
    /** The description of the agent. */
    description?: string;
    /** The metadata of the agent. */
    metadata?: Record<string, unknown>;
    /** The in-context memory of the agent. */
    memory: Letta.Memory;
    /** The tools used by the agent. */
    tools: Letta.LettaSchemasToolTool[];
    /** The sources used by the agent. */
    sources: Letta.Source[];
    /** The tags associated with the agent. */
    tags: string[];
    /** The environment variables for tool execution specific to this agent. */
    toolExecEnvironmentVariables: Letta.AgentEnvironmentVariable[];
}

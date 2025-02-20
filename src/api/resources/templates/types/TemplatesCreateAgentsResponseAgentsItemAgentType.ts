/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TemplatesCreateAgentsResponseAgentsItemAgentType =
    | "memgpt_agent"
    | "split_thread_agent"
    | "offline_memory_agent"
    | "chat_only_agent";
export const TemplatesCreateAgentsResponseAgentsItemAgentType = {
    MemgptAgent: "memgpt_agent",
    SplitThreadAgent: "split_thread_agent",
    OfflineMemoryAgent: "offline_memory_agent",
    ChatOnlyAgent: "chat_only_agent",
} as const;

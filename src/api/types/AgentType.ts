/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Enum to represent the type of agent.
 */
export type AgentType =
    | "memgpt_agent"
    | "memgpt_v2_agent"
    | "split_thread_agent"
    | "sleeptime_agent"
    | "voice_convo_agent"
    | "voice_sleeptime_agent";
export const AgentType = {
    MemgptAgent: "memgpt_agent",
    MemgptV2Agent: "memgpt_v2_agent",
    SplitThreadAgent: "split_thread_agent",
    SleeptimeAgent: "sleeptime_agent",
    VoiceConvoAgent: "voice_convo_agent",
    VoiceSleeptimeAgent: "voice_sleeptime_agent",
} as const;

/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const LettaEnvironment = {
    LettaCloud: "https://api.letta.com",
    SelfHosted: "http://localhost:8283",
} as const;

export type LettaEnvironment = typeof LettaEnvironment.LettaCloud | typeof LettaEnvironment.SelfHosted;

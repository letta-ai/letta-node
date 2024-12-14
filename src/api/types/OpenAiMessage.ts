/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface OpenAiMessage {
    /** The unique identifier of the message. */
    id: string;
    object?: string;
    /** The unix timestamp of when the message was created. */
    created_at: number;
    /** The unique identifier of the thread. */
    thread_id: string;
    /** Role of the message sender (either 'user' or 'system') */
    role: string;
    /** The message content to be processed by the agent. */
    content?: Letta.OpenAiMessageContentItem[];
    /** The unique identifier of the assistant. */
    assistant_id: string;
    /** The unique identifier of the run. */
    run_id?: string;
    /** List of file IDs associated with the message. */
    file_ids?: string[];
    /** Metadata associated with the message. */
    metadata?: Record<string, unknown>;
}

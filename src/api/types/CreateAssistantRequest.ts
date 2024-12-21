/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateAssistantRequest {
    /** The model to use for the assistant. */
    model: string;
    /** The name of the assistant. */
    name: string;
    /** The description of the assistant. */
    description?: string;
    /** The instructions for the assistant. */
    instructions: string;
    /** The tools used by the assistant. */
    tools?: string[];
    /** List of file IDs associated with the assistant. */
    file_ids?: string[];
    /** Metadata associated with the assistant. */
    metadata?: Record<string, unknown>;
    /** The model to use for the assistant. */
    embedding_model?: string;
}
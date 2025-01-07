/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const CreateAssistantRequest: core.serialization.ObjectSchema<
    serializers.CreateAssistantRequest.Raw,
    Letta.CreateAssistantRequest
> = core.serialization.object({
    model: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    instructions: core.serialization.string(),
    tools: core.serialization.list(core.serialization.string()).optional(),
    fileIds: core.serialization.property("file_ids", core.serialization.list(core.serialization.string()).optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    embeddingModel: core.serialization.property("embedding_model", core.serialization.string().optional()),
});

export declare namespace CreateAssistantRequest {
    interface Raw {
        model: string;
        name: string;
        description?: string | null;
        instructions: string;
        tools?: string[] | null;
        file_ids?: string[] | null;
        metadata?: Record<string, unknown> | null;
        embedding_model?: string | null;
    }
}

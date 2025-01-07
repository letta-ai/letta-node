/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const OpenAiAssistant: core.serialization.ObjectSchema<serializers.OpenAiAssistant.Raw, Letta.OpenAiAssistant> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        object: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.number()),
        model: core.serialization.string(),
        instructions: core.serialization.string(),
        tools: core.serialization.list(core.serialization.string()).optional(),
        fileIds: core.serialization.property(
            "file_ids",
            core.serialization.list(core.serialization.string()).optional()
        ),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace OpenAiAssistant {
    interface Raw {
        id: string;
        name: string;
        object?: string | null;
        description?: string | null;
        created_at: number;
        model: string;
        instructions: string;
        tools?: string[] | null;
        file_ids?: string[] | null;
        metadata?: Record<string, unknown> | null;
    }
}

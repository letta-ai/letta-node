/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Letta from "../../../../../api/index";
import * as core from "../../../../../core";
import { EmbeddingConfig } from "../../../../types/EmbeddingConfig";

export const PassageUpdate: core.serialization.Schema<serializers.PassageUpdate.Raw, Letta.PassageUpdate> =
    core.serialization.object({
        createdById: core.serialization.property("created_by_id", core.serialization.string().optional()),
        lastUpdatedById: core.serialization.property("last_updated_by_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
        isDeleted: core.serialization.property("is_deleted", core.serialization.boolean().optional()),
        passageUpdateAgentId: core.serialization.property("agent_id", core.serialization.string().optional()),
        sourceId: core.serialization.property("source_id", core.serialization.string().optional()),
        fileId: core.serialization.property("file_id", core.serialization.string().optional()),
        metadata: core.serialization.property(
            "metadata_",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        ),
        text: core.serialization.string().optional(),
        embedding: core.serialization.list(core.serialization.number()).optional(),
        embeddingConfig: core.serialization.property("embedding_config", EmbeddingConfig.optional()),
        id: core.serialization.string(),
    });

export declare namespace PassageUpdate {
    export interface Raw {
        created_by_id?: string | null;
        last_updated_by_id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        is_deleted?: boolean | null;
        agent_id?: string | null;
        source_id?: string | null;
        file_id?: string | null;
        metadata_?: Record<string, unknown> | null;
        text?: string | null;
        embedding?: number[] | null;
        embedding_config?: EmbeddingConfig.Raw | null;
        id: string;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { EmbeddingConfig } from "./EmbeddingConfig";

export const Source: core.serialization.ObjectSchema<serializers.Source.Raw, Letta.Source> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    description: core.serialization.string().optional(),
    embeddingConfig: core.serialization.property("embedding_config", EmbeddingConfig),
    organizationId: core.serialization.property("organization_id", core.serialization.string().optional()),
    metadata: core.serialization.property(
        "metadata_",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    createdById: core.serialization.property("created_by_id", core.serialization.string().optional()),
    lastUpdatedById: core.serialization.property("last_updated_by_id", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace Source {
    interface Raw {
        id?: string | null;
        name: string;
        description?: string | null;
        embedding_config: EmbeddingConfig.Raw;
        organization_id?: string | null;
        metadata_?: Record<string, unknown> | null;
        created_by_id?: string | null;
        last_updated_by_id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}

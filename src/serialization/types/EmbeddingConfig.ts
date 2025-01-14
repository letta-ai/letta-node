/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { EmbeddingConfigEmbeddingEndpointType } from "./EmbeddingConfigEmbeddingEndpointType";

export const EmbeddingConfig: core.serialization.ObjectSchema<serializers.EmbeddingConfig.Raw, Letta.EmbeddingConfig> =
    core.serialization.object({
        embeddingEndpointType: core.serialization.property(
            "embedding_endpoint_type",
            EmbeddingConfigEmbeddingEndpointType,
        ),
        embeddingEndpoint: core.serialization.property("embedding_endpoint", core.serialization.string().optional()),
        embeddingModel: core.serialization.property("embedding_model", core.serialization.string()),
        embeddingDim: core.serialization.property("embedding_dim", core.serialization.number()),
        embeddingChunkSize: core.serialization.property("embedding_chunk_size", core.serialization.number().optional()),
        handle: core.serialization.string().optional(),
        azureEndpoint: core.serialization.property("azure_endpoint", core.serialization.string().optional()),
        azureVersion: core.serialization.property("azure_version", core.serialization.string().optional()),
        azureDeployment: core.serialization.property("azure_deployment", core.serialization.string().optional()),
    });

export declare namespace EmbeddingConfig {
    export interface Raw {
        embedding_endpoint_type: EmbeddingConfigEmbeddingEndpointType.Raw;
        embedding_endpoint?: string | null;
        embedding_model: string;
        embedding_dim: number;
        embedding_chunk_size?: number | null;
        handle?: string | null;
        azure_endpoint?: string | null;
        azure_version?: string | null;
        azure_deployment?: string | null;
    }
}

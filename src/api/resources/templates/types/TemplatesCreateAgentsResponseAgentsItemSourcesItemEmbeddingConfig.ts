/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../index";

export interface TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfig {
    embeddingEndpointType: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpointType;
    embeddingEndpoint?: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpoint;
    embeddingModel: string;
    embeddingDim: number;
    embeddingChunkSize?: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingChunkSize;
    handle?: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandle;
    azureEndpoint?: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpoint;
    azureVersion?: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigAzureVersion;
    azureDeployment?: Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigAzureDeployment;
}

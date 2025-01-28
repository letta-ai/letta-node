/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../index";

export interface TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfig {
    model: string;
    modelEndpointType: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpointType;
    modelEndpoint?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelEndpoint;
    modelWrapper?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigModelWrapper;
    contextWindow: number;
    putInnerThoughtsInKwargs?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigPutInnerThoughtsInKwargs;
    handle?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigHandle;
    temperature?: Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLlmConfigTemperature;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../index";

export interface AgentsSearchResponseAgentsItemToolsItem {
    id?: string;
    toolType?: Letta.AgentsSearchResponseAgentsItemToolsItemToolType;
    description?: Letta.AgentsSearchResponseAgentsItemToolsItemDescription;
    sourceType?: Letta.AgentsSearchResponseAgentsItemToolsItemSourceType;
    organizationId?: Letta.AgentsSearchResponseAgentsItemToolsItemOrganizationId;
    name?: Letta.AgentsSearchResponseAgentsItemToolsItemName;
    tags?: string[];
    sourceCode?: Letta.AgentsSearchResponseAgentsItemToolsItemSourceCode;
    jsonSchema?: Letta.AgentsSearchResponseAgentsItemToolsItemJsonSchema;
    argsJsonSchema?: Letta.AgentsSearchResponseAgentsItemToolsItemArgsJsonSchema;
    returnCharLimit?: number;
    createdById?: Letta.AgentsSearchResponseAgentsItemToolsItemCreatedById;
    lastUpdatedById?: Letta.AgentsSearchResponseAgentsItemToolsItemLastUpdatedById;
    metadata?: Letta.AgentsSearchResponseAgentsItemToolsItemMetadata;
}

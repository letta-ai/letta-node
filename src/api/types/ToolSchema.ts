/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface ToolSchema {
    argsJsonSchema?: unknown;
    createdAt: string;
    description: string;
    jsonSchema: Letta.ToolJsonSchema;
    name: string;
    returnCharLimit: number;
    sourceCode?: string;
    sourceType: string;
    tags: string[];
    toolType: string;
    updatedAt: string;
    metadata?: Record<string, unknown>;
}

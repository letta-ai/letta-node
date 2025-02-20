/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * App authenticatio scheme.
 */
export interface AppAuthScheme {
    schemeName: string;
    authMode: Letta.AppAuthSchemeAuthMode;
    fields: Letta.AuthSchemeField[];
    proxy?: Record<string, unknown>;
    authorizationUrl?: string;
    tokenUrl?: string;
    defaultScopes?: unknown[];
    tokenResponseMetadata?: unknown[];
    clientId?: string;
    clientSecret?: string;
}

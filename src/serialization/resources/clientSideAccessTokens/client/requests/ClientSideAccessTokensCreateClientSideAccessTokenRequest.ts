/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Letta from "../../../../../api/index";
import * as core from "../../../../../core";
import { ClientSideAccessTokensCreateClientSideAccessTokenRequestPolicyItem } from "../../types/ClientSideAccessTokensCreateClientSideAccessTokenRequestPolicyItem";

export const ClientSideAccessTokensCreateClientSideAccessTokenRequest: core.serialization.Schema<
    serializers.ClientSideAccessTokensCreateClientSideAccessTokenRequest.Raw,
    Letta.ClientSideAccessTokensCreateClientSideAccessTokenRequest
> = core.serialization.object({
    policy: core.serialization.list(ClientSideAccessTokensCreateClientSideAccessTokenRequestPolicyItem),
    hostname: core.serialization.string(),
    expiresAt: core.serialization.property("expires_at", core.serialization.string().optional()),
});

export declare namespace ClientSideAccessTokensCreateClientSideAccessTokenRequest {
    export interface Raw {
        policy: ClientSideAccessTokensCreateClientSideAccessTokenRequestPolicyItem.Raw[];
        hostname: string;
        expires_at?: string | null;
    }
}

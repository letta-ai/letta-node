/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { ClientSideAccessTokensCreateResponsePolicyDataItemAccessItem } from "./ClientSideAccessTokensCreateResponsePolicyDataItemAccessItem";

export const ClientSideAccessTokensCreateResponsePolicyDataItem: core.serialization.ObjectSchema<
    serializers.ClientSideAccessTokensCreateResponsePolicyDataItem.Raw,
    Letta.ClientSideAccessTokensCreateResponsePolicyDataItem
> = core.serialization.object({
    type: core.serialization.stringLiteral("agent"),
    id: core.serialization.string(),
    access: core.serialization.list(ClientSideAccessTokensCreateResponsePolicyDataItemAccessItem),
});

export declare namespace ClientSideAccessTokensCreateResponsePolicyDataItem {
    export interface Raw {
        type: "agent";
        id: string;
        access: ClientSideAccessTokensCreateResponsePolicyDataItemAccessItem.Raw[];
    }
}

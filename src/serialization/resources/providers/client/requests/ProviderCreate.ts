/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Letta from "../../../../../api/index";
import * as core from "../../../../../core";

export const ProviderCreate: core.serialization.Schema<serializers.ProviderCreate.Raw, Letta.ProviderCreate> =
    core.serialization.object({
        name: core.serialization.string(),
        apiKey: core.serialization.property("api_key", core.serialization.string()),
    });

export declare namespace ProviderCreate {
    export interface Raw {
        name: string;
        api_key: string;
    }
}

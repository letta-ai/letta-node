/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const IdentityPropertyValue: core.serialization.Schema<
    serializers.IdentityPropertyValue.Raw,
    Letta.IdentityPropertyValue
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.number(),
    core.serialization.number(),
    core.serialization.boolean(),
    core.serialization.record(core.serialization.string(), core.serialization.unknown()),
]);

export declare namespace IdentityPropertyValue {
    export type Raw = string | number | number | boolean | Record<string, unknown>;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const WebSearchOptionsUserLocationApproximate: core.serialization.ObjectSchema<
    serializers.WebSearchOptionsUserLocationApproximate.Raw,
    Letta.WebSearchOptionsUserLocationApproximate
> = core.serialization.object({
    city: core.serialization.string().optional(),
    country: core.serialization.string().optional(),
    region: core.serialization.string().optional(),
    timezone: core.serialization.string().optional(),
});

export declare namespace WebSearchOptionsUserLocationApproximate {
    export interface Raw {
        city?: string | null;
        country?: string | null;
        region?: string | null;
        timezone?: string | null;
    }
}

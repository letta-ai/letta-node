/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const AgentsSearchResponseAgentsItemOrganizationIdItem: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemOrganizationIdItem.Raw,
    Letta.AgentsSearchResponseAgentsItemOrganizationIdItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace AgentsSearchResponseAgentsItemOrganizationIdItem {
    export type Raw = string | (string | null | undefined);
}

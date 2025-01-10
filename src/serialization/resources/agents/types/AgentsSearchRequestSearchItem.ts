/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchRequestSearchItemVersion } from "./AgentsSearchRequestSearchItemVersion";
import { AgentsSearchRequestSearchItemName } from "./AgentsSearchRequestSearchItemName";
import { AgentsSearchRequestSearchItemOrderBy } from "./AgentsSearchRequestSearchItemOrderBy";

export const AgentsSearchRequestSearchItem: core.serialization.Schema<
    serializers.AgentsSearchRequestSearchItem.Raw,
    Letta.AgentsSearchRequestSearchItem
> = core.serialization
    .union("field", {
        version: AgentsSearchRequestSearchItemVersion,
        name: AgentsSearchRequestSearchItemName,
        order_by: AgentsSearchRequestSearchItemOrderBy,
    })
    .transform<Letta.AgentsSearchRequestSearchItem>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AgentsSearchRequestSearchItem {
    type Raw =
        | AgentsSearchRequestSearchItem.Version
        | AgentsSearchRequestSearchItem.Name
        | AgentsSearchRequestSearchItem.OrderBy;

    interface Version extends AgentsSearchRequestSearchItemVersion.Raw {
        field: "version";
    }

    interface Name extends AgentsSearchRequestSearchItemName.Raw {
        field: "name";
    }

    interface OrderBy extends AgentsSearchRequestSearchItemOrderBy.Raw {
        field: "order_by";
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchRequestSearchItemZero } from "./AgentsSearchRequestSearchItemZero";
import { AgentsSearchRequestSearchItemOne } from "./AgentsSearchRequestSearchItemOne";
import { AgentsSearchRequestSearchItemField } from "./AgentsSearchRequestSearchItemField";

export const AgentsSearchRequestSearchItem: core.serialization.Schema<
    serializers.AgentsSearchRequestSearchItem.Raw,
    Letta.AgentsSearchRequestSearchItem
> = core.serialization.undiscriminatedUnion([
    AgentsSearchRequestSearchItemZero,
    AgentsSearchRequestSearchItemOne,
    AgentsSearchRequestSearchItemField,
]);

export declare namespace AgentsSearchRequestSearchItem {
    export type Raw =
        | AgentsSearchRequestSearchItemZero.Raw
        | AgentsSearchRequestSearchItemOne.Raw
        | AgentsSearchRequestSearchItemField.Raw;
}

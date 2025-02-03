/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ConditionalToolRule } from "./ConditionalToolRule";
import { ChildToolRule } from "./ChildToolRule";
import { TerminalToolRule } from "./TerminalToolRule";
import { InitToolRule } from "./InitToolRule";

export const AgentStateToolRulesItem: core.serialization.Schema<
    serializers.AgentStateToolRulesItem.Raw,
    Letta.AgentStateToolRulesItem
> = core.serialization.undiscriminatedUnion([ConditionalToolRule, ChildToolRule, TerminalToolRule, InitToolRule]);

export declare namespace AgentStateToolRulesItem {
    export type Raw = ConditionalToolRule.Raw | ChildToolRule.Raw | TerminalToolRule.Raw | InitToolRule.Raw;
}

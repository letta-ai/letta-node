/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export type AgentStateToolRulesItem =
    | Letta.ConditionalToolRule
    | Letta.ChildToolRule
    | Letta.ContinueToolRule
    | Letta.TerminalToolRule
    | Letta.MaxCountPerStepToolRule
    | Letta.ParentToolRule
    | Letta.InitToolRule;

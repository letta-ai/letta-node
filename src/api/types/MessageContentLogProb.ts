/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface MessageContentLogProb {
    token: string;
    logprob: number;
    bytes?: number[];
    top_logprobs?: Letta.LogProbToken[];
}

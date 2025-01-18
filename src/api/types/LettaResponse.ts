/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Response object from an agent interaction, consisting of the new messages generated by the agent and usage statistics.
 * The type of the returned messages can be either `Message` or `LettaMessage`, depending on what was specified in the request.
 *
 * Attributes:
 *     messages (List[Union[Message, LettaMessage]]): The messages returned by the agent.
 *     usage (LettaUsageStatistics): The usage statistics
 */
export interface LettaResponse {
    /** The messages returned by the agent. */
    messages: Letta.LettaMessageUnion[];
    /** The usage statistics of the agent. */
    usage: Letta.LettaUsageStatistics;
}

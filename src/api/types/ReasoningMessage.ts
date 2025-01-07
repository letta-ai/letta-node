/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Representation of an agent's internal reasoning.
 *
 * Attributes:
 *     reasoning (str): The internal reasoning of the agent
 *     id (str): The ID of the message
 *     date (datetime): The date the message was created in ISO format
 */
export interface ReasoningMessage {
    id: string;
    date: Date;
    reasoning: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface MessagesListRequest {
    /**
     * Message after which to retrieve the returned messages.
     */
    after?: string;
    /**
     * Message before which to retrieve the returned messages.
     */
    before?: string;
    /**
     * Maximum number of messages to retrieve.
     */
    limit?: number;
    /**
     * Whether to use assistant messages
     */
    useAssistantMessage?: boolean;
    /**
     * The name of the designated message tool.
     */
    assistantMessageToolName?: string;
    /**
     * The name of the message argument.
     */
    assistantMessageToolKwarg?: string;
}

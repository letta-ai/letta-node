/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A message generated by the system. Never streamed back on a response, only used for cursor pagination.
 *
 * Args:
 *     id (str): The ID of the message
 *     date (datetime): The date the message was created in ISO format
 *     name (Optional[str]): The name of the sender of the message
 *     content (str): The message content sent by the system
 */
export interface SystemMessage {
    id: string;
    date: Date;
    name?: string;
    messageType: "system_message";
    otid?: string;
    senderId?: string;
    /** The message content sent by the system */
    content: string;
}

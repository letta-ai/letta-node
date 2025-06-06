/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Request to create a message
 */
export interface MessageCreate {
    /** The role of the participant. */
    role: Letta.MessageCreateRole;
    /** The content of the message. */
    content: Letta.MessageCreateContent;
    /** The name of the participant. */
    name?: string;
    /** The offline threading id associated with this message */
    otid?: string;
    /** The id of the sender of the message, can be an identity id or agent id */
    senderId?: string;
    /** The id of the LLMBatchItem that this message is associated with */
    batchItemId?: string;
    /** The multi-agent group that the message was sent in */
    groupId?: string;
}

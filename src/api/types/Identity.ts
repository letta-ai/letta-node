/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface Identity {
    /** The human-friendly ID of the Identity */
    id?: string;
    /** External, user-generated identifier key of the identity. */
    identifierKey: string;
    /** The name of the identity. */
    name: string;
    /** The type of the identity. */
    identityType: Letta.IdentityType;
    /** The project id of the identity, if applicable. */
    projectId?: string;
    /** The agents associated with the identity. */
    agents: Letta.AgentState[];
}

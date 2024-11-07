// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MessagesAPI from '../messages';

export class Messages extends APIResource {
  /**
   * Retrieve the messages in the context of a specific agent.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<MessageRetrieveResponse> {
    return this._client.get(`/v1/agents/${agentId}/memory/messages`, options);
  }
}

export type MessageRetrieveResponse = Array<MessagesAPI.Messageoutput>;

export declare namespace Messages {
  export { type MessageRetrieveResponse as MessageRetrieveResponse };
}

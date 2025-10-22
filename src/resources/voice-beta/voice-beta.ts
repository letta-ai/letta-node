// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatAPI from './chat';
import { Chat, ChatCreateCompletionParams, ChatCreateCompletionResponse } from './chat';

export class VoiceBeta extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
}

VoiceBeta.Chat = Chat;

export declare namespace VoiceBeta {
  export {
    Chat as Chat,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}

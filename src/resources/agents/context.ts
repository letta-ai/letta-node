// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MessagesAPI from './messages';

export class Context extends APIResource {
  /**
   * Retrieve the context window of a specific agent.
   */
  retrieve(
    agentId: string,
    params?: ContextRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Contextwindowoverview>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Contextwindowoverview>;
  retrieve(
    agentId: string,
    params: ContextRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Contextwindowoverview> {
    if (isRequestOptions(params)) {
      return this.retrieve(agentId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/agents/${agentId}/context`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

/**
 * Overview of the context window, including the number of messages and tokens.
 */
export interface Contextwindowoverview {
  /**
   * The current number of tokens in the context window.
   */
  context_window_size_current: number;

  /**
   * The maximum amount of tokens the context window can hold.
   */
  context_window_size_max: number;

  /**
   * The content of the core memory.
   */
  core_memory: string;

  /**
   * The content of the functions definitions.
   */
  functions_definitions: Array<Contextwindowoverview.FunctionsDefinition> | null;

  /**
   * The messages in the context window.
   */
  messages: Array<MessagesAPI.Messageoutput>;

  /**
   * The number of messages in the archival memory.
   */
  num_archival_memory: number;

  /**
   * The number of messages in the context window.
   */
  num_messages: number;

  /**
   * The number of messages in the recall memory.
   */
  num_recall_memory: number;

  /**
   * The number of tokens in the core memory.
   */
  num_tokens_core_memory: number;

  /**
   * The number of tokens in the external memory summary (archival + recall
   * metadata).
   */
  num_tokens_external_memory_summary: number;

  /**
   * The number of tokens in the functions definitions.
   */
  num_tokens_functions_definitions: number;

  /**
   * The number of tokens in the messages list.
   */
  num_tokens_messages: number;

  /**
   * The number of tokens in the summary memory.
   */
  num_tokens_summary_memory: number;

  /**
   * The number of tokens in the system prompt.
   */
  num_tokens_system: number;

  /**
   * The content of the system prompt.
   */
  system_prompt: string;

  /**
   * The content of the summary memory.
   */
  summary_memory?: string | null;
}

export namespace Contextwindowoverview {
  export interface FunctionsDefinition {
    function: FunctionsDefinition.Function;

    type?: 'function';
  }

  export namespace FunctionsDefinition {
    export interface Function {
      name: string;

      description?: string | null;

      parameters?: unknown | null;
    }
  }
}

export interface ContextRetrieveParams {
  user_id?: string;
}

export declare namespace Context {
  export {
    type Contextwindowoverview as Contextwindowoverview,
    type ContextRetrieveParams as ContextRetrieveParams,
  };
}

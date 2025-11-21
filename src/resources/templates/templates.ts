// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { AgentCreateParams, AgentCreateResponse, Agents } from './agents';

export class Templates extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
}

Templates.Agents = Agents;

export declare namespace Templates {
  export {
    Agents as Agents,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentCreateParams as AgentCreateParams,
  };
}

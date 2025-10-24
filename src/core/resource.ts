// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Letta } from '../client';

export abstract class APIResource {
  protected _client: Letta;

  constructor(client: Letta) {
    this._client = client;
  }
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LettaSDK } from '../client';

export abstract class APIResource {
  protected _client: LettaSDK;

  constructor(client: LettaSDK) {
    this._client = client;
  }
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource properties', () => {
  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.identities.properties.upsert(
      'identity-123e4567-e89b-42d3-8456-426614174000',
      { body: [{ key: 'key', type: 'string', value: 'string' }] },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.identities.properties.upsert(
      'identity-123e4567-e89b-42d3-8456-426614174000',
      { body: [{ key: 'key', type: 'string', value: 'string' }] },
    );
  });
});

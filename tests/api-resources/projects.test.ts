// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from 'letta-sdk';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource projects', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.list(
        { limit: 'limit', name: 'name', offset: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });
});

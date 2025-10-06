// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from 'letta-sdk';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource archives', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.archives.update({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.archives.update({ name: 'name', description: 'description' });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.archives.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.archives.retrieve(
        { after: 'after', agent_id: 'agent_id', before: 'before', limit: 0, name: 'name', order: 'asc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });
});

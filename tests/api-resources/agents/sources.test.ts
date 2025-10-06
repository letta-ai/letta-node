// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from 'letta-sdk';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sources', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.sources.list('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.agents.sources.attach('source_id', { agent_id: 'agent_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('attach: required and optional params', async () => {
    const response = await client.agents.sources.attach('source_id', { agent_id: 'agent_id' });
  });

  // Prism tests are disabled
  test.skip('detach: only required params', async () => {
    const responsePromise = client.agents.sources.detach('source_id', { agent_id: 'agent_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('detach: required and optional params', async () => {
    const response = await client.agents.sources.detach('source_id', { agent_id: 'agent_id' });
  });
});

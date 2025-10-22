// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource folders', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.folders.list('agent-123e4567-e89b-42d3-8456-426614174000');
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
      client.agents.folders.list(
        'agent-123e4567-e89b-42d3-8456-426614174000',
        { after: 'after', before: 'before', limit: 0, order: 'asc', order_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.agents.folders.attach('source-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
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
    const response = await client.agents.folders.attach('source-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('detach: only required params', async () => {
    const responsePromise = client.agents.folders.detach('source-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
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
    const response = await client.agents.folders.detach('source-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });
});

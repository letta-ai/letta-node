// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource archives', () => {
  // Mock server tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.agents.archives.attach('archive_id', {
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

  // Mock server tests are disabled
  test.skip('attach: required and optional params', async () => {
    const response = await client.agents.archives.attach('archive_id', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Mock server tests are disabled
  test.skip('detach: only required params', async () => {
    const responsePromise = client.agents.archives.detach('archive_id', {
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

  // Mock server tests are disabled
  test.skip('detach: required and optional params', async () => {
    const response = await client.agents.archives.detach('archive_id', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });
});

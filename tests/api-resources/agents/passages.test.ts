// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource passages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.passages.create('agent-123e4567-e89b-42d3-8456-426614174000', {
      text: 'text',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.agents.passages.create('agent-123e4567-e89b-42d3-8456-426614174000', {
      text: 'text',
      created_at: '2019-12-27T18:11:19.117Z',
      tags: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.passages.list('agent-123e4567-e89b-42d3-8456-426614174000');
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
      client.agents.passages.list(
        'agent-123e4567-e89b-42d3-8456-426614174000',
        {
          after: 'after',
          ascending: true,
          before: 'before',
          limit: 0,
          search: 'search',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agents.passages.delete('memory_id', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.agents.passages.delete('memory_id', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.agents.passages.search('agent-123e4567-e89b-42d3-8456-426614174000', {
      query: 'query',
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
  test.skip('search: required and optional params', async () => {
    const response = await client.agents.passages.search('agent-123e4567-e89b-42d3-8456-426614174000', {
      query: 'query',
      end_datetime: '2019-12-27T18:11:19.117Z',
      start_datetime: '2019-12-27T18:11:19.117Z',
      tag_match_mode: 'any',
      tags: ['string', 'string'],
      top_k: 0,
    });
  });
});

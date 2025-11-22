// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource passages', () => {
  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.passages.search({ query: 'query' });
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
    const response = await client.passages.search({
      query: 'query',
      agent_id: 'agent_id',
      archive_id: 'archive_id',
      end_date: '2019-12-27T18:11:19.117Z',
      limit: 1,
      start_date: '2019-12-27T18:11:19.117Z',
      tag_match_mode: 'any',
      tags: ['string'],
    });
  });
});

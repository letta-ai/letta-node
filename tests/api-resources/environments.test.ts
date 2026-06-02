// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environments', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.environments.retrieve('deviceId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.environments.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.environments.list(
        {
          after: 'after',
          limit: 'limit',
          onlineOnly: 'onlineOnly',
          source: 'local',
          userId: 'userId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('sendMessage: only required params', async () => {
    const responsePromise = client.environments.sendMessage('connectionId', {
      messages: [
        {
          client_message_id: 'client_message_id',
          content: 'string',
          role: 'user',
        },
      ],
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
  test.skip('sendMessage: required and optional params', async () => {
    const response = await client.environments.sendMessage('connectionId', {
      messages: [
        {
          client_message_id: 'client_message_id',
          content: 'string',
          role: 'user',
          otid: 'otid',
        },
      ],
      agentId: 'agentId',
      conversationId: 'conversationId',
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedule', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.agents.schedule.create('agent_id', {
      messages: [{ content: [{ text: 'text' }], role: 'user' }],
      schedule: { scheduled_at: 0 },
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
    const response = await client.agents.schedule.create('agent_id', {
      messages: [
        {
          content: [
            {
              text: 'text',
              signature: 'signature',
              type: 'text',
            },
          ],
          role: 'user',
          name: 'name',
          otid: 'otid',
          sender_id: 'sender_id',
          type: 'message',
        },
      ],
      schedule: { scheduled_at: 0, type: 'one-time' },
      callback_url: 'https://example.com',
      include_return_message_types: ['system_message'],
      max_steps: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.agents.schedule.retrieve('scheduled_message_id', { agent_id: 'agent_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.agents.schedule.retrieve('scheduled_message_id', { agent_id: 'agent_id' });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.schedule.list('agent_id');
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
      client.agents.schedule.list(
        'agent_id',
        { after: 'after', limit: 'limit' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.agents.schedule.delete('scheduled_message_id', { agent_id: 'agent_id' });
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
    const response = await client.agents.schedule.delete('scheduled_message_id', { agent_id: 'agent_id' });
  });
});

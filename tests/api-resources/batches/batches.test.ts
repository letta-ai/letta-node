// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource batches', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.batches.create({ requests: [{ agent_id: 'agent_id' }] });
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
    const response = await client.batches.create({
      requests: [
        {
          agent_id: 'agent_id',
          assistant_message_tool_kwarg: 'assistant_message_tool_kwarg',
          assistant_message_tool_name: 'assistant_message_tool_name',
          enable_thinking: 'enable_thinking',
          include_return_message_types: ['system_message'],
          input: 'string',
          max_steps: 0,
          messages: [
            {
              content: [{ text: 'text', signature: 'signature', type: 'text' }],
              role: 'user',
              batch_item_id: 'batch_item_id',
              group_id: 'group_id',
              name: 'name',
              otid: 'otid',
              sender_id: 'sender_id',
              type: 'message',
            },
          ],
          use_assistant_message: true,
        },
      ],
      callback_url: 'https://example.com',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.batches.retrieve('batch_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.batches.list();
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
      client.batches.list(
        { after: 'after', before: 'before', limit: 0, order: 'asc', order_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.batches.cancel('batch_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

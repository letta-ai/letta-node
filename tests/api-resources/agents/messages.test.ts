// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.messages.update('message-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
      content: 'content',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.agents.messages.update('message-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
      content: 'content',
      message_type: 'system_message',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.messages.list('agent-123e4567-e89b-42d3-8456-426614174000');
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
      client.agents.messages.list(
        'agent-123e4567-e89b-42d3-8456-426614174000',
        {
          after: 'after',
          assistant_message_tool_kwarg: 'assistant_message_tool_kwarg',
          assistant_message_tool_name: 'assistant_message_tool_name',
          before: 'before',
          group_id: 'group_id',
          include_err: true,
          limit: 0,
          order: 'asc',
          order_by: 'created_at',
          use_assistant_message: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.agents.messages.cancel('agent-123e4567-e89b-42d3-8456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.messages.cancel(
        'agent-123e4567-e89b-42d3-8456-426614174000',
        { run_ids: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('reset', async () => {
    const responsePromise = client.agents.messages.reset('agent-123e4567-e89b-42d3-8456-426614174000');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('reset: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.messages.reset(
        'agent-123e4567-e89b-42d3-8456-426614174000',
        { add_default_initial_messages: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.agents.messages.send('agent-123e4567-e89b-42d3-8456-426614174000', {
      messages: [{ content: [{ text: 'text', type: 'text' }], role: 'user' }],
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
  test.skip('send: required and optional params', async () => {
    const response = await client.agents.messages.send('agent-123e4567-e89b-42d3-8456-426614174000', {
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
      assistant_message_tool_kwarg: 'assistant_message_tool_kwarg',
      assistant_message_tool_name: 'assistant_message_tool_name',
      enable_thinking: 'enable_thinking',
      include_return_message_types: ['system_message'],
      max_steps: 0,
      use_assistant_message: true,
    });
  });

  // Prism tests are disabled
  test.skip('sendAsync: only required params', async () => {
    const responsePromise = client.agents.messages.sendAsync('agent-123e4567-e89b-42d3-8456-426614174000', {
      messages: [{ content: [{ text: 'text', type: 'text' }], role: 'user' }],
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
  test.skip('sendAsync: required and optional params', async () => {
    const response = await client.agents.messages.sendAsync('agent-123e4567-e89b-42d3-8456-426614174000', {
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
      assistant_message_tool_kwarg: 'assistant_message_tool_kwarg',
      assistant_message_tool_name: 'assistant_message_tool_name',
      callback_url: 'callback_url',
      enable_thinking: 'enable_thinking',
      include_return_message_types: ['system_message'],
      max_steps: 0,
      use_assistant_message: true,
    });
  });

  // Prism tests are disabled
  test.skip('stream: only required params', async () => {
    const responsePromise = client.agents.messages.stream('agent-123e4567-e89b-42d3-8456-426614174000', {
      messages: [{ content: [{ text: 'text', type: 'text' }], role: 'user' }],
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
  test.skip('stream: required and optional params', async () => {
    const response = await client.agents.messages.stream('agent-123e4567-e89b-42d3-8456-426614174000', {
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
      assistant_message_tool_kwarg: 'assistant_message_tool_kwarg',
      assistant_message_tool_name: 'assistant_message_tool_name',
      background: true,
      enable_thinking: 'enable_thinking',
      include_pings: true,
      include_return_message_types: ['system_message'],
      max_steps: 0,
      stream_tokens: true,
      use_assistant_message: true,
    });
  });

  // Prism tests are disabled
  test.skip('summarize: only required params', async () => {
    const responsePromise = client.agents.messages.summarize('agent-123e4567-e89b-42d3-8456-426614174000', {
      max_message_length: 0,
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
  test.skip('summarize: required and optional params', async () => {
    const response = await client.agents.messages.summarize('agent-123e4567-e89b-42d3-8456-426614174000', {
      max_message_length: 0,
    });
  });
});

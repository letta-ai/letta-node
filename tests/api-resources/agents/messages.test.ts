// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from 'letta';
import { Response } from 'node-fetch';

const client = new Letta({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.messages.create('agent_id', {
      messages: [
        { role: 'user', text: 'text' },
        { role: 'user', text: 'text' },
        { role: 'user', text: 'text' },
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

  test('create: required and optional params', async () => {
    const response = await client.agents.messages.create('agent_id', {
      messages: [
        { role: 'user', text: 'text', name: 'name' },
        { role: 'user', text: 'text', name: 'name' },
        { role: 'user', text: 'text', name: 'name' },
      ],
      assistant_message_function_kwarg: 'assistant_message_function_kwarg',
      assistant_message_function_name: 'assistant_message_function_name',
      return_message_object: true,
      run_async: true,
      stream_steps: true,
      stream_tokens: true,
      use_assistant_message: true,
      user_id: 'user_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.agents.messages.retrieve('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.messages.retrieve('agent_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.messages.retrieve(
        'agent_id',
        {
          assistant_message_function_kwarg: 'assistant_message_function_kwarg',
          assistant_message_function_name: 'assistant_message_function_name',
          before: 'before',
          limit: 0,
          msg_object: true,
          use_assistant_message: true,
          user_id: 'user_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.agents.messages.update('agent_id', 'message_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.agents.messages.update('agent_id', 'message_id', {
      id: 'id',
      name: 'name',
      role: 'assistant',
      text: 'text',
      tool_call_id: 'tool_call_id',
      tool_calls: [
        { id: 'id', function: { arguments: 'arguments', name: 'name' }, type: 'type' },
        { id: 'id', function: { arguments: 'arguments', name: 'name' }, type: 'type' },
        { id: 'id', function: { arguments: 'arguments', name: 'name' }, type: 'type' },
      ],
    });
  });
});

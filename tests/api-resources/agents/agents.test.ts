// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta';
import { Response } from 'node-fetch';

const client = new Letta({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource agents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.create({ memory_blocks: [{ label: 'label', value: 'value' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.create({
      memory_blocks: [
        {
          label: 'label',
          value: 'value',
          description: 'description',
          is_template: true,
          limit: 0,
          metadata_: {},
          name: 'name',
        },
      ],
      agent_type: 'memgpt_agent',
      description: 'description',
      embedding_config: {
        embedding_dim: 0,
        embedding_endpoint_type: 'embedding_endpoint_type',
        embedding_model: 'embedding_model',
        azure_deployment: 'azure_deployment',
        azure_endpoint: 'azure_endpoint',
        azure_version: 'azure_version',
        embedding_chunk_size: 0,
        embedding_endpoint: 'embedding_endpoint',
      },
      initial_message_sequence: [{ role: 'user', text: 'text', name: 'name' }],
      llm_config: {
        context_window: 0,
        model: 'model',
        model_endpoint_type: 'openai',
        model_endpoint: 'model_endpoint',
        model_wrapper: 'model_wrapper',
        put_inner_thoughts_in_kwargs: true,
      },
      message_ids: ['string'],
      metadata_: {},
      name: 'name',
      system: 'system',
      tags: ['string'],
      tool_rules: [{ children: ['string'], tool_name: 'tool_name', type: 'InitToolRule' }],
      tools: ['string'],
      user_id: 'user_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.agents.retrieve('agent_id');
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
    await expect(client.agents.retrieve('agent_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Letta.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.agents.update('agent_id', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.agents.update('agent_id', {
      id: 'id',
      description: 'description',
      embedding_config: {
        embedding_dim: 0,
        embedding_endpoint_type: 'embedding_endpoint_type',
        embedding_model: 'embedding_model',
        azure_deployment: 'azure_deployment',
        azure_endpoint: 'azure_endpoint',
        azure_version: 'azure_version',
        embedding_chunk_size: 0,
        embedding_endpoint: 'embedding_endpoint',
      },
      llm_config: {
        context_window: 0,
        model: 'model',
        model_endpoint_type: 'openai',
        model_endpoint: 'model_endpoint',
        model_wrapper: 'model_wrapper',
        put_inner_thoughts_in_kwargs: true,
      },
      message_ids: ['string'],
      metadata_: {},
      name: 'name',
      system: 'system',
      tags: ['string'],
      tool_names: ['string'],
      user_id: 'user_id',
    });
  });

  test('list', async () => {
    const responsePromise = client.agents.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.agents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Letta.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.list({ name: 'name', tags: ['string'] }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.agents.delete('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.agents.delete('agent_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Letta.NotFoundError,
    );
  });

  test('migrate: only required params', async () => {
    const responsePromise = client.agents.migrate('agent_id', {
      preserve_core_memories: true,
      to_template: 'to_template',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('migrate: required and optional params', async () => {
    const response = await client.agents.migrate('agent_id', {
      preserve_core_memories: true,
      to_template: 'to_template',
      variables: { foo: 'string' },
    });
  });
});

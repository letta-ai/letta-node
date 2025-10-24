// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blocks', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.agents.blocks.retrieve('block_label', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.agents.blocks.retrieve('block_label', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.blocks.list('agent-123e4567-e89b-42d3-8456-426614174000');
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
      client.agents.blocks.list(
        'agent-123e4567-e89b-42d3-8456-426614174000',
        { after: 'after', before: 'before', limit: 0, order: 'asc', order_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.agents.blocks.attach('block-123e4567-e89b-42d3-8456-426614174000', {
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
    const response = await client.agents.blocks.attach('block-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('detach: only required params', async () => {
    const responsePromise = client.agents.blocks.detach('block-123e4567-e89b-42d3-8456-426614174000', {
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
    const response = await client.agents.blocks.detach('block-123e4567-e89b-42d3-8456-426614174000', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('modify: only required params', async () => {
    const responsePromise = client.agents.blocks.modify('block_label', {
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
  test.skip('modify: required and optional params', async () => {
    const response = await client.agents.blocks.modify('block_label', {
      agent_id: 'agent-123e4567-e89b-42d3-8456-426614174000',
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      description: 'description',
      entity_id: 'entity_id',
      hidden: true,
      is_template: true,
      label: 'label',
      limit: 0,
      metadata: { foo: 'bar' },
      name: 'name',
      preserve_on_migration: true,
      project_id: 'project_id',
      read_only: true,
      value: 'value',
    });
  });
});

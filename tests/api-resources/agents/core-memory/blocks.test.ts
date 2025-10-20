// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from '@letta-ai/letta-client';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource blocks', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.agents.coreMemory.blocks.retrieve('block_label', { agent_id: 'agent_id' });
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
    const response = await client.agents.coreMemory.blocks.retrieve('block_label', { agent_id: 'agent_id' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.agents.coreMemory.blocks.update('block_label', { agent_id: 'agent_id' });
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
    const response = await client.agents.coreMemory.blocks.update('block_label', {
      agent_id: 'agent_id',
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

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.agents.coreMemory.blocks.list('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('attach: only required params', async () => {
    const responsePromise = client.agents.coreMemory.blocks.attach('block_id', { agent_id: 'agent_id' });
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
    const response = await client.agents.coreMemory.blocks.attach('block_id', { agent_id: 'agent_id' });
  });

  // Prism tests are disabled
  test.skip('detach: only required params', async () => {
    const responsePromise = client.agents.coreMemory.blocks.detach('block_id', { agent_id: 'agent_id' });
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
    const response = await client.agents.coreMemory.blocks.detach('block_id', { agent_id: 'agent_id' });
  });
});

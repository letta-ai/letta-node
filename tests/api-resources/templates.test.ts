// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from '@letta-ai/letta-client';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.templates.create('project', { agent_id: 'agent_id', type: 'agent' });
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
    const response = await client.templates.create('project', {
      agent_id: 'agent_id',
      type: 'agent',
      name: 'name',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.templates.list();
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
      client.templates.list(
        {
          exact: 'exact',
          limit: 'limit',
          name: 'name',
          offset: 'string',
          project_id: 'project_id',
          project_slug: 'project_slug',
          search: 'search',
          sort_by: 'updated_at',
          template_id: 'template_id',
          version: 'version',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.templates.delete('template_name', { project: 'project' });
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
    const response = await client.templates.delete('template_name', { project: 'project' });
  });

  // Prism tests are disabled
  test.skip('createAgents: only required params', async () => {
    const responsePromise = client.templates.createAgents('template_version', { project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createAgents: required and optional params', async () => {
    const response = await client.templates.createAgents('template_version', {
      project: 'project',
      agent_name: 'agent_name',
      identity_ids: ['string'],
      initial_message_sequence: [
        {
          content: 'content',
          role: 'user',
          batch_item_id: 'batch_item_id',
          group_id: 'group_id',
          name: 'name',
          otid: 'otid',
          sender_id: 'sender_id',
        },
      ],
      memory_variables: { foo: 'string' },
      tags: ['-_'],
      tool_variables: { foo: 'string' },
    });
  });

  // Prism tests are disabled
  test.skip('fork: only required params', async () => {
    const responsePromise = client.templates.fork('template_version', { project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('fork: required and optional params', async () => {
    const response = await client.templates.fork('template_version', { project: 'project', name: 'name' });
  });

  // Prism tests are disabled
  test.skip('getSnapshot: only required params', async () => {
    const responsePromise = client.templates.getSnapshot('template_version', { project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getSnapshot: required and optional params', async () => {
    const response = await client.templates.getSnapshot('template_version', { project: 'project' });
  });

  // Prism tests are disabled
  test.skip('listVersions: only required params', async () => {
    const responsePromise = client.templates.listVersions('name', { project_slug: 'project_slug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVersions: required and optional params', async () => {
    const response = await client.templates.listVersions('name', {
      project_slug: 'project_slug',
      limit: 'limit',
      offset: 'string',
    });
  });

  // Prism tests are disabled
  test.skip('rename: only required params', async () => {
    const responsePromise = client.templates.rename('template_name', {
      project: 'project',
      new_name: 'new_name',
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
  test.skip('rename: required and optional params', async () => {
    const response = await client.templates.rename('template_name', {
      project: 'project',
      new_name: 'new_name',
    });
  });

  // Prism tests are disabled
  test.skip('saveVersion: only required params', async () => {
    const responsePromise = client.templates.saveVersion('template_name', { project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('saveVersion: required and optional params', async () => {
    const response = await client.templates.saveVersion('template_name', {
      project: 'project',
      message: 'message',
      migrate_agents: true,
      preserve_core_memories_on_migration: true,
      preserve_environment_variables_on_migration: true,
    });
  });

  // Prism tests are disabled
  test.skip('updateDescription: only required params', async () => {
    const responsePromise = client.templates.updateDescription('template_name', { project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateDescription: required and optional params', async () => {
    const response = await client.templates.updateDescription('template_name', {
      project: 'project',
      description: 'description',
    });
  });
});

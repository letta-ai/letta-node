// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mcpServers', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.mcpServers.create({
      config: {
        args: ['string'],
        command: 'command',
        mcp_server_type: 'stdio',
      },
      server_name: 'server_name',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.mcpServers.create({
      config: {
        args: ['string'],
        command: 'command',
        env: { foo: 'string' },
        mcp_server_type: 'stdio',
      },
      server_name: 'server_name',
      'x-billing-cost-source': 'x-billing-cost-source',
      'x-billing-customer-id': 'x-billing-customer-id',
      'x-billing-plan-type': 'x-billing-plan-type',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.mcpServers.retrieve('mcp_server_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.mcpServers.retrieve(
        'mcp_server_id',
        {
          'x-billing-cost-source': 'x-billing-cost-source',
          'x-billing-customer-id': 'x-billing-customer-id',
          'x-billing-plan-type': 'x-billing-plan-type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.mcpServers.update('mcp_server_id', {
      config: {
        args: ['string'],
        command: 'command',
        mcp_server_type: 'stdio',
      },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.mcpServers.update('mcp_server_id', {
      config: {
        args: ['string'],
        command: 'command',
        env: { foo: 'string' },
        mcp_server_type: 'stdio',
      },
      server_name: 'server_name',
      'x-billing-cost-source': 'x-billing-cost-source',
      'x-billing-customer-id': 'x-billing-customer-id',
      'x-billing-plan-type': 'x-billing-plan-type',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.mcpServers.list();
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
      client.mcpServers.list(
        {
          'x-billing-cost-source': 'x-billing-cost-source',
          'x-billing-customer-id': 'x-billing-customer-id',
          'x-billing-plan-type': 'x-billing-plan-type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.mcpServers.delete('mcp_server_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.mcpServers.delete(
        'mcp_server_id',
        {
          'x-billing-cost-source': 'x-billing-cost-source',
          'x-billing-customer-id': 'x-billing-customer-id',
          'x-billing-plan-type': 'x-billing-plan-type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('refresh', async () => {
    const responsePromise = client.mcpServers.refresh('mcp_server_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('refresh: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.mcpServers.refresh(
        'mcp_server_id',
        {
          agent_id: 'agent_id',
          'x-billing-cost-source': 'x-billing-cost-source',
          'x-billing-customer-id': 'x-billing-customer-id',
          'x-billing-plan-type': 'x-billing-plan-type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });
});

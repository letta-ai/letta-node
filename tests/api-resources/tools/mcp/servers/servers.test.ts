// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from '@letta-ai/letta-client';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource servers', () => {
  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.tools.mcp.servers.update('mcp_server_name', {});
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
    const responsePromise = client.tools.mcp.servers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.tools.mcp.servers.delete('mcp_server_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.tools.mcp.servers.add({
      args: ['string'],
      command: 'command',
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

  // Prism tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.tools.mcp.servers.add({
      args: ['string'],
      command: 'command',
      server_name: 'server_name',
      env: { foo: 'string' },
      type: 'sse',
    });
  });

  // Prism tests are disabled
  test.skip('connect: only required params', async () => {
    const responsePromise = client.tools.mcp.servers.connect({
      args: ['string'],
      command: 'command',
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

  // Prism tests are disabled
  test.skip('connect: required and optional params', async () => {
    const response = await client.tools.mcp.servers.connect({
      args: ['string'],
      command: 'command',
      server_name: 'server_name',
      env: { foo: 'string' },
      type: 'sse',
    });
  });

  // Prism tests are disabled
  test.skip('registerTool: only required params', async () => {
    const responsePromise = client.tools.mcp.servers.registerTool('mcp_tool_name', {
      mcp_server_name: 'mcp_server_name',
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
  test.skip('registerTool: required and optional params', async () => {
    const response = await client.tools.mcp.servers.registerTool('mcp_tool_name', {
      mcp_server_name: 'mcp_server_name',
    });
  });

  // Prism tests are disabled
  test.skip('resync', async () => {
    const responsePromise = client.tools.mcp.servers.resync('mcp_server_name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resync: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tools.mcp.servers.resync(
        'mcp_server_name',
        { agent_id: 'agent_id' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('test: only required params', async () => {
    const responsePromise = client.tools.mcp.servers.test({
      args: ['string'],
      command: 'command',
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

  // Prism tests are disabled
  test.skip('test: required and optional params', async () => {
    const response = await client.tools.mcp.servers.test({
      args: ['string'],
      command: 'command',
      server_name: 'server_name',
      env: { foo: 'string' },
      type: 'sse',
    });
  });
});

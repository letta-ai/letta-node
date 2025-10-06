// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from 'letta-sdk';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource identities', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.identities.create({
      identifier_key: 'identifier_key',
      identity_type: 'org',
      name: 'name',
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
    const response = await client.identities.create({
      identifier_key: 'identifier_key',
      identity_type: 'org',
      name: 'name',
      agent_ids: ['string'],
      block_ids: ['string'],
      project_id: 'project_id',
      properties: [{ key: 'key', type: 'string', value: 'string' }],
      'X-Project': 'X-Project',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.identities.retrieve('identity_id');
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
    const responsePromise = client.identities.list();
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
      client.identities.list(
        {
          after: 'after',
          before: 'before',
          identifier_key: 'identifier_key',
          identity_type: 'org',
          limit: 0,
          name: 'name',
          order: 'asc',
          order_by: 'created_at',
          project_id: 'project_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.identities.delete('identity_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('count', async () => {
    const responsePromise = client.identities.count();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAgents', async () => {
    const responsePromise = client.identities.listAgents('identity_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAgents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.identities.listAgents(
        'identity_id',
        { after: 'after', before: 'before', limit: 0, order: 'asc', order_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listBlocks', async () => {
    const responsePromise = client.identities.listBlocks('identity_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listBlocks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.identities.listBlocks(
        'identity_id',
        { after: 'after', before: 'before', limit: 0, order: 'asc', order_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(LettaSDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('modify', async () => {
    const responsePromise = client.identities.modify('identity_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.identities.upsert({
      identifier_key: 'identifier_key',
      identity_type: 'org',
      name: 'name',
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
  test.skip('upsert: required and optional params', async () => {
    const response = await client.identities.upsert({
      identifier_key: 'identifier_key',
      identity_type: 'org',
      name: 'name',
      agent_ids: ['string'],
      block_ids: ['string'],
      project_id: 'project_id',
      properties: [{ key: 'key', type: 'string', value: 'string' }],
      'X-Project': 'X-Project',
    });
  });

  // Prism tests are disabled
  test.skip('upsertProperties: only required params', async () => {
    const responsePromise = client.identities.upsertProperties('identity_id', {
      body: [{ key: 'key', type: 'string', value: 'string' }],
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
  test.skip('upsertProperties: required and optional params', async () => {
    const response = await client.identities.upsertProperties('identity_id', {
      body: [{ key: 'key', type: 'string', value: 'string' }],
    });
  });
});

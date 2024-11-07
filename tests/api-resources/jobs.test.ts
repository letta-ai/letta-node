// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from 'letta';
import { Response } from 'node-fetch';

const client = new Letta({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource jobs', () => {
  test('retrieve', async () => {
    const responsePromise = client.jobs.retrieve('job_id');
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
    await expect(client.jobs.retrieve('job_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Letta.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.jobs.list();
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
    await expect(client.jobs.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(Letta.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobs.list({ source_id: 'source_id', user_id: 'user_id' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.jobs.delete('job_id');
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
    await expect(client.jobs.delete('job_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Letta.NotFoundError,
    );
  });

  test('active', async () => {
    const responsePromise = client.jobs.active();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('active: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.jobs.active({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Letta.NotFoundError,
    );
  });

  test('active: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.jobs.active({ user_id: 'user_id' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Letta.NotFoundError);
  });
});

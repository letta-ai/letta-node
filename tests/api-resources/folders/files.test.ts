// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta, { toFile } from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource files', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.folders.files.retrieve('file-123e4567-e89b-42d3-8456-426614174000', {
      folder_id: 'source-123e4567-e89b-42d3-8456-426614174000',
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
    const response = await client.folders.files.retrieve('file-123e4567-e89b-42d3-8456-426614174000', {
      folder_id: 'source-123e4567-e89b-42d3-8456-426614174000',
      include_content: true,
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.folders.files.list('source-123e4567-e89b-42d3-8456-426614174000');
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
      client.folders.files.list(
        'source-123e4567-e89b-42d3-8456-426614174000',
        {
          after: 'after',
          before: 'before',
          include_content: true,
          limit: 0,
          order: 'asc',
          order_by: 'created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.folders.files.delete('file-123e4567-e89b-42d3-8456-426614174000', {
      folder_id: 'source-123e4567-e89b-42d3-8456-426614174000',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.folders.files.delete('file-123e4567-e89b-42d3-8456-426614174000', {
      folder_id: 'source-123e4567-e89b-42d3-8456-426614174000',
    });
  });

  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.folders.files.upload('source-123e4567-e89b-42d3-8456-426614174000', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.folders.files.upload('source-123e4567-e89b-42d3-8456-426614174000', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      duplicate_handling: 'skip',
      name: 'name',
    });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Letta from '@letta-ai/letta-client';

const client = new Letta({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trace', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.steps.trace.retrieve('step-123e4567-e89b-42d3-8456-426614174000');
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
      client.steps.trace.retrieve(
        'step-123e4567-e89b-42d3-8456-426614174000',
        {
          'x-billing-cost-source': 'x-billing-cost-source',
          'x-billing-customer-id': 'x-billing-customer-id',
          'x-billing-plan-type': 'x-billing-plan-type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Letta.NotFoundError);
  });
});

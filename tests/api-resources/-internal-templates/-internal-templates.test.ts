// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LettaSDK from '@letta-ai/letta-client';

const client = new LettaSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource _internalTemplates', () => {
  // Prism tests are disabled
  test.skip('createAgent: only required params', async () => {
    const responsePromise = client._internalTemplates.createAgent({
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      entity_id: 'entity_id',
      template_id: 'template_id',
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
  test.skip('createAgent: required and optional params', async () => {
    const response = await client._internalTemplates.createAgent({
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      entity_id: 'entity_id',
      template_id: 'template_id',
      agent_type: 'memgpt_agent',
      block_ids: ['string'],
      context_window_limit: 0,
      description: 'description',
      embedding: 'embedding',
      embedding_chunk_size: 0,
      embedding_config: {
        embedding_dim: 0,
        embedding_endpoint_type: 'openai',
        embedding_model: 'embedding_model',
        azure_deployment: 'azure_deployment',
        azure_endpoint: 'azure_endpoint',
        azure_version: 'azure_version',
        batch_size: 0,
        embedding_chunk_size: 0,
        embedding_endpoint: 'embedding_endpoint',
        handle: 'handle',
      },
      enable_reasoner: true,
      enable_sleeptime: true,
      from_template: 'from_template',
      hidden: true,
      identity_ids: ['string'],
      include_base_tool_rules: true,
      include_base_tools: true,
      include_default_source: true,
      include_multi_agent_tools: true,
      initial_message_sequence: [
        {
          content: [{ text: 'text', type: 'text' }],
          role: 'user',
          batch_item_id: 'batch_item_id',
          group_id: 'group_id',
          name: 'name',
          otid: 'otid',
          sender_id: 'sender_id',
          type: 'message',
        },
      ],
      llm_config: {
        context_window: 0,
        model: 'model',
        model_endpoint_type: 'openai',
        compatibility_type: 'gguf',
        enable_reasoner: true,
        frequency_penalty: 0,
        handle: 'handle',
        max_reasoning_tokens: 0,
        max_tokens: 0,
        model_endpoint: 'model_endpoint',
        model_wrapper: 'model_wrapper',
        provider_category: 'base',
        provider_name: 'provider_name',
        put_inner_thoughts_in_kwargs: true,
        reasoning_effort: 'minimal',
        temperature: 0,
        tier: 'tier',
        verbosity: 'low',
      },
      max_files_open: 0,
      max_reasoning_tokens: 0,
      max_tokens: 0,
      memory_blocks: [
        {
          label: 'label',
          value: 'value',
          base_template_id: 'base_template_id',
          deployment_id: 'deployment_id',
          description: 'description',
          entity_id: 'entity_id',
          hidden: true,
          is_template: true,
          limit: 0,
          metadata: { foo: 'bar' },
          name: 'name',
          preserve_on_migration: true,
          project_id: 'project_id',
          read_only: true,
        },
      ],
      memory_variables: { foo: 'string' },
      message_buffer_autoclear: true,
      metadata: { foo: 'bar' },
      model: 'model',
      name: 'name',
      per_file_view_window_char_limit: 0,
      project: 'project',
      project_id: 'project_id',
      reasoning: true,
      response_format: { type: 'text' },
      secrets: { foo: 'string' },
      source_ids: ['string'],
      system: 'system',
      tags: ['string'],
      template: true,
      timezone: 'timezone',
      tool_exec_environment_variables: { foo: 'string' },
      tool_ids: ['string'],
      tool_rules: [
        {
          children: ['string'],
          tool_name: 'tool_name',
          prompt_template: 'prompt_template',
          type: 'constrain_child_tools',
        },
      ],
      tools: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('createBlock: only required params', async () => {
    const responsePromise = client._internalTemplates.createBlock({
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      entity_id: 'entity_id',
      label: 'label',
      template_id: 'template_id',
      value: 'value',
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
  test.skip('createBlock: required and optional params', async () => {
    const response = await client._internalTemplates.createBlock({
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      entity_id: 'entity_id',
      label: 'label',
      template_id: 'template_id',
      value: 'value',
      description: 'description',
      hidden: true,
      is_template: true,
      limit: 0,
      metadata: { foo: 'bar' },
      name: 'name',
      preserve_on_migration: true,
      project_id: 'project_id',
      read_only: true,
    });
  });

  // Prism tests are disabled
  test.skip('createGroup: only required params', async () => {
    const responsePromise = client._internalTemplates.createGroup({
      agent_ids: ['string'],
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      description: 'description',
      template_id: 'template_id',
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
  test.skip('createGroup: required and optional params', async () => {
    const response = await client._internalTemplates.createGroup({
      agent_ids: ['string'],
      base_template_id: 'base_template_id',
      deployment_id: 'deployment_id',
      description: 'description',
      template_id: 'template_id',
      hidden: true,
      manager_config: { manager_type: 'round_robin', max_turns: 0 },
      project_id: 'project_id',
      shared_block_ids: ['string'],
    });
  });
});

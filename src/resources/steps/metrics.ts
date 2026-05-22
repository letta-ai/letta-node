// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Get step metrics by step ID.
   */
  retrieve(stepID: string, options?: RequestOptions): APIPromise<MetricRetrieveResponse> {
    return this._client.get(path`/v1/steps/${stepID}/metrics`, options);
  }
}

export interface MetricRetrieveResponse {
  /**
   * The id of the step this metric belongs to (matches steps.id).
   */
  id: string;

  /**
   * The unique identifier of the agent.
   */
  agent_id?: string | null;

  /**
   * The base template ID that the step belongs to (cloud only).
   */
  base_template_id?: string | null;

  /**
   * Time spent on LLM requests in nanoseconds.
   */
  llm_request_ns?: number | null;

  /**
   * The timestamp of the start of the llm request in nanoseconds.
   */
  llm_request_start_ns?: number | null;

  /**
   * The project that the step belongs to (cloud only).
   */
  project_id?: string | null;

  /**
   * The unique identifier of the provider.
   */
  provider_id?: string | null;

  /**
   * The unique identifier of the run.
   */
  run_id?: string | null;

  /**
   * Total time for the step in nanoseconds.
   */
  step_ns?: number | null;

  /**
   * The timestamp of the start of the step in nanoseconds.
   */
  step_start_ns?: number | null;

  /**
   * The template ID that the step belongs to (cloud only).
   */
  template_id?: string | null;

  /**
   * Time spent on tool execution in nanoseconds.
   */
  tool_execution_ns?: number | null;
}

export declare namespace Metrics {
  export { type MetricRetrieveResponse as MetricRetrieveResponse };
}

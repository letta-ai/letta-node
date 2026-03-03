// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import { MessagesArrayPage } from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { Stream } from '../../core/streaming';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get response messages associated with a run.
   */
  list(
    runID: string,
    params: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagesArrayPage, MessagesAPI.Message> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList(path`/v1/runs/${runID}/messages`, ArrayPage<MessagesAPI.Message>, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve Stream For Run
   */
  stream(
    runID: string,
    params: MessageStreamParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<MessagesAPI.LettaStreamingResponse>> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params ?? {};
    return this._client.post(path`/v1/runs/${runID}/stream`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
      stream: true,
    }) as APIPromise<Stream<MessagesAPI.LettaStreamingResponse>>;
  }
}

export type MessageStreamResponse = unknown;

export interface MessageListParams extends ArrayPageParams {
  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface MessageStreamParams {
  /**
   * Body param: Number of entries to read per batch.
   */
  batch_size?: number | null;

  /**
   * Body param: Whether to include periodic keepalive ping messages in the stream to
   * prevent connection timeouts.
   */
  include_pings?: boolean | null;

  /**
   * Body param: Seconds to wait between polls when no new data.
   */
  poll_interval?: number | null;

  /**
   * Body param: Sequence id to use as a cursor for pagination. Response will start
   * streaming after this chunk sequence id
   */
  starting_after?: number;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export declare namespace Messages {
  export {
    type MessageStreamResponse as MessageStreamResponse,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

export { type MessagesArrayPage };

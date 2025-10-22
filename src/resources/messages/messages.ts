// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BatchesAPI from './batches';
import {
  BatchCancelResponse,
  BatchCreateParams,
  BatchJob,
  BatchListMessagesParams,
  BatchListMessagesResponse,
  BatchListParams,
  BatchListResponse,
  Batches,
} from './batches';

export class Messages extends APIResource {
  batches: BatchesAPI.Batches = new BatchesAPI.Batches(this._client);
}

Messages.Batches = Batches;

export declare namespace Messages {
  export {
    Batches as Batches,
    type BatchJob as BatchJob,
    type BatchListResponse as BatchListResponse,
    type BatchCancelResponse as BatchCancelResponse,
    type BatchListMessagesResponse as BatchListMessagesResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
    type BatchListMessagesParams as BatchListMessagesParams,
  };
}

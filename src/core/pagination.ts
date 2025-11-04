// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LettaError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Letta } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Letta;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Letta, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new LettaError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Letta,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export type ArrayPageResponse<Item> = Item[];

export interface ArrayPageParams {
  before?: string | null;

  after?: string | null;

  limit?: number | null;

  order?: string | null;

  order_by?: string | null;
}

export class ArrayPage<Item extends { id: string }> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: Letta,
    response: Response,
    body: ArrayPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const items = this.getPaginatedItems();

    const isForwards = !(typeof this.options.query === 'object' && 'before' in (this.options.query || {}));
    if (isForwards) {
      const id = items[items.length - 1]?.id;
      if (!id) {
        return null;
      }

      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          after: id,
        },
      };
    }

    const id = items[0]?.id;
    if (!id) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        before: id,
      },
    };
  }
}

export interface ObjectPageResponse<Item> {
  messages: Array<Item>;
}

export interface ObjectPageParams {
  before?: string | null;

  after?: string | null;

  limit?: number | null;

  order?: string | null;

  order_by?: string | null;
}

export class ObjectPage<Item extends { id: string }>
  extends AbstractPage<Item>
  implements ObjectPageResponse<Item>
{
  messages: Array<Item>;

  constructor(
    client: Letta,
    response: Response,
    body: ObjectPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.messages = body.messages || [];
  }

  getPaginatedItems(): Item[] {
    return this.messages ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const messages = this.getPaginatedItems();

    const isForwards = !(typeof this.options.query === 'object' && 'before' in (this.options.query || {}));
    if (isForwards) {
      const id = messages[messages.length - 1]?.id;
      if (!id) {
        return null;
      }

      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          after: id,
        },
      };
    }

    const id = messages[0]?.id;
    if (!id) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        before: id,
      },
    };
  }
}

export interface NextFilesPageResponse<Item> {
  files: Array<Item>;

  next_cursor: string | null;

  has_more: boolean;
}

export interface NextFilesPageParams {
  before?: string | null;

  after?: string | null;

  limit?: number | null;

  order?: string | null;

  order_by?: string | null;
}

export class NextFilesPage<Item extends { id: string }>
  extends AbstractPage<Item>
  implements NextFilesPageResponse<Item>
{
  files: Array<Item>;

  next_cursor: string | null;

  has_more: boolean;

  constructor(
    client: Letta,
    response: Response,
    body: NextFilesPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.files = body.files || [];
    this.next_cursor = body.next_cursor || null;
    this.has_more = body.has_more || false;
  }

  getPaginatedItems(): Item[] {
    return this.files ?? [];
  }

  override hasNextPage(): boolean {
    if (this.has_more === false) {
      return false;
    }

    return super.hasNextPage();
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const files = this.getPaginatedItems();

    const isForwards = !(typeof this.options.query === 'object' && 'before' in (this.options.query || {}));
    if (isForwards) {
      const id = files[files.length - 1]?.id;
      if (!id) {
        return null;
      }

      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          after: id,
        },
      };
    }

    const id = files[0]?.id;
    if (!id) {
      return null;
    }

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        before: id,
      },
    };
  }
}

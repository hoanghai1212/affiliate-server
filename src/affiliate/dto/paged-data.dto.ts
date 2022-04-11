export class PagedDataDto<T> {
  itemCount: number;
  perPage: number;
  pageCount: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  items: T[];
}

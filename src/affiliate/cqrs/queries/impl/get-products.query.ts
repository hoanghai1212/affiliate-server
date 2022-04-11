import { PaginateOptionsDto } from 'src/affiliate/dto';

export class GetProductsQuery {
  constructor(public readonly paginateOptionsDto: PaginateOptionsDto) {}
}

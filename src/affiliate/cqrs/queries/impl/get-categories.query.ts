import { PaginateOptionsDto } from 'src/affiliate/dto';

export class GetCategoriesQuery {
  constructor(public readonly paginateOptionsDto: PaginateOptionsDto) {}
}

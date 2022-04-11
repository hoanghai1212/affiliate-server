import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { PagedDataDto, CategoryInfoDto } from 'src/affiliate/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetCategoriesQuery } from '../impl/get-categories.query';

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesQueryHandler
  implements IQueryHandler<GetCategoriesQuery, PagedDataDto<CategoryInfoDto>>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    query: GetCategoriesQuery,
  ): Promise<PagedDataDto<CategoryInfoDto>> {
    const categories = await this.prisma.category.findMany({
      skip:
        (query.paginateOptionsDto.page - 1) * query.paginateOptionsDto.perPage,
      take: +query.paginateOptionsDto.perPage,
      orderBy: query.paginateOptionsDto.orderBy,
    });

    const pagedDataDto = new PagedDataDto<CategoryInfoDto>();
    pagedDataDto.itemCount = await this.prisma.category.count();
    pagedDataDto.perPage = query.paginateOptionsDto.perPage;
    pagedDataDto.pageCount = Math.ceil(
      pagedDataDto.itemCount / pagedDataDto.perPage,
    );
    pagedDataDto.page = query.paginateOptionsDto.page;
    pagedDataDto.hasPrevPage = pagedDataDto.page > 1;
    pagedDataDto.hasNextPage = pagedDataDto.page < pagedDataDto.pageCount;
    pagedDataDto.items = categories.map((category) => {
      const categoryInfoDto = new CategoryInfoDto();
      categoryInfoDto.id = category.id;
      categoryInfoDto.name = category.name;
      return categoryInfoDto;
    });

    return pagedDataDto;
  }
}

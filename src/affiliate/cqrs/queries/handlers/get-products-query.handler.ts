import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { PagedDataDto, ProductInfoDto } from 'src/affiliate/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetProductsQuery } from '../impl';

@QueryHandler(GetProductsQuery)
export class GetProductsQueryHandler
  implements IQueryHandler<GetProductsQuery, PagedDataDto<ProductInfoDto>>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    query: GetProductsQuery,
  ): Promise<PagedDataDto<ProductInfoDto>> {
    const products = await this.prisma.product.findMany({
      skip:
        (query.paginateOptionsDto.page - 1) * query.paginateOptionsDto.perPage,
      take: +query.paginateOptionsDto.perPage,
      orderBy: query.paginateOptionsDto.orderBy,
      include: {
        category: true,
      },
    });

    const pagedDataDto = new PagedDataDto<ProductInfoDto>();
    pagedDataDto.itemCount = await this.prisma.category.count();
    pagedDataDto.perPage = query.paginateOptionsDto.perPage;
    pagedDataDto.pageCount = Math.ceil(
      pagedDataDto.itemCount / pagedDataDto.perPage,
    );
    pagedDataDto.page = query.paginateOptionsDto.page;
    pagedDataDto.hasPrevPage = pagedDataDto.page > 1;
    pagedDataDto.hasNextPage = pagedDataDto.page < pagedDataDto.pageCount;
    pagedDataDto.items = products.map((product) => {
      let productInfoDto = new ProductInfoDto();

      const { rating, ...rest } = product;

      productInfoDto = {
        ...rest,
        discountRate: parseFloat(product.discountRate.toString()),
        rating: parseFloat(product.rating.toString()),
      };

      return productInfoDto;
    });

    return pagedDataDto;
  }
}

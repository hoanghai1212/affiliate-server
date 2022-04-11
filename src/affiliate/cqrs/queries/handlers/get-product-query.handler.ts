import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ProductInfoDto } from 'src/affiliate/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetProductQuery } from '../impl';

@QueryHandler(GetProductQuery)
export class GetProductQueryHandler
  implements IQueryHandler<GetProductQuery, ProductInfoDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetProductQuery): Promise<ProductInfoDto> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: query.productId,
      },
      include: {
        category: true,
      },
    });

    return {
      ...product,
      discountRate: parseFloat(product.discountRate.toString()),
      rating: parseFloat(product.rating.toString()),
    } as ProductInfoDto;
  }
}

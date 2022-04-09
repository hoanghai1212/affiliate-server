import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { AffiliateRouteConst } from './constants';
import { GetProductSeedInfoQuery } from './cqrs/queries/impl';
import { ProductSeedInfoDto } from './dto';

@ApiTags('Affiliate')
@Controller('affiliate')
export class AffiliateController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(AffiliateRouteConst.GetProductSeedInfo)
  async getProductSeedInfo(
    @Param(AffiliateRouteConst.ProductLinkParam) productLink: string,
  ) {
    return await this.queryBus.execute<
      GetProductSeedInfoQuery,
      ProductSeedInfoDto
    >(new GetProductSeedInfoQuery(productLink));
  }
}

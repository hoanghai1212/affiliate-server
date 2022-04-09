import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { GetProductSeedInfoQuery } from './cqrs/queries/impl';
import { ProductSeedInfoDto } from './dto/product-seed-info.dto';

@ApiTags('Affiliate')
@Controller('affiliate')
export class AffiliateController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('seed/:productLink')
  async getProductSeedInfo(@Param('productLink') productLink: string) {
    return await this.queryBus.execute<GetProductSeedInfoQuery, ProductSeedInfoDto>(new GetProductSeedInfoQuery(productLink));
  }
}

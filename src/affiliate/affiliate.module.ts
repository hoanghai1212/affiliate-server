import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AffiliateController } from './affiliate.controller';
import { GetProductSeedInfoQueryHandler } from './cqrs/queries/get-product-seed-info-query.handler';
import { AffiliateServiceFactory } from './factories/affiliate-provider-factory';
import { LazadaService, ShopeeService, TikiService } from './services/affiliate-provider.service';

export const QueryHandlers = [GetProductSeedInfoQueryHandler];
export const CommandHandlers = [];

@Module({
  imports: [CqrsModule, HttpModule],
  controllers: [AffiliateController],
  providers: [
    TikiService,
    LazadaService,
    ShopeeService,
    AffiliateServiceFactory,
    ...QueryHandlers,
    ...CommandHandlers,
  ]
})
export class AffiliateModule {}

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaService } from 'src/prisma/prisma.service';
import { AffiliateController } from './affiliate.controller';
import { QueryHandlers } from './cqrs/queries/handlers';
import { AffiliateServiceFactory } from './factories/affiliate-provider-factory';
import { LazadaService, ShopeeService, TikiService } from './services';

@Module({
  imports: [CqrsModule, HttpModule],
  controllers: [AffiliateController],
  providers: [
    PrismaService,
    TikiService,
    LazadaService,
    ShopeeService,
    AffiliateServiceFactory,
    ...QueryHandlers,
  ],
})
export class AffiliateModule {}

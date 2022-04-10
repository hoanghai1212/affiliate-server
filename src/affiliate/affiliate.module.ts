import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AffiliateController } from './affiliate.controller';
import { QueryHandlers } from './cqrs/queries/handlers';
import { AffiliateServiceFactory } from './factories/affiliate-provider-factory';
import { LazadaService, ShopeeService, TikiService } from './services';

@Module({
  controllers: [AffiliateController],
  imports: [CqrsModule, HttpModule, AuthModule],
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

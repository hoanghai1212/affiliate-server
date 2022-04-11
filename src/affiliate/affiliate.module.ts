import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AffiliateController } from './affiliate.controller';
import { CommandHandlers } from './cqrs/commands/handlers';
import { QueryHandlers } from './cqrs/queries/handlers';
import { AffiliateServiceFactory } from './factories/affiliate-provider-factory';
import { ShopeeService, TikiService } from './services';

@Module({
  controllers: [AffiliateController],
  imports: [CqrsModule, HttpModule, AuthModule],
  providers: [
    PrismaService,
    TikiService,
    ShopeeService,
    AffiliateServiceFactory,
    ...QueryHandlers,
    ...CommandHandlers,
  ],
})
export class AffiliateModule {}

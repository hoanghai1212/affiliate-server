import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { join } from 'path';
import { AffiliateModule } from './affiliate/affiliate.module';
import * as winston from 'winston';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.ms(),
              nestWinstonModuleUtilities.format.nestLike('Affilicate App', {
                prettyPrint: true,
              }),
            ),
          }),
          new winston.transports.File({
            dirname: join(__dirname, `${config.get('LOG_DIR')}/debug/`),
            filename: 'debug.log',
            level: 'debug',
          }),
          new winston.transports.File({
            dirname: join(__dirname, `${config.get('LOG_DIR')}/error/`),
            filename: 'error.log',
            level: 'error',
          }),
        ],
      }),
      inject: [ConfigService],
    }),
    AffiliateModule,
  ],
})
export class AppModule {}

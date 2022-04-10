import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthQueryHandlers } from './cqrs/queries/handlers';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

const jwtModule = JwtModule.register({
  secret: process.env.SECRET_KEY,
  signOptions: {
    expiresIn: process.env.EXPIRE_IN,
  },
});

@Module({
  controllers: [AuthController],
  imports: [ConfigModule, CqrsModule, HttpModule, PassportModule, jwtModule],
  providers: [PrismaService, LocalStrategy, JwtStrategy, ...AuthQueryHandlers],
  exports: [JwtStrategy, PassportModule, jwtModule, ConfigModule],
})
export class AuthModule {}

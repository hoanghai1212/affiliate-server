import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { GetAccessTokenQuery, GetUserProfileQuery } from './cqrs/queries/impl';
import {
  AccessTokenDto,
  CredentialDto,
  UserProfileDto,
  ValidatedUserDto,
} from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiBody({
    type: CredentialDto,
    required: true,
  })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.queryBus.execute<GetAccessTokenQuery, AccessTokenDto>(
      new GetAccessTokenQuery(req.user as ValidatedUserDto),
    );
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return await this.queryBus.execute<GetUserProfileQuery, UserProfileDto>(
      new GetUserProfileQuery(req.user.userId),
    );
  }
}

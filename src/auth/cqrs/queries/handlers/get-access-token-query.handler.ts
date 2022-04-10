import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenDto } from 'src/auth/dto';
import { GetAccessTokenQuery } from '../impl/get-access-token.query';

@QueryHandler(GetAccessTokenQuery)
export class GetAccessTokenQueryHandler
  implements IQueryHandler<GetAccessTokenQuery, AccessTokenDto>
{
  constructor(private readonly jwtService: JwtService) {}

  async execute(query: GetAccessTokenQuery): Promise<AccessTokenDto> {
    const payload = { email: query.user.email, sub: query.user.userId };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}

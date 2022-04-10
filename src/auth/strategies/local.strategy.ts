import { Injectable, UnauthorizedException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidateUserRequestQuery } from '../cqrs/queries/impl';
import { ValidatedUserDto } from '../dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly queryBus: QueryBus) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<ValidatedUserDto> {
    const user = await this.queryBus.execute<
      ValidateUserRequestQuery,
      ValidatedUserDto
    >(new ValidateUserRequestQuery(email, password));
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

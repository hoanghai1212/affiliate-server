import { ValidatedUserDto } from 'src/auth/dto';

export class GetAccessTokenQuery {
  constructor(public user: ValidatedUserDto) {}
}

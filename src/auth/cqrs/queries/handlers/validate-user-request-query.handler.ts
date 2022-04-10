import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ValidatedUserDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidateUserRequestQuery } from '../impl';
import * as bcrypt from 'bcrypt';

@QueryHandler(ValidateUserRequestQuery)
export class ValidateUserRequestQueryHandler
  implements IQueryHandler<ValidateUserRequestQuery, ValidatedUserDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    query: ValidateUserRequestQuery,
  ): Promise<ValidatedUserDto | null> {
    const { email, password } = query;
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return {
        email,
        userId: user.id,
      } as ValidatedUserDto;
    }

    return null;
  }
}

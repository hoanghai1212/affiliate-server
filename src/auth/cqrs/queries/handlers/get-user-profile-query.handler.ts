import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserProfileDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserProfileQuery } from '../impl';

@QueryHandler(GetUserProfileQuery)
export class GetUserProfileQueryHandler
  implements IQueryHandler<GetUserProfileQuery, UserProfileDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUserProfileQuery): Promise<UserProfileDto> {
    return await this.prisma.user
      .findUnique({
        where: {
          id: query.userId,
        },
        include: {
          role: true,
        },
      })
      ?.then(
        (user) =>
          ({
            name: user.name,
            email: user.email,
            role: user.role.name,
          } as UserProfileDto),
      );
  }
}

import { NotFoundException } from '@nestjs/common';
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
    const user = await this.prisma.user.findUnique({
      where: {
        id: query.userId,
      },
      include: {
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${query.userId} not found`);
    }

    return {
      name: user.name,
      email: user.email,
      role: user.role.name,
    } as UserProfileDto;
  }
}

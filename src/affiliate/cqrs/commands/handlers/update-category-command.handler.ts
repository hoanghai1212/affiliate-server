import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CategoryUpdatedDto } from 'src/affiliate/dto';
import { UpdateCategoryCommand } from '../impl';
import { PrismaService } from 'src/prisma/prisma.service';

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler
  implements ICommandHandler<UpdateCategoryCommand, CategoryUpdatedDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: UpdateCategoryCommand): Promise<CategoryUpdatedDto> {
    return await this.prisma.category.update({
      where: {
        id: command.categoryId,
      },
      data: {
        name: command.categoryUpdate.name,
      },
    });
  }
}

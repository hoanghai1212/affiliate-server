import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCategoryCommand } from '../impl';
import { PrismaService } from 'src/prisma/prisma.service';

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryCommandHandler
  implements ICommandHandler<DeleteCategoryCommand>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: DeleteCategoryCommand): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: command.categoryId,
      },
    });
  }
}

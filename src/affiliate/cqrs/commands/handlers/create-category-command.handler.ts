import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCategoryCommand } from '../impl';
import { CategoryCreatedDto } from 'src/affiliate/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler
  implements ICommandHandler<CreateCategoryCommand, CategoryCreatedDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateCategoryCommand): Promise<CategoryCreatedDto> {
    return await this.prisma.category.create({
      data: {
        name: command.categoryCreateDto.name,
      },
    });
  }
}

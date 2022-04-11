import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductUpdatedDto } from 'src/affiliate/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateProductCommand } from '../impl';

@CommandHandler(UpdateProductCommand)
export class UpdateProductCommandHandler
  implements ICommandHandler<UpdateProductCommand, ProductUpdatedDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: UpdateProductCommand): Promise<ProductUpdatedDto> {
    return await this.prisma.product.update({
      where: {
        id: command.productId,
      },
      data: {
        ...command.productUpdateDto,
      },
    });
  }
}

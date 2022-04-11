import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteProductCommand } from '../impl';

@CommandHandler(DeleteProductCommand)
export class DeleteProductCommandHandler
  implements ICommandHandler<DeleteProductCommand, void>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: DeleteProductCommand): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id: command.productId,
      },
    });
  }
}

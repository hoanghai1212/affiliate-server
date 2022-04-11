import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductCreatedDto } from 'src/affiliate/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductCommand } from '../impl';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand, ProductCreatedDto>
{
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateProductCommand): Promise<ProductCreatedDto> {
    const { categoryId, ...productCreateData } = command.productCreateDto;

    const createdProduct = await this.prisma.product.create({
      data: {
        ...productCreateData,
        category: { connect: { id: categoryId } },
      },
    });

    return {
      id: createdProduct.id,
    };
  }
}

import { ProductUpdateDto } from 'src/affiliate/dto';

export class UpdateProductCommand {
  constructor(
    public productId: string,
    public productUpdateDto: ProductUpdateDto,
  ) {}
}

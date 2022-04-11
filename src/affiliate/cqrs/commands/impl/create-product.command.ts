import { ProductCreateDto } from 'src/affiliate/dto';

export class CreateProductCommand {
  constructor(public productCreateDto: ProductCreateDto) {}
}

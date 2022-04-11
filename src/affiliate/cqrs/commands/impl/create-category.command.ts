import { CategoryCreateDto } from 'src/affiliate/dto';

export class CreateCategoryCommand {
  constructor(public categoryCreateDto: CategoryCreateDto) {}
}

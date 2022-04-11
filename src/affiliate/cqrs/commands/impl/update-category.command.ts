import { CategoryUpdateDto } from 'src/affiliate/dto';

export class UpdateCategoryCommand {
  constructor(
    public categoryId: string,
    public categoryUpdate: CategoryUpdateDto,
  ) {}
}

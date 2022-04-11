import { CreateCategoryCommandHandler } from './create-category-command.handler';
import { CreateProductCommandHandler } from './create-product-command.handler';
import { DeleteCategoryCommandHandler } from './delete-category-command.handler';
import { DeleteProductCommandHandler } from './delete-product-command.handler';
import { UpdateCategoryCommandHandler } from './update-category-command.handler';
import { UpdateProductCommandHandler } from './update-product-command.handler';

export const CommandHandlers = [
  CreateCategoryCommandHandler,
  UpdateCategoryCommandHandler,
  DeleteCategoryCommandHandler,
  CreateProductCommandHandler,
  UpdateProductCommandHandler,
  DeleteProductCommandHandler,
];

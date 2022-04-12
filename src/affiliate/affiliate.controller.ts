import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AffiliateRouteConst } from './constants';
import {
  GetCategoriesQuery,
  GetProductQuery,
  GetProductSeedInfoQuery,
  GetProductsQuery,
} from './cqrs/queries/impl';
import {
  ProductSeedInfoDto,
  PaginateOptionsDto,
  PagedDataDto,
  CategoryInfoDto,
  CategoryCreatedDto,
  CategoryUpdatedDto,
  CategoryUpdateDto,
  ProductInfoDto,
  CategoryCreateDto,
  ProductCreateDto,
  ProductCreatedDto,
  ProductUpdatedDto,
  ProductUpdateDto,
} from './dto';
import { PaginateOpts, Paginate } from './decorators/pagination.decorator';
import {
  CreateCategoryCommand,
  CreateProductCommand,
  DeleteCategoryCommand,
  DeleteProductCommand,
  UpdateCategoryCommand,
  UpdateProductCommand,
} from './cqrs/commands/impl';

@ApiTags('Affiliate')
@Controller('affiliate')
export class AffiliateController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(AffiliateRouteConst.GetProductSeedInfo)
  async getProductSeedInfo(
    @Param(AffiliateRouteConst.ProductLinkParam) productLink: string,
  ) {
    return await this.queryBus.execute<
      GetProductSeedInfoQuery,
      ProductSeedInfoDto
    >(new GetProductSeedInfoQuery(productLink.replace('www.', '')));
  }

  @Get('categories')
  @Paginate(PagedDataDto)
  async getCategories(@PaginateOpts() paginateOptionsDto: PaginateOptionsDto) {
    return await this.queryBus.execute<
      GetCategoriesQuery,
      PagedDataDto<CategoryInfoDto>
    >(new GetCategoriesQuery(paginateOptionsDto));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('categories')
  async createCategory(@Body() categoryCreateDto: CategoryCreateDto) {
    return await this.commandBus.execute<
      CreateCategoryCommand,
      CategoryCreatedDto
    >(new CreateCategoryCommand(categoryCreateDto));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put('categories/:categoryId')
  async updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() categoryUpdateDto: CategoryUpdateDto,
  ) {
    return await this.commandBus.execute<
      UpdateCategoryCommand,
      CategoryUpdatedDto
    >(new UpdateCategoryCommand(categoryId, categoryUpdateDto));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete('categories/:categoryId')
  async deleteCategory(@Param('categoryId') categoryId: string) {
    return await this.commandBus.execute<DeleteCategoryCommand, void>(
      new DeleteCategoryCommand(categoryId),
    );
  }

  @Get('products')
  @Paginate(PagedDataDto)
  async getProducts(@PaginateOpts() paginateOptionsDto: PaginateOptionsDto) {
    return await this.queryBus.execute<
      GetProductsQuery,
      PagedDataDto<ProductInfoDto>
    >(new GetProductsQuery(paginateOptionsDto));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('products/:productId')
  async getProduct(@Param('productId') productId: string) {
    return await this.queryBus.execute<GetProductQuery, ProductInfoDto>(
      new GetProductQuery(productId),
    );
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('products')
  async createProduct(@Body() productCreateDto: ProductCreateDto) {
    return await this.commandBus.execute<
      CreateProductCommand,
      ProductCreatedDto
    >(new CreateProductCommand(productCreateDto));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put('products/:productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() productUpdateDto: ProductUpdateDto,
  ) {
    return await this.commandBus.execute<
      UpdateProductCommand,
      ProductUpdatedDto
    >(new UpdateProductCommand(productId, productUpdateDto));
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete('products/:productId')
  async deleteProduct(@Param('productId') productId: string) {
    return await this.commandBus.execute<DeleteProductCommand>(
      new DeleteProductCommand(productId),
    );
  }
}

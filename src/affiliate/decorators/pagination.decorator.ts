import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PaginateOptionsDto } from '../dto';

import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

export function Paginate(responseType: any) {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiQuery({ name: 'page', type: Number, required: false, example: 1 }),
    ApiQuery({ name: 'perPage', type: Number, required: false, example: 10 }),
    ApiQuery({
      name: 'orderBy',
      type: String,
      required: false,
      example: '{"name": "asc"}',
      description:
        'Sort by field with direction (asc, desc, ascending, descending, 1, and -1)',
    }),
    ApiOkResponse({
      type: responseType,
    }),
  );
}

export const PaginateOpts = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return {
      page: +request.query.page || 1,
      perPage: +request.query.perPage || 10,
      orderBy: request.query.orderBy ? JSON.parse(request.query.orderBy) : {},
    } as PaginateOptionsDto;
  },
);

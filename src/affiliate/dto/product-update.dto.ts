import { ApiProperty } from '@nestjs/swagger';

export class ProductUpdateDto {
  @ApiProperty({
    type: String,
  })
  categoryId?: string;

  @ApiProperty({
    type: String,
  })
  name?: string;

  @ApiProperty({
    type: String,
  })
  description?: string;

  @ApiProperty({
    type: Number,
  })
  oldMinPrice?: number;

  @ApiProperty({
    type: Number,
  })
  oldMaxPrice?: number;

  @ApiProperty({
    type: Number,
  })
  currentMinPrice?: number;

  @ApiProperty({
    type: Number,
  })
  currentMaxPrice?: number;

  @ApiProperty({
    type: Number,
  })
  discountRate?: number;

  @ApiProperty({
    type: String,
  })
  image?: string;

  @ApiProperty({
    type: Number,
  })
  rating?: number;

  @ApiProperty({
    type: String,
  })
  affiliateLink?: string;
}

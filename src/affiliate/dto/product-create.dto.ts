import { ApiProperty } from '@nestjs/swagger';
import { Provider } from '../constants';

export class ProductCreateDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  description: string;

  @ApiProperty({
    type: Number,
    nullable: true,
  })
  oldMinPrice: number | null;

  @ApiProperty({
    type: Number,
    nullable: true,
  })
  oldMaxPrice: number | null;

  @ApiProperty({
    type: Number,
    required: true,
  })
  currentMinPrice: number;

  @ApiProperty({
    type: Number,
    nullable: true,
  })
  currentMaxPrice: number | null;

  @ApiProperty({
    type: Number,
    nullable: true,
  })
  discountRate: number | null;

  @ApiProperty({
    type: String,
  })
  image?: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  rating: number;

  @ApiProperty({
    enum: Provider,
    required: true,
  })
  provider: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  affiliateLink: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  productLink: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  categoryId: string;
}

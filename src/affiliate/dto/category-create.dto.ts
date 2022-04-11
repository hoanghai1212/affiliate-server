import { ApiProperty } from '@nestjs/swagger';

export class CategoryCreateDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  name: string;
}

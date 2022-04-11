import { ApiProperty } from '@nestjs/swagger';

export class CategoryUpdateDto {
  @ApiProperty({
    type: String,
  })
  name: string;
}

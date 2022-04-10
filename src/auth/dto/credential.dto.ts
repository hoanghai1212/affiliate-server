import { ApiProperty } from '@nestjs/swagger';

export class CredentialDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  password: string;
}

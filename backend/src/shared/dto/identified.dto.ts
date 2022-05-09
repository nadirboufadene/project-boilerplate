import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export default class IdentifiedDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(36, 36)
  readonly id: string;
}

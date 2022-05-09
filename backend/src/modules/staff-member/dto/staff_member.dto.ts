import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import IdentifiedDTO from '../../../shared/dto/identified.dto';

export default class StaffMemberDto extends IdentifiedDTO {
  @ApiProperty({ minimum: 1 })
  @IsString()
  @IsNotEmpty()
  readonly firstname: string;

  @IsString()
  @ApiProperty({ minimum: 1 })
  @IsNotEmpty()
  readonly lastname: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import IdentifiedDTO from 'src/shared/dto/identified.dto';

export default class ClientDto extends IdentifiedDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly clientName: string;
}

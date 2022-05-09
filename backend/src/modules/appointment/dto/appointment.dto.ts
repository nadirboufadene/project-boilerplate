import { ApiProperty } from '@nestjs/swagger';
import {
  IsObject,
  IsNotEmptyObject,
  IsNotEmpty,
  IsDateString,
  IsString,
  Length,
} from 'class-validator';
import ClientDto from 'src/modules/client/dto/client.dto';
import StaffMemberDto from 'src/modules/staff-member/dto/staff_member.dto';
import IdentifiedDTO from 'src/shared/dto/identified.dto';

class SharedAppointmentDto extends IdentifiedDTO {
  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  readonly startingDate: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  readonly endingDate: string;
}

class EnrichedGetAppointmentDto extends SharedAppointmentDto {
  @ApiProperty()
  @IsObject()
  @IsNotEmptyObject()
  readonly client: ClientDto;

  @ApiProperty()
  @IsObject()
  @IsNotEmptyObject()
  readonly staffMember: StaffMemberDto;
}

export type GetAppointmentDto = EnrichedGetAppointmentDto & IdentifiedDTO;

export default class AppointmentDto extends SharedAppointmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(36, 36)
  readonly clientId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(36, 36)
  readonly staffMemberId: string;
}

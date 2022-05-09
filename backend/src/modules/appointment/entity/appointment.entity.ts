import ClientEntity from '../../client/entity/client.entity';
import StaffMemberEntity from '../../staff-member/entity/staff_member.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import BaseEntity from '../../../shared/entity/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('appointment')
@Unique(['id'])
export default class AppointmentEntity extends BaseEntity {
  @ManyToOne((_type) => ClientEntity, (client) => client.appointments, {
    eager: false,
  })
  @ApiProperty({ type: () => ClientEntity, example: {
    "id": "46fb5910-ccb7-11ec-9d64-0242ac120002",
    "created": "2022-05-05T21:11:04.009Z",
    "updated": "2022-05-05T21:11:04.009Z",
    "deleted": null,
    "version": 1,
    "clientName": "Levis",
    "appointement": []
  }, description: 'The client party.' })
  client: ClientEntity;

  @ApiProperty({ type: () => StaffMemberEntity, example: {
    "id": "ab63ef3a-cca2-11ec-9d64-0242ac120003",
    "created": "2022-05-05T20:21:56.473Z",
    "updated": "2022-05-05T20:21:56.473Z",
    "deleted": null,
    "version": 1,
    "firstname": "Nadir",
    "lastname": "Boufadene",
    "appointement": []
  }, description: 'The staffmember party.' })
  @ManyToOne(
    (type) => StaffMemberEntity,
    (staffMember) => staffMember.appointments,
    {
      eager: false,
    },
  )
  staffMember: StaffMemberEntity;

  @Column({ type: 'timestamp', nullable: false })
  @ApiProperty({example: "2022-05-09T06:00:00.000", description: "Starting date of the appointment."})
  startingDate: Date;

  @Column({ type: 'timestamp', nullable: false })
  @ApiProperty({example: "2022-05-09T06:30:00.000Z", description: "Ending date of the appointment."})
  endingDate: Date;
}

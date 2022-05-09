import { Column, Entity, OneToMany, Unique } from 'typeorm';
import AppointmentEntity from '../../appointment/entity/appointment.entity';
import BaseEntity from '../../../shared/entity/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('staff_member')
@Unique(['id'])
export default class StaffMemberEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  @ApiProperty({example: "John", description: "StaffMember's firstname."})
  firstname: string;

  @Column({ type: 'varchar' })
  @ApiProperty({example: "Doe", description: "StaffMember's lastname."})
  lastname: string;

  @OneToMany(
    (_type) => AppointmentEntity,
    (appointment) => appointment.staffMember,
    { eager: true },
  )
  @ApiProperty({example: "2022-05-09T06:00:00.000", description: "Starting date of the appointment."})
  appointments: AppointmentEntity[];
}

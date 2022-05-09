import { Column, Entity, OneToMany, Unique } from 'typeorm';
import AppointmentEntity from '../../appointment/entity/appointment.entity';
import BaseEntity from '../../../shared/entity/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('client')
@Unique(['id'])
export default class Client extends BaseEntity {
  @Column({ type: 'varchar' })
  @ApiProperty({example: "Levis", description: "Client's name."})
  clientName: string;

  @OneToMany(
    (_type) => AppointmentEntity,
    (appointment) => appointment.client,
    { eager: true },
  )
  appointments: AppointmentEntity[];
}

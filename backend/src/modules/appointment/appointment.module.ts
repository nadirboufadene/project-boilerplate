import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import AppointmentController from './appointment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppointmentEntity from './entity/appointment.entity';
import AppointmentService from './appointment.service';
import ClientEntity from '../client/entity/client.entity';
import StaffMemberEntity from '../staff-member/entity/staff_member.entity';
import StaffMemberModule from '../staff-member/staff_member.module';
import ClientModule from '../client/client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AppointmentEntity,
      StaffMemberEntity,
      ClientEntity,
    ]),
    StaffMemberModule,
    ClientModule,
  ],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export default class AppointmentModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: 'appointments/', method: RequestMethod.GET },
        { path: 'appointments', method: RequestMethod.POST },
      );
  }
}

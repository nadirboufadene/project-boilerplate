import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import StaffMemberModule from './modules/staff-member/staff_member.module';
import AppointmentModule from './modules/appointment/appointment.module';
import ClientModule from './modules/client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    StaffMemberModule,
    AppointmentModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

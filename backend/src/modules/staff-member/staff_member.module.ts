import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import StaffMemberController from './staff_member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import StaffMemberEntity from './entity/staff_member.entity';
import StaffMemberService from './staff_member.service';

@Module({
  imports: [TypeOrmModule.forFeature([StaffMemberEntity])],
  providers: [StaffMemberService],
  controllers: [StaffMemberController],
})
export default class StaffMemberModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: 'staff_members/', method: RequestMethod.GET },
        { path: 'staff_members', method: RequestMethod.POST },
      );
  }
}

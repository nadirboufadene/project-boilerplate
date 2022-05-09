import { Get, Post, Controller, Body } from '@nestjs/common';
import AppointmentService from './appointment.service';

import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import AppointmentEntity from './entity/appointment.entity';
import AppointmentDto from './dto/appointment.dto';

@ApiBearerAuth()
@ApiTags('appointments')
@Controller()
export default class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('appointments')
  @ApiResponse({
    status: 200,
    description: 'List all Appointments',
    type: [AppointmentEntity],
  })
  async getAll(): Promise<AppointmentEntity[]> {
    return await this.appointmentService.findAll();
  }

  @Post('appointments')
  @ApiBody({ type: AppointmentDto })
  @ApiResponse({
    status: 201,
    description: 'Create Appointment',
    type: AppointmentEntity,
  })
  async create(
    @Body() appointmentData: AppointmentDto,
  ): Promise<AppointmentEntity> {
    return await this.appointmentService.create(appointmentData);
  }
}

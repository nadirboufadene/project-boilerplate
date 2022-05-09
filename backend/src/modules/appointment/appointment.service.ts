import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import AppointmentEntity from './entity/appointment.entity';
import AppointmentDto from './dto/appointment.dto';

import { validate } from 'class-validator';
import StaffMemberEntity from '../staff-member/entity/staff_member.entity';
import ClientEntity from '../client/entity/client.entity';

@Injectable()
export default class AppointmentService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly appointmentRepository: Repository<AppointmentEntity>,
    @InjectRepository(StaffMemberEntity)
    private readonly staffMemberRepository: Repository<StaffMemberEntity>,
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  private validateStDateAndEndDate(startingDate: string, endingDate: string): void {
    const valid = +new Date(startingDate) < +new Date(endingDate);
    if (!valid) {
      throw new HttpException(
        { message: 'endingDate should come after startingDate', statusCode: HttpStatus.BAD_REQUEST },
        HttpStatus.BAD_REQUEST,
      ); 
    }
  }

  async findAll(): Promise<AppointmentEntity[]> {
    return await this.appointmentRepository.find();
  }

  async findOne(where): Promise<AppointmentEntity> {
    const appointment = await this.appointmentRepository.findOneBy(where);
    return appointment;
  }

  async create(dto: AppointmentDto): Promise<AppointmentEntity> {
    const { clientId, staffMemberId, startingDate, endingDate, id } = dto;


    this.validateStDateAndEndDate(startingDate, endingDate);
    // create new appointment
    const newAppointment = new AppointmentEntity();
    newAppointment.id = id;
    newAppointment.startingDate = new Date(startingDate);
    newAppointment.endingDate = new Date(endingDate);
    try {
      newAppointment.client = await this.clientRepository.findOneBy({
        id: clientId,
      });
    } catch (e) {
      throw new NotFoundException(e);
    }

    try {
      newAppointment.staffMember =
        await this.staffMemberRepository.findOneByOrFail({ id: staffMemberId });
    } catch (e) {
      throw new NotFoundException(e);
    }

    try {
      newAppointment.client = await this.clientRepository.findOneByOrFail({
        id: clientId,
      });
    } catch (e) {
      throw new NotFoundException(e);
    }

    const errors = await validate(newAppointment);
    if (errors.length > 0) {
      const _errors = { username: 'Data sent is not valid.' };
      throw new HttpException(
        { message: 'Input data validation failed', _errors },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return await this.appointmentRepository.save(newAppointment);
    }
  }
}

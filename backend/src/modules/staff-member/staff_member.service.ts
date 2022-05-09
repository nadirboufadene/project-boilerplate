import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import StaffMemberEntity from './entity/staff_member.entity';
import StaffMemberDto from './dto/staff_member.dto';

import { validate } from 'class-validator';
import { IdAlreadyInUseException } from '../../shared/exceptions/http.exceptions';
import { plainToClass } from 'class-transformer';

@Injectable()
export default class StaffMemberService {
  constructor(
    @InjectRepository(StaffMemberEntity)
    private readonly staffMemberRepository: Repository<StaffMemberEntity>,
  ) {}

  async findAll(): Promise<StaffMemberEntity[]> {
    return await this.staffMemberRepository.find();
  }

  async findOne(where): Promise<StaffMemberEntity> {
    const staffMember = await this.staffMemberRepository.findOneBy(where);
    return staffMember;
  }

  async create(dto: StaffMemberDto): Promise<StaffMemberEntity> {
    const { id } = dto;

    const alreadyExistingStaffMember =
      await this.staffMemberRepository.findOneBy({ id: id });
    if (alreadyExistingStaffMember) {
      throw IdAlreadyInUseException;
    }

    // create new staffMember
    const newStaffMember = plainToClass(StaffMemberEntity, dto);

    const errors = await validate(newStaffMember);
    if (errors.length > 0) {
      const _errors = { username: 'Userinput is not valid.' };
      throw new HttpException(
        { message: 'Input data validation failed', _errors },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return await this.staffMemberRepository.save(newStaffMember);
    }
  }
}

import { Get, Post, Controller, Body } from '@nestjs/common';
import StaffMemberService from './staff_member.service';

import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import StaffMemberEntity from './entity/staff_member.entity';
import StaffMemberDto from './dto/staff_member.dto';

@ApiBearerAuth()
@ApiTags('staff-members')
@Controller()
export default class StaffMemberController {
  constructor(private readonly staffMemberService: StaffMemberService) {}

  @Get('staff-members')
  @ApiResponse({
    status: 200,
    description: 'List all StaffMembers.',
    type: [StaffMemberEntity],
  })
  async getAll(): Promise<StaffMemberEntity[]> {
    return await this.staffMemberService.findAll();
  }

  @Post('staff-members')
  @ApiBody({ type: StaffMemberDto })
  @ApiResponse({
    status: 201,
    description: 'Create StaffMember',
    type: StaffMemberEntity,
  })
  async create(
    @Body() staffMemberData: StaffMemberDto,
  ): Promise<StaffMemberEntity> {
    return await this.staffMemberService.create(staffMemberData);
  }
}

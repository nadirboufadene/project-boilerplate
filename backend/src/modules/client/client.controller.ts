import { Get, Post, Controller, Body } from '@nestjs/common';
import ClientService from './client.service';

import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import ClientEntity from './entity/client.entity';
import ClientDto from './dto/client.dto';

@ApiBearerAuth()
@ApiTags('clients')
@Controller()
export default class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('clients')
  @ApiResponse({
    status: 200,
    description: 'List all Clients',
    type: [ClientEntity],
  })
  async getAll(): Promise<ClientEntity[]> {
    return await this.clientService.findAll();
  }

  @Post('clients')
  @ApiBody({ type: ClientDto })
  @ApiResponse({
    status: 201,
    description: 'Create Client',
    type: ClientEntity,
  })
  async create(@Body() clientData: ClientEntity): Promise<ClientEntity> {
    return await this.clientService.create(clientData);
  }
}

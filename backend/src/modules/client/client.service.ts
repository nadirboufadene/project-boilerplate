import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ClientEntity from './entity/client.entity';
import ClientDto from './dto/client.dto';

import { validate } from 'class-validator';
import { IdAlreadyInUseException } from 'src/shared/exceptions/http.exceptions';
import { plainToClass } from 'class-transformer';

@Injectable()
export default class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async findAll(): Promise<ClientEntity[]> {
    return await this.clientRepository.find();
  }

  async findOne(where): Promise<ClientEntity> {
    const client = await this.clientRepository.findOneBy(where);
    return client;
  }

  async create(dto: ClientDto): Promise<ClientEntity> {
    const { id } = dto;
    const alreadyExistingClient = await this.clientRepository.findOneBy({
      id: id,
    });
    if (alreadyExistingClient) {
      throw IdAlreadyInUseException;
    }

    // create new client
    const newClient = plainToClass(ClientEntity, dto);

    const errors = await validate(newClient);
    if (errors.length > 0) {
      const _errors = { username: 'Data is not valid.' };
      throw new HttpException(
        { message: 'Input data validation failed', _errors },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return await this.clientRepository.save(newClient);
    }
  }
}

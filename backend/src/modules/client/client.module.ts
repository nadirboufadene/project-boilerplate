import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import ClientController from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ClientEntity from './entity/client.entity';
import ClientService from './client.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  providers: [ClientService],
  controllers: [ClientController],
})
export default class ClientModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes(
        { path: 'clients/', method: RequestMethod.GET },
        { path: 'clients', method: RequestMethod.POST },
      );
  }
}

import { DataSource, DataSourceOptions } from 'typeorm';
import StaffMemberEntity from './modules/staff-member/entity/staff_member.entity';
import ClientEntity from './modules/client/entity/client.entity';
import AppointmentEntity from './modules/appointment/entity/appointment.entity';

const DEFAULT_DB_HOST = 'postgres-db';
const DEFAULT_DB_PORT = 5432;
const DEFAULT_DB_USERNAME = 'postgres';
const DEFAULT_DB_PASSWORD = 'postgres';
const DEFAULT_DB_NAME = 'tododb';

const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || DEFAULT_DB_HOST,
  port: +process.env.POSTGRES_PORT || DEFAULT_DB_PORT,
  username: process.env.DB_USERNAME || DEFAULT_DB_USERNAME,
  password: process.env.DB_PASSWORD || DEFAULT_DB_PASSWORD,
  database: process.env.POSTGRES_DB || DEFAULT_DB_NAME,
  entities: [AppointmentEntity, ClientEntity, StaffMemberEntity],
  migrationsRun: false,
  logging: true,
  migrations: [
    __dirname + '/**/migrations/**/*.ts',
    __dirname + '/**/migrations/**/*.js',
  ],
  synchronize: false,
};

export const dataSource = new DataSource(typeOrmConfig);

export default typeOrmConfig;

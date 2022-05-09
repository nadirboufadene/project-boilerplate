import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
@Unique(['id'])
export default class BaseAppEntity extends BaseEntity {
  @Column({ type: 'uuid' })
  @PrimaryColumn('uuid')
  @ApiProperty({example: '46fb5910-ccb7-11ec-9d64-0242ac120057', 'description': 'Primary key, type uuid.'})
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  @ApiProperty({example: '2022-05-05T20:21:56.473Z', 'description': 'Datetime of object creation.'})
  created: string;

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({example: '2022-05-05T20:21:56.473Z', 'description': 'Datetime of object last update.'})
  updated: string;

  @DeleteDateColumn({ type: 'timestamp' })
  @ApiProperty({examples: ['2022-05-05T20:21:56.473Z', null], 'description': 'Datetime of object soft delete, null if not deleted.'})
  deleted: string;

  @VersionColumn({ type: 'int' })
  @ApiProperty({example: 1, 'description': 'Current version of the object.'})
  version: number;
}

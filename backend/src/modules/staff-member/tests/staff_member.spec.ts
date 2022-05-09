import { Test, TestingModule } from '@nestjs/testing';
import StaffMemberService from '../staff_member.service';
import StaffMemberController from '../staff_member.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import StaffMemberEntity from '../entity/staff_member.entity';
import typeOrmConfig from '../../../typeorm.config';
import StaffMemberDto from '../dto/staff_member.dto';
import { plainToClass } from 'class-transformer';

describe('AppController', () => {
  let staffMemberController: StaffMemberController;
  let staffMemberService: StaffMemberService;
  let staffMemberEntity: StaffMemberEntity;

  const mockedComplementaryDtoProperty = {
    deleted: null,
    created: '2022-05-07T10:37:21.598Z',
    updated: '2022-05-07T10:37:21.598Z',
    version: 1,
  };
  const staffMemberData: StaffMemberDto = {
    id: 'c3d9a83e-7671-484f-be38-b224cfc3c045',
    firstname: 'John',
    lastname: 'Doe',
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [StaffMemberController],
      providers: [
        StaffMemberService,
        {
          provide: getRepositoryToken(StaffMemberEntity, typeOrmConfig),
          useValue: {
            find: jest.fn(),
            findOneBy: jest.fn((dto: StaffMemberDto) => {
              return [
                {
                  ...dto,
                  ...mockedComplementaryDtoProperty,
                },
              ];
            }),
            save: jest.fn((dto: StaffMemberDto) => {
              return {
                ...dto,
                ...mockedComplementaryDtoProperty,
              };
            }),
          },
        },
      ],
    }).compile();

    staffMemberController = moduleRef.get<StaffMemberController>(
      StaffMemberController,
    );
    staffMemberService = moduleRef.get<StaffMemberService>(StaffMemberService);
    staffMemberEntity = moduleRef.get<StaffMemberEntity>(StaffMemberEntity);
  });

  describe('staffMemberController.getAll', () => {
    it('should return an empty', () => {
      expect(staffMemberController.getAll()).toMatchObject({});
    });
  });

  describe('staffMemberController.create', () => {
    const expectedReturn = plainToClass(StaffMemberEntity, {
      ...staffMemberData,
      ...mockedComplementaryDtoProperty,
    });

    it('should create expected StaffMember', () => {
      staffMemberController.create(staffMemberData).then((data) => {
        expect(data).toEqual<StaffMemberEntity>(expectedReturn);
      });
    });
  });

  /*  describe('staffMemberService.create', () => {
    const expectedReturn = plainToClass(StaffMemberEntity, {
      ...staffMemberData,
      ...mockedComplementaryDtoProperty,
    });
    it('should create expected StaffMember', () => {
      staffMemberEntity.findOneBy.mockImplementation(() => {
        return [];
      });
      staffMemberService.create(staffMemberData).then((data) => {
        expect(data).toEqual<StaffMemberEntity>(expectedReturn);
      });
    });
  }); */
});

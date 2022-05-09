import { Components } from './backend-connector/client';

export type IAppointmentState = {
    appointments: AppointmentEntity[]
    isLoading: boolean,
    err: any
}

export type IClientState = {
    clients: ClientEntity[]
    isLoading: boolean,
    err: any
}

export type IStaffMemberState = {
    staffMembers: StaffMemberEntity[]
    isLoading: boolean,
    err: any
}

export type Action = {
  type: string;
  payload: any;
};

export type AppointmentDto = Components.Schemas.AppointmentDto;
export type AppointmentEntity = Components.Schemas.AppointmentEntity;

export type ClientDto = Components.Schemas.ClientDto;
export type ClientEntity = Components.Schemas.ClientEntity;

export type StaffMemberDto = Components.Schemas.StaffMemberDto;
export type StaffMemberEntity = Components.Schemas.StaffMemberEntity;

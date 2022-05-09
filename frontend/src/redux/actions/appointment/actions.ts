import { Dispatch } from 'react';

import * as types from './types';

import { AppointmentDto, AppointmentEntity } from '../../../types';

import backendClient from '../../../backend-connector/backend-client';

const apiClient = backendClient;

//----- GET Appointments ----- //
const getAllAppointmentsStart = () => {
  return {
    type: types.GET_ALL_APPOINTMENTS__START
  };
};

const getAllAppointmentsSuccess = (data: AppointmentEntity[]) => {
  return {
    type: types.GET_ALL_APPOINTMENTS__SUCCESS,
    payload: data
  };
};

const getAllAppointmentsFailure = (data: any) => {
  return {
    type: types.GET_ALL_APPOINTMENTS__FAILURE,
    payload: data
  };
};

export const getAllTodos = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(getAllAppointmentsStart());
    const res: any = await apiClient.client?.AppointmentController_getAll();
    dispatch(getAllAppointmentsSuccess(res.data));
  } catch (err) {
    dispatch(getAllAppointmentsFailure(err));
  }
};

//----- CREATE Appointment ----- //
const createAppointmentStart = () => {
  return {
    type: types.CREATE_APPOINTMENT__START
  };
};
const createAppointmentSuccess = (data: AppointmentEntity) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_APPOINTMENT__SUCCESS,
    payload: data
  });
};
const createAppointmentFailure = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_APPOINTMENT__FAILURE,
    payload: err
  });
};
export const createAppointment = (content: AppointmentDto) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(createAppointmentStart());
    const res = await apiClient.client?.AppointmentController_create(null, content);
    dispatch(createAppointmentSuccess(res!.data));
  } catch (err) {
    dispatch(createAppointmentFailure(err));
  }
};

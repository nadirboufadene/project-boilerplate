import { Dispatch } from 'react';

import * as types from './types';
import { ClientEntity, ClientDto } from '../../../types';
import backendClient from '../../../backend-connector/backend-client';



const apiClient = backendClient;

//----- GET Clients ----- //
const getAllClientsStart = () => {
  return {
    type: types.GET_ALL_CLIENTS__START
  };
};

const getAllClientsSuccess = (data: ClientEntity[]) => {
  return {
    type: types.GET_ALL_CLIENTS__SUCCESS,
    payload: data
  };
};

const getAllClientsFailure = (data: any) => {
  return {
    type: types.GET_ALL_CLIENTS__FAILURE,
    payload: data
  };
};

export const getAllTodos = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(getAllClientsStart());
    const res: any = await apiClient.client?.ClientController_getAll();
    dispatch(getAllClientsSuccess(res.data));
  } catch (err) {
    dispatch(getAllClientsFailure(err));
  }
};

//----- CREATE Client ----- //
const createClientStart = () => {
  return {
    type: types.CREATE_CLIENT__START
  };
};
const createClientSuccess = (data: ClientEntity) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_CLIENT__SUCCESS,
    payload: data
  });
};
const createClientFailure = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_CLIENT__FAILURE,
    payload: err
  });
};
export const createClient = (content: ClientDto) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(createClientStart());
    const res = await apiClient.client?.ClientController_create(null, content);
    dispatch(createClientSuccess(res!.data));
  } catch (err) {
    dispatch(createClientFailure(err));
  }
};

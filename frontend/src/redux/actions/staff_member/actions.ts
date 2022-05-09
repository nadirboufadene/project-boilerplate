import { Dispatch } from 'react';

import * as types from './types';

import { StaffMemberDto, StaffMemberEntity } from '../../../types';

import backendClient from '../../../backend-connector/backend-client';


const apiClient = backendClient;

//----- GET StaffMembers ----- //
const getAllStaffMembersStart = () => {
  return {
    type: types.GET_ALL_STAFFMEMBERS__START
  };
};

const getAllStaffMembersSuccess = (data: StaffMemberEntity[]) => {
  return {
    type: types.GET_ALL_STAFFMEMBERS__SUCCESS,
    payload: data
  };
};

const getAllStaffMembersFailure = (data: any) => {
  return {
    type: types.GET_ALL_STAFFMEMBERS__FAILURE,
    payload: data
  };
};

export const getAllTodos = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(getAllStaffMembersStart());
    const res: any = await apiClient.client?.StaffMemberController_getAll();
    dispatch(getAllStaffMembersSuccess(res.data));
  } catch (err) {
    dispatch(getAllStaffMembersFailure(err));
  }
};

//----- CREATE StaffMember ----- //
const createStaffMemberStart = () => {
  return {
    type: types.CREATE_STAFFMEMBER__START
  };
};
const createStaffMemberSuccess = (data: StaffMemberEntity) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_STAFFMEMBER__SUCCESS,
    payload: data
  });
};
const createStaffMemberFailure = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_STAFFMEMBER__FAILURE,
    payload: err
  });
};
export const createStaffMember = (content: StaffMemberDto) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(createStaffMemberStart());
    const res = await apiClient.client?.StaffMemberController_create(null, content);
    dispatch(createStaffMemberSuccess(res!.data));
  } catch (err) {
    dispatch(createStaffMemberFailure(err));
  }
};

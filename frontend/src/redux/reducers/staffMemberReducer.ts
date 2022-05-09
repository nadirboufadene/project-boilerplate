import * as types from '../actions/staff_member/types';

import { IStaffMemberState, Action } from '../../types';

const initialState: IStaffMemberState = {
  staffMembers: [],
  isLoading: true,
  err: null
};

export const staffMemberReducer = (
  state = initialState,
  action: Action
): IStaffMemberState => {
  switch (action.type) {
    case types.GET_ALL_STAFFMEMBERS__START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_ALL_STAFFMEMBERS__SUCCESS:
      return {
        ...state,
        staffMembers: action.payload,
        isLoading: false,
        err: null
      };
    case types.GET_ALL_STAFFMEMBERS__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.CREATE_STAFFMEMBER__START:
      return {
        ...state
      };
    case types.CREATE_STAFFMEMBER__SUCCESS:
      return {
        ...state,
        staffMembers: [action.payload, ...state.staffMembers],
        isLoading: false,
        err: null
      };
    case types.CREATE_STAFFMEMBER__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};

import * as types from '../actions/appointment/types';

import { IAppointmentState, Action } from '../../types';

const initialState: IAppointmentState = {
  appointments: [],
  isLoading: true,
  err: null
};

export const appointmentReducer = (
  state = initialState,
  action: Action
): IAppointmentState => {
  switch (action.type) {
    case types.GET_ALL_APPOINTMENTS__START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_ALL_APPOINTMENTS__SUCCESS:
      return {
        ...state,
        appointments: action.payload,
        isLoading: false,
        err: null
      };
    case types.GET_ALL_APPOINTMENTS__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.CREATE_APPOINTMENT__START:
      return {
        ...state
      };
    case types.CREATE_APPOINTMENT__SUCCESS:
      return {
        ...state,
        appointments: [action.payload, ...state.appointments],
        isLoading: false,
        err: null
      };
    case types.CREATE_APPOINTMENT__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};

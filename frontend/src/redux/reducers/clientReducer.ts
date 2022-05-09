import * as types from '../actions/client/types';

import { IClientState, Action } from '../../types';

const initialState: IClientState = {
  clients: [],
  isLoading: true,
  err: null
};

export const clientReducer = (
  state = initialState,
  action: Action
): IClientState => {
  switch (action.type) {
    case types.GET_ALL_CLIENTS__START:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_ALL_CLIENTS__SUCCESS:
      return {
        ...state,
        clients: action.payload,
        isLoading: false,
        err: null
      };
    case types.GET_ALL_CLIENTS__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.CREATE_CLIENT__START:
      return {
        ...state
      };
    case types.CREATE_CLIENT__SUCCESS:
      return {
        ...state,
        clients: [action.payload, ...state.clients],
        isLoading: false,
        err: null
      };
    case types.CREATE_CLIENT__FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    default:
      return state;
  }
};

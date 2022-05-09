import { combineReducers } from 'redux';
import { appointmentReducer } from './appointmentReducer';
import { clientReducer } from './clientReducer';
import { staffMemberReducer } from './staffMemberReducer';

export const rootReducer = combineReducers({
  appointments: appointmentReducer,
  clients: clientReducer,
  staffMembers: staffMemberReducer,
});

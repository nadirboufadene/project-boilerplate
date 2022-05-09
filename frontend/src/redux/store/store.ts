import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';

const preloadedState = {
  clients: {clients: [], isLoading: true, err: null},
  staffMembers: {staffMembers: [], isLoading: true, err: null},
  appointments: {appointments: [], isLoading: true, err: null},
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;

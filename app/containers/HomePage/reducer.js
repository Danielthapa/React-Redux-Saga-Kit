/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { createReducer } from '@reduxjs/toolkit';
import LocalDb from '../../localStorage';
import { NavHistory } from '../../utils/HistoryNav';
import {
  changePassword,
  changeUsername,
  userLogout,
  userLogoutFailure,
  userLogoutSuccess,
} from './actions';

// The initial state of the App
export const initialState = {
  username: '',
  password: '',
};

const homeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changePassword, (state, action) => {
      state['password'] = action.payload.password;
    })
    .addCase(changeUsername, (state, action) => {
      state['username'] = action.payload.username;
    });

  builder
    .addCase(userLogout, (state, action) => {})
    .addCase(userLogoutSuccess, (State, action) => {
      LocalDb.clearTokens();
      NavHistory.navigate('/login');
    })
    .addCase(userLogoutFailure, (state, action) => {});
});

export default homeReducer;

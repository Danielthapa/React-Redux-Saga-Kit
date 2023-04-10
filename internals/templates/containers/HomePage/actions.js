/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { createAction } from '@reduxjs/toolkit';
import { CHANGE_PASSWORD, CHANGE_USERNAME, HomeConstants } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */

// export const changeUsername = (username) => ({
//   type: CHANGE_USERNAME,
//   username,
// });

export const changePassword = createAction(
  CHANGE_PASSWORD,
  function prepare(password) {
    return {
      payload: {
        password,
      },
    };
  },
);

export const changeUsername = createAction(
  CHANGE_USERNAME,
  function prepare(username) {
    return {
      payload: {
        username,
      },
    };
  },
);

export const userLogout = createAction(HomeConstants.USER_LOGOUT);

export const userLogoutSuccess = createAction(
  HomeConstants.USER_LOGOUT_SUCCESS,
  function prepare(success) {
    return {
      payload: {
        success,
      },
    };
  },
);

export const userLogoutFailure = createAction(
  HomeConstants.USER_LOGOUT_FAILURE,
  function prepare(error) {
    return {
      payload: {
        error,
      },
    };
  },
);

/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = (state) => state.home || initialState;

const makeSelectHome = (key) => () =>
  createSelector(selectHome, (substate) => substate[key]);

const makeSelectUsername = makeSelectHome('username');

export { selectHome, makeSelectUsername };

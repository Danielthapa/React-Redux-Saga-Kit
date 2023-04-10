/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

const createReducer = (injectedReducers = {}) => {
  const wrappedReducers = Object.entries(injectedReducers).reduce(
    (result, [key, reducer]) => {
      result[key] = (state, action) => {
        if (action.type === `${key.toUpperCase()}_CLEAR_STATE`) {
          return reducer(undefined, action);
        }
        if (action.type === 'DESTROY_SESSION') {
          return reducer(undefined, action);
        }
        return reducer(state, action);
      };
      return result;
    },
    {},
  );

  const rootReducer = combineReducers({
    global: globalReducer,
    language: languageProviderReducer,
    ...wrappedReducers,
    // ...injectedReducers,
  });
  return rootReducer;
};

export default createReducer;

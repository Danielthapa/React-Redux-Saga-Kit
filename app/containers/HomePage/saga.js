/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import APIEndPoints, { APIHeadersWithAuth } from '../../globalConstants';
import { userLogoutFailure, userLogoutSuccess } from './actions';
import { HomeConstants } from './constants';
import { invalidTokenAction, refreshToken } from '../../utils/request';
import LocalDb from '../../localStorage';
import { store } from '../../app';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* handleResponseError(
  error,
  refreshCallback,
  failureCallback,
  action,
) {
  if (error.message === 'unauthorized') {
    const refreshSuccessful = yield call(refreshToken);
    if (refreshSuccessful) {
      yield call(refreshCallback, action);
    } else {
      yield call(invalidTokenAction);
    }
  } else {
    yield put(failureCallback(error.message));
  }
}

export function* userLogoutSaga() {
  try {
    const res = yield call(request, APIEndPoints.auth.USER_LOGOUT, {
      method: 'POST',
      headers: APIHeadersWithAuth(),
      body: JSON.stringify({ refreshToken: LocalDb.getRefreshToken() }),
    });
    if (res.error === true) {
      yield put(userLogoutFailure(res.msg));
    } else {
      yield put(userLogoutSuccess(res.data));
      store.dispatch({ type: 'DESTROY_SESSION' });
    }
  } catch (error) {
    yield call(handleResponseError, error, userLogoutSaga, userLogoutFailure);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(HomeConstants.USER_LOGOUT, userLogoutSaga);
}

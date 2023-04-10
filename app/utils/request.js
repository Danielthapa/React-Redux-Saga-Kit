import { store } from '../app';
import APIEndPoints, { APIHeaders } from '../globalConstants';
import LocalDb from '../localStorage';
import { NavHistory } from './HistoryNav';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 400) {
    return response;
  }

  if (response.status === 401 || response.status === 403) {
    const error = new Error();
    error.message = 'unauthorized';
    throw error;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options, callback) {
  return fetch(url, options)
    .then((response) => checkStatus(response, callback))
    .then(parseJSON)
    .catch(() => {
      throw new Error('Network error');
    });
}

export function invalidTokenAction() {
  LocalDb.clearTokens();
  store.dispatch({ type: 'DESTROY_SESSION' });
  NavHistory.navigate('/login');
}
/**
 *  GET NEW ACCESS TOKEN FROM REFRESH TOKEN
 *
 */
export function refreshToken() {
  const refreshToken = LocalDb.getRefreshToken();
  if (!refreshToken) {
    console.log('no refresh token');
    invalidTokenAction();
    return false;
  }
  return fetch(APIEndPoints.auth.REFRESH_TOKEN, {
    method: 'POST',
    headers: APIHeaders,
    body: JSON.stringify({
      refreshToken: LocalDb.getRefreshToken(),
    }),
  })
    .then((response) => {
      if (response.status === 401 || response.status === 403) {
        invalidTokenAction();
        return Promise.reject('unauthorized');
      }

      if (response.status >= 200 && response.status < 300) {
        return response;
      }

      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    })
    .then((response) => {
      return response.json().then((data) => {
        const tokens = data?.data;
        LocalDb.setTokens({ accessToken: tokens.accessToken });
        return true;
      });
    });
}

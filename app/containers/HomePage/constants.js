/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

const constantKey = 'hms/Home';

export const CHANGE_USERNAME = 'hms/Home/CHANGE_USERNAME';

export const CHANGE_PASSWORD = 'hms/Home/CHANGE_PASSWORD';

export const HomeConstants = {
  USER_LOGOUT: `${constantKey}/USER_LOGOUT`,
  USER_LOGOUT_SUCCESS: `${constantKey}/USER_LOGOUT_SUCCESS`,
  USER_LOGOUT_FAILURE: `${constantKey}/USER_LOGOUT_FAILURE`,
};

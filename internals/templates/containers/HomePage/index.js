/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import useInjectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername, changePassword } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Home from './Home';

const key = 'home';

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onChangePassword: (password) => dispatch(changePassword(password)),
  };
}

const withReducer = useInjectReducer({ key, reducer });

const withSaga = useInjectSaga({ key, saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withReducer, withSaga, memo)(Home);

import React from 'react';
import { Navigate, Outlet, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocalDb from '../localStorage';

export const PrivateRoute = () => {
  const auth = LocalDb.isUserLoggedIn();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  component: PropTypes.any,
  key: PropTypes.any,
};
export default PrivateRoute;

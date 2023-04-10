import React from 'react';
import { Navigate, Outlet, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocalDb from '../localStorage';

const PublicRoute = () => {
  const auth = LocalDb.isUserLoggedIn();
  return auth ? <Navigate to="/" /> : <Outlet />;
};

PublicRoute.propTypes = {
  component: PropTypes.any,
};

export default PublicRoute;

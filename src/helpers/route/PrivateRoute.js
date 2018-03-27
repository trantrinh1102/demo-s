import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, location, ...restProps }) => {
  if (!isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    )
  }

  return <Route { ...restProps } />;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => {
  const { isAuthenticated } = state.login;

  return {
    isAuthenticated,
  }
};

export default connect(mapStateToProps)(PrivateRoute);

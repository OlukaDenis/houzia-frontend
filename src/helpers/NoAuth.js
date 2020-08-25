import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RequireNoAuth = ({ token }) => {
  if (token) { return <Redirect to="/" />; }
  return null;
};

const mapStateToProps = state => (
  { token: state.authReducer.token }
);

export default connect(mapStateToProps, null)(RequireNoAuth);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const RequireNoAuth = ({ token }) => {
  if (token) { return <Redirect to="/" />; }
  return null;
};

const mapStateToProps = state => (
  { token: state.authReducer.token }
);

RequireNoAuth.propTypes = {
  token: PropTypes.string,
};

RequireNoAuth.defaultProps = {
  token: null,
};

export default connect(mapStateToProps, null)(RequireNoAuth);

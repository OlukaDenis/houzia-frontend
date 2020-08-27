import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { setToken } from '../redux/actions/actionCreators';
import CurrentUser from './CurrentUser';

const cookies = new Cookies();

const RequireAuth = ({ token, setToken }) => {
  if (!token) {
    const cookieToken = cookies.get('token');
    if (cookieToken) {
      setToken(cookieToken);
      return null;
    }

    return <Redirect to="/signin" />;
  }

  return <CurrentUser />;
};

const mapDispatchToProps = dispatch => (
  {
    setToken: token => dispatch(setToken(token)),
  }
);

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);

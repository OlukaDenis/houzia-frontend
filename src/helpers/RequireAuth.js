import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { setToken } from '../redux/actions/actionCreators';

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
  return null;
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

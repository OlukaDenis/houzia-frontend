import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { fetchCurrentUser } from '../redux/actions/authAction';
import { parseToken } from '../helpers/appUtils';

const CurentUser = ({ token, setCurrentUser }) => {
  
  const user_id = parseToken(token);
  useEffect(() => {
    setCurrentUser(user_id, token);
  }, [setCurrentUser]);

    return null;
  }

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: (user_id, token) => dispatch(fetchCurrentUser(user_id, token)),
  }
);

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurentUser);

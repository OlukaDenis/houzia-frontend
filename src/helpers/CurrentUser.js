import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../redux/actions/authAction';
import { parseToken } from './appUtils';

const CurentUser = ({ token, setCurrentUser }) => {
  const userId = parseToken(token);
  useEffect(() => {
    setCurrentUser(userId, token);
  }, [setCurrentUser]);

  return null;
};

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: (userId, token) => dispatch(fetchCurrentUser(userId, token)),
  }
);

const mapStateToProps = state => (
  {
    token: state.authReducer.token,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CurentUser);

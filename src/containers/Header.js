import React from 'react';
import { connect } from 'react-redux';
import { setToken } from '../redux/actions/actionCreators';

const Header = ({ token, setToken, user }) => {
  const handleLogoutClick = () => {
    setToken();
  };

  return (
    <header className="header">
      <h2 className="heading-title">HOUZIA</h2>
      {token && <button type="button" onClick={handleLogoutClick} onKeyDown={handleLogoutClick} className="logout">Logout</button>}
    </header>
  );
};


const mapStateToProps = state => ({
    token: state.authReducer.token,
    user: state.authReducer.user
  });

const mapDispatchToProps = dispatch => ({
    setToken: () => dispatch(setToken('')),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Header);

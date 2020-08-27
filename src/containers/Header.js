import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userShape } from '../helpers/propTypeShapes';
import { setToken } from '../redux/actions/actionCreators';

const Header = ({ token, setToken, user }) => {
  const handleLogoutClick = () => {
    setToken();
  };

  return (
    <header className="header">
      <h2 className="heading-title">HOUZIA</h2>
      {
       user
       && (
       <div>
         <Link to="/">Home</Link>
         {user.admin && <Link to="/newHouse">New House</Link>}
         <Link to="/profile">My Profile</Link>
       </div>
       )
       }
      {token && <button type="button" onClick={handleLogoutClick} onKeyDown={handleLogoutClick} className="logout">Logout</button>}
    </header>
  );
};

const mapStateToProps = state => ({
  token: state.authReducer.token,
  user: state.authReducer.userProfile,
});

const mapDispatchToProps = dispatch => ({
  setToken: () => dispatch(setToken('')),
});

Header.propTypes = {
  user: PropTypes.objectOf(userShape).isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

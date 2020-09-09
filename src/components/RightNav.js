import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { userShape } from '../helpers/propTypeShapes';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 30px;

  li {
    padding: 0 10px;
    font-size: 18px;
    font-weight: 700;
    align-self: center;
    margin: 0 0 15px 0;

    a {
      color: #333;
      text-decoration: none;
      &:hover {
        color: #ff751a;
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #333;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin-top: 0;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    li {
      a {
        color: #eee;
      }
    }
  }
`;

const RightNav = ({
  token, setToken, user, open,
}) => {
  const handleLogoutClick = () => {
    setToken();
  };

  return (
    <Ul open={open}>
      <li><Link to="/">Home</Link></li>
      {user.admin && (
      <li>
        <Link to="/newHouse">New House</Link>
        {' '}
      </li>
      )}
      <li>
        <Link to="/profile">My Profile</Link>
        {' '}
      </li>
      {token && (
      <li>
        <button
          type="button"
          onClick={handleLogoutClick}
          onKeyDown={handleLogoutClick}
          className="logout btn btn-sm h-btn h-btn-outlined"
        >
          Logout
        </button>
        {' '}
      </li>
      )}
    </Ul>
  );
};

RightNav.propTypes = {
  user: userShape.isRequired,
  token: PropTypes.string.isRequired,
  setToken: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default RightNav;

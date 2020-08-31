import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from '../components/Hamburger';
import '../styles/Header.scss';

const Nav = styled.nav`
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 555;
  background-color: #fff;
`;

const Header = () => (
  <Nav>
    <Link to="/">
      <div>
        <img
          src="images/logo.png"
          style={{ width: 40, height: 40 }}
          alt="Houzia Logo"
        />
      </div>
    </Link>
    <Hamburger />
  </Nav>
);

export default Header;

import React from 'react';
import Hamburger from '../components/Hamburger';
import '../styles/Header.scss';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 555;
  background-color: #fff;
`;

const Header = () => (
  <Nav>
    <h2 className="logo-title">HOUZIA</h2>
    <Hamburger />
  </Nav>
);

export default Header;

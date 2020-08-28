import React from 'react';
import Hamburger from '../components/Hamburger';
import '../styles/Header.scss';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 555;
  background-color: #fff;
`;

const Header = () => {
  return (
    <Nav>
      <h2 className="heading-title">HOUZIA</h2>
      <Hamburger />
    </Nav>
  );
};

export default Header;

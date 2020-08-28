import React from 'react';
import Hamburger from '../components/Hamburger';
import '../styles/Header.scss';

const Header = () => {

  return (
    <nav id="navbar">
      <h2 className="heading-title">HOUZIA</h2>
      <Hamburger />
    </nav>
  );
};

export default Header;

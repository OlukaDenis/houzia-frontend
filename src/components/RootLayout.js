import React from 'react';
import PropTypes from 'prop-types';
import RequireAuth from '../helpers/RequireAuth';
import Header from '../containers/Header';
import Footer from './Footer';

const RootLayout = ({ children }) => (
  <section>
    <RequireAuth />
    <Header />
    {children}
    {children && <Footer />}
  </section>
);

RootLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RootLayout;

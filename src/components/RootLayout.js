import React from 'react';
import PropTypes from 'prop-types';
import RequireAuth from '../helpers/RequireAuth';
import Header from '../containers/Header';

const RootLayout = ({ children }) => (
  <div>
    <RequireAuth />
    <Header />
    {children}
  </div>
);

RootLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RootLayout;

import React from 'react';
import RequireAuth from '../helpers/RequireAuth';
import Header from '../containers/Header';

const RootLayout = ({ children }) => (
  <div>
    <RequireAuth />
    <Header />
    <hr />
    {children}
  </div>
);

export default RootLayout;

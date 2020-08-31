import React from 'react';

const withErrorHandling = WrappedComponent => ({ showError, children }) => (
  <WrappedComponent>
    {showError && <div className="error-message text-center">{showError}</div>}
    {children}
  </WrappedComponent>
);

export default withErrorHandling;

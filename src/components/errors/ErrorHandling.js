import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandling = WrappedComponent => ({ showError, children }) => (
  <WrappedComponent>
    {showError && <div className="error-message text-center">{showError}</div>}
    {children}
  </WrappedComponent>
);

ErrorHandling.displayName = 'ErrorHandling';

ErrorHandling.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showError: PropTypes.string.isRequired,
};

export default ErrorHandling;

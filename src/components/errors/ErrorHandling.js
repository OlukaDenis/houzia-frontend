/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const ErrorHandling = WrappedComponent => ({ showError, children }) => (
  <WrappedComponent>
    {showError && <div className="error-message text-center">{showError}</div>}
    {children}
  </WrappedComponent>
);

ErrorHandling.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  showError: PropTypes.string.isRequired,
};

export default ErrorHandling;

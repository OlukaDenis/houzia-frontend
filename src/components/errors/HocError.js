import React from 'react';
import withErrorHandling from './errorHandlingHoc';

const HocError = withErrorHandling(({ children }) => <div>{children}</div>);

export default HocError;

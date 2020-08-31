import React from 'react';
import ErrorHandling from './ErrorHandling';

const HocError = ErrorHandling(({ children }) => <div>{children}</div>);

export default HocError;

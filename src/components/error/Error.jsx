import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error }) => (
  <div>
    <span>{error}</span>
  </div>
);

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;

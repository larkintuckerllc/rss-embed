import React from 'react';
import PropTypes from 'prop-types';

const Centered = ({ text }) => (
  <div>{text}</div>
);
Centered.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Centered;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Marquee = ({ text }) => (
  <div id={styles.root}>{text}</div>
);
Marquee.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Marquee;

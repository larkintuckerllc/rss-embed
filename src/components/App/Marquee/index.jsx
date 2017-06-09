import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Marquee extends Component {
  componentDidMount() {
    this.rootEl = document.getElementById(styles.root);
    this.animate();
  }
  componentDidUpdate() {
    this.animate();
  }
  animate() {
    const { duration } = this.props;
    const windowWidth = window.innerWidth;
    const rootWidth = this.rootEl.offsetWidth;
    this.rootEl.style.transition = 'transform 0s linear';
    this.rootEl.style.transform = `translate(${windowWidth.toString()}px, -50%)`;
    setTimeout(() => {
      this.rootEl.style.transition = `transform ${(duration - 1).toString()}s linear`;
      this.rootEl.style.transform = `translate(-${rootWidth.toString()}px, -50%)`;
    }, 1000);
  }
  render() {
    const { text } = this.props;
    return (
      <div id={styles.root}>{text}</div>
    );
  }
}
Marquee.propTypes = {
  duration: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
export default Marquee;

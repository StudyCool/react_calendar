import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ModeButton.module.scss';

const ModeButton = ({children, onClick, ...rest}) => {
  return (
 <div className={styles.container} onClick={onClick}>
   {
children
   }
 </div>
  );
};
ModeButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
}

export default ModeButton;
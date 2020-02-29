import React, { Component } from 'react';
import styles from './Date.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const EventItem = props => {
  const { event: { isIn } } = props;
  return <li className={classNames(styles.event, { [styles.inEvent]: isIn })}/>;
};

EventItem.propTypes = {
  event: PropTypes.shape({
                           isIn: PropTypes.bool.isRequired,
                         })
};

const Date = (props) => {
  return <div> {
    date
  }
    <ul>
      <EventItem/>
      <EventItem/>
      <EventItem/>
    </ul>

  </div>;
};

export default Date;
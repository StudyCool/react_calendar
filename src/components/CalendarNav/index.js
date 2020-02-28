import React, { Component } from 'react';
import styles from './CalendarNav.module.css';
import ModeButton from '../ModeButton';

class CalendarNav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  render () {
    const { isMenuOpen } = this.state;

    return (
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div className={styles.navItem}></div>
          <div className={styles.currentItem}></div>
          <div className={styles.navItem}></div>
        </nav>
        {
          isMenuOpen && (
            <div className={styles.downMenu}>
              <ModeButton>This week</ModeButton>
              <ModeButton>This month</ModeButton>
            </div>
          )
        }


      </div>

    );

  }
}

export default CalendarNav;
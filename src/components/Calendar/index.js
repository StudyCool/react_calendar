import React, { Component } from 'react';
import styles from './Calendar.module.css';
import moment from 'moment';

class Calendar extends Component {
  constructor (props) {
    super(props);
  }

  renderWeekDayShort = () => {
    let weekDayShort = moment.weekdaysShort();
    console.log(weekDayShort);
    let weekDayShortName = weekDayShort.map(day => {
      console.log({ day });
      return (
        <ol className={styles.shortWeekDays} key={day}>
          {day}
        </ol>
      );
    });
  }

  render () {
    return (
      <div className={styles.calendarHeader}>
        {
          this.renderWeekDayShort()
        }
      </div>
  );
  }
}

export default Calendar;
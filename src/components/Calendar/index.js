import React, { Component } from 'react';
import styles from './Calendar.module.css';
import moment from 'moment';

class Calendar extends Component {
  constructor (props) {
    super(props);
  }

  renderWeekDayShort = () => {
    let weekDayShort = moment.weekdaysShort();
    //console.log(weekDayShort);
    let weekDayShortName = weekDayShort.map(day => {
      console.log({ day });
      return (
        <th className={styles.shortWeekDays} key={day}>
          {this.weekDayShortName}
        </th>
      );
    });
  }

  render () {
    return (
      <div className={styles.calendarHeader}>
        CALENDAR
        <table>

            {
              this.renderWeekDayShort()
            }

        </table>

      </div>
  );
  }
}

export default Calendar;
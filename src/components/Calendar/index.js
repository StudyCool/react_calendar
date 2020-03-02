import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import moment from 'moment';
import Month from './Month';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }
state = {

}
  renderWeekDayShort = () => {
    const weekDayShort = moment.weekdaysMin();
    let month = moment.months();
    const listWeekDays = weekDayShort.map((dayOfWeek) =>
        <td key={dayOfWeek} className={styles.calendarHeader}>
          {dayOfWeek.charAt(0)}
        </td>);
    return listWeekDays;
  };



  render() {
    return (
        <div>
          <table>
            <thead>
            <tr>
              {
                this.renderWeekDayShort()
              }
            </tr>
            </thead>
            <tbody>
           <Month/>
          </tbody>

          </table>

        </div>
    );
  }
}

export default Calendar;
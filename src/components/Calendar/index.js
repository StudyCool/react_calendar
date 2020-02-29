import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import moment from 'moment';

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };
    onDateClick = day => {}

    renderWeekDayShort = () => {
        const weekDayShort = moment.weekdaysMin();
        const listWeekDays = weekDayShort.map((dayOfWeek) =>
           <td key={dayOfWeek} className={styles.calendarHeader}>
                {dayOfWeek.charAt(0)}
            </td>)

        return listWeekDays;
    }

    render() {
        return (
            <div >
                <table><thead><tr>
                    {
                        this.renderWeekDayShort()
                    }
                </tr></thead></table>

            </div>
        );
    }
}

export default Calendar;
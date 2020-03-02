import React, {Component} from 'react';
import styles from './Month.module.scss';
import moment from "moment";
import Week from "../Week";
import {render} from 'react-dom';

class Month extends Component {
    constructor(props) {
        super(props);
      super(props);
    //  this.width = props.width || "320px";
      this.style = props.style || {};
      this.style.width = this.width; // add this

    }
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
    selectedDay: null
  }

  onDateClick = day => {
  };
  year = () => {
    return this.state.moment.format('Y');
  };
  daysInMonth = () => {
    return this.state.moment.daysInMonth();
  };

  firstDayOfMonth = () => {
    let firstDay = moment(this.state.moment).startOf('month').format('d');
    return firstDay;
  };

  currentDay = () => {
    return this.state.moment.format('D');
  };
  renderTotalSlots = () => {

  };

    render() {
      let blanks = [];
      for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(<td className="emptySlot">
          {''}
        </td>);
      }


      let daysInMonth = [];
      for (let d = 1; d <= this.daysInMonth(); d++) {
        let className = (d === this.currentDay() ? 'day currant-day' : 'day');
        daysInMonth.push(
            <td key={d} className={className}>
              <span>{d}</span>
            </td>
        );
      }

      let totalSlots = [...blanks, ...daysInMonth];
      let rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
        if ((i % 7) !== 0) {
          cells.push(row);
        } else {
          let insertRow = cells.slice();
          rows.push(insertRow);
          cells = [];
          cells.push(row);
        }
        if (i === totalSlots.length - 1) {
          let insertRow = cells.slice();
          rows.push(insertRow);
        }
      });
      let trItems = rows.map((d, i) => {
        return (
            <tr key={i * 100}>{d}</tr>
        );
      });
        return (
            <>
                {
                    this.renderTotalSlots()
                }
            </>

        );
    }
}
export default Month;
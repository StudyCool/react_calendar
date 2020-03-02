import React, {Component} from 'react';
import styles from './Month.module.scss';
import moment from "moment";
import Week from "../Week";
import {render} from 'react-dom';

class Month extends Component {
    constructor(props) {
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

  year = () => {
    return this.state.dateContext.format("Y");
  }
  month = () => {
    return this.state.dateContext.format("MMMM");
  }
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  }
  currentDate = () => {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
  }
  currentDay = () => {
    return this.state.dateContext.format("D");
  }

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
    return firstDay;
  }

  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    });
  }

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  }

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  }

  onDayClick = (e, day) => {
    this.setState({
      selectedDay: day
    }, () => {
      console.log("SELECTED DAY: ", this.state.selectedDay);
    });

    this.props.onDayClick && this.props.onDayClick(e, day);
  }

  renderTotalSlots = () => {

  };

    render() {
      let blanks = [];
      for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(<td key={i * 80} className="emptySlot">
              {""}
            </td>
        );
      }

      console.log("blanks: ", blanks);

      let daysInMonth = [];
      for (let d = 1; d <= this.daysInMonth(); d++) {
        let className = (d == this.currentDay() ? "day current-day": "day");
        let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
        daysInMonth.push(
            <td key={d} className={className + selectedClass} >
              <span onClick={(e)=>{this.onDayClick(e, d)}}>{d}</span>
            </td>
        );
      }


      console.log("days: ", daysInMonth);

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

      let trElems = rows.map((d, i) => {
        return (
            <tr key={i*100}>
              {d}
            </tr>
        );
      })

      return (
            <td>
                {
                    trElems
                }
            </td>

        );
    }
}
export default Month;
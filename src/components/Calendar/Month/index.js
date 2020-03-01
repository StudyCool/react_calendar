import React, {Component} from 'react';
import styles from './Month.module.scss';
import moment from "moment";
import Week from "../Week";

class Month extends Component {
    constructor(props) {
        super(props);

    }

    renderMonth = () => {
        let month = 5;
        let daysOfMonth = [];
        let i= moment().startOf('month');
        console.log(i);
        for (i;  moment().daysInMonth('month'); i++){
         //   daysOfMonth = daysOfMonth.push(i);
        }
      // console.log(daysOfMonth)
        return daysOfMonth;

    }

    render() {
        return (
            <div>
                {
                    this.renderMonth()
                }
            </div>

        );
    }
}


export default Month;
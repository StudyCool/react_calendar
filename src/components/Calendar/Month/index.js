import React, {Component} from 'react';
import styles from './Month.module.scss';
import moment from "moment";
import Week from "../Week";

/*class Month extends Component {
    constructor(props) {
        super(props);

    }

    renderMonth = () => {
        let month = 5;
        let daysOfMonth = [];
//let i = moment().startOf(5); i <= moment().daysInMonth(5); i++

        for (let i = 1; i <= 31; i++) {
            daysOfMonth = daysOfMonth.push(i);
            console.log(daysOfMonth)
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
}*/
let month = "June";
const firstMonthDay = moment().startOf("month");
console.log(firstMonthDay);

const Month = (month) => {
    return (
        <div>
            {

            }
        </div>
    );
};

export default Month;
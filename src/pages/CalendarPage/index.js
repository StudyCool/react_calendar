import React from 'react';
import CalendarNav from '../../components/CalendarNav';
import Calendar from '../../components/Calendar';
import EventCarousel from "../../components/EventCarousel";
import EventList from "../../components/EventList";
import styles from './CalendarPage.module.scss';


const CalendarPage = props => {
    return (
        <div className={styles.container}>
            < CalendarNav/>
            < Calendar/>
            < EventCarousel/>
            < EventList/>
        </div>
    );

};

export default CalendarPage;

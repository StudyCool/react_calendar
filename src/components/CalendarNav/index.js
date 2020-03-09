import React, {Component} from 'react';
import styles from './CalendarNav.module.scss';
import ModeButton from '../ModeButton';
import Icon from '@mdi/react';
import {mdiChevronDown} from '@mdi/js';
import moment from "moment";

class CalendarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            month: moment().format('MMMM')
        };
    }

    openMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });
    };


        nextMonth = () => {
            console.log(moment().add(1, 'M').format('MMM'));
        }




    prevMonth = () => {
        moment().subtract(1, 'M').format('MMM');
    }

    render() {
        const {isMenuOpen} = this.state;

        return (
            <div className={styles.container}>
                <nav className={styles.navContainer}>
                    <div className={styles.navItem} onClick={this.prevMonth}>May</div>
                    <div className={styles.currentItem} onClick={this.openMenu}>{this.state.month}
                        <Icon path={mdiChevronDown} size={'24px'} color={'white'} rotate={isMenuOpen ? 180 : 0}/>
                    </div>
                    <div className={styles.navItem} onClick={this.nextMonth}>{this.nextMonth()}</div>
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
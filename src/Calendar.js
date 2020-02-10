import React, { Component } from 'react';
import './Calendar.css';
import CalendarTable from './CalendarTable.js';
import { 
    getDaysInMonth, 
    getMonthText,
    getWeekList
} from './utils.js';

class Calendar extends Component {
    constructor(props) {
        super(props);

        const currentYear = new Date().getFullYear();

        this.state = {
            input: currentYear,
            year: currentYear,
            isError: false
        };
    }

    // get first date which show at the upper left corner
    getDateTableFirstDate(year, month) {
        const prevMonth = new Date(year, month-1);
        const prevMonthDays = getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
        prevMonth.setDate(prevMonthDays);
        prevMonth.setDate(prevMonthDays - (prevMonth.getDay() + 7)%7);

        return prevMonth;
    }

    // get a list of calendar date
    getDateTableList(year, month) {
        const dateTableList = [];

        const DATE_TABLE_MAX = 7*6;
        const currentDays = getDaysInMonth(year, month);

        const prevMonth = this.getDateTableFirstDate(year, month);
        const prevMonthDays = getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
        const nextMonth = new Date(prevMonth);
        nextMonth.setDate(nextMonth.getDate() + DATE_TABLE_MAX);

        // get date separately from previous month, current month and next month
        for(let i=prevMonth.getDate(),end=prevMonthDays; i<=end; i++){
            dateTableList.push({
                year: prevMonth.getFullYear(),
                month: prevMonth.getMonth(),
                day: i
            });
        }
        for(let i=1,end=currentDays; i<=end; i++){
            dateTableList.push({
                year: year,
                month: month,
                day: i
            });
        }
        for(let i=1,end=DATE_TABLE_MAX-dateTableList.length; i<=end; i++){
            dateTableList.push({
                year: nextMonth.getFullYear(),
                month: nextMonth.getMonth(),
                day: i
            });
        }


        return dateTableList;
    }

    renderWeek() {
        const weekList = getWeekList(this.props.language);
        return weekList.map((week, i) => {
            return <th key={i}>{week}</th>
        });
    }

    renderTable() {
        const monthList = new Array(12).fill(0);
        return monthList.map((month, i) => {
            return <table key={i}>
                <thead>
                    <tr>
                        <td>{getMonthText(i, this.props.language)}</td>
                    </tr>
                    <tr>
                        {this.renderWeek()}
                    </tr>
                </thead>

                <CalendarTable
                    dateTableList={this.getDateTableList(this.state.year, i)}
                    language={this.props.language}
                />
            </table>
        });
    }

    onChangeYear = (e) =>  {
        this.setState({
            input: e.target.value
        });
    }

    onClickShow = (e) => {
        if(this.state.input < 1 || this.state.input > 9999){
            this.setState({
                isError: true
            });
        } else {
            this.setState({
                isError: false,
                year: Number(this.state.input)
            });
        }
    }

    render() {
        return (
            <div>
                <div className="center">
                    <input type="number" value={this.state.input} onChange={this.onChangeYear}/>
                    <button onClick={this.onClickShow}>show</button>
                </div>
                <div className={`center red${this.state.isError === true? "": " hide"}`}>
                    *請輸入 1~9999 的數字
                </div>
                {this.renderTable()}
            </div>
        );
    }
}

Calendar.defaultProps = {
    language: "EN"
};

export default Calendar;

import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';

class CalendarTable extends Component {
    constructor(props) {
        super(props);

        this.isCurrentMonth = false;
        this.today = new Date();
    }

    getDateRow(startIdx) {
        const {dateTableList} = this.props;

        const rowList = [];
        for(let i=startIdx; i<startIdx+7; i++){
            if(dateTableList[i].day === 1){
                this.isCurrentMonth = !this.isCurrentMonth;
            }

            const isToday = 
                (dateTableList[i].year === this.today.getFullYear() && 
                dateTableList[i].month === this.today.getMonth() && 
                dateTableList[i].day === this.today.getDate());

            rowList.push(
                <CalendarItem 
                    key={i}
                    dateText={dateTableList[i].day}
                    currentMonth={this.isCurrentMonth}
                    today={isToday}
                />
            );
        }
        return rowList;
    }

    renderDateTable() {
        const dateTable = [];
        for(let i=0; i<6; i++){
            dateTable.push(
                <tr key={i}>
                    {this.getDateRow(7*i)}
                </tr>
            );
        }

        return dateTable;
    }

    render() {
        return (
            <tbody>
                {this.renderDateTable()}
            </tbody>
        )
    }
}

export default CalendarTable;

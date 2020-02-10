import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';

class CalendarTable extends Component {
    constructor(props) {
        super(props);

        this.isCurrentMonth = false;
    }

    getDateRow(startIdx) {
        const {dateTableList, today} = this.props;

        const rowList = [];
        for(let i=startIdx; i<startIdx+7; i++){
            if(dateTableList[i].day === 1){
                this.isCurrentMonth = !this.isCurrentMonth;
            }

            const isToday = 
                (dateTableList[i].year === today.getFullYear() && 
                dateTableList[i].month === today.getMonth() && 
                dateTableList[i].day === today.getDate());

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

import React, { Component } from 'react';

class CalendarItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {today, currentMonth, dateText} = this.props;
        return (
            <td className={`day${today === true? " today": ""}${currentMonth === true? "": " outOfRange"}`}>
                {dateText}
            </td>
        );
    }
}

export default CalendarItem;

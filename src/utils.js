function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}

function formatZero(date) {
    return (date>9)? date: "0"+date;
}

export function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

export function getMonthText(month, language="EN") {
    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if(language === "TW"){
        monthList = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    }
    return monthList[month];
}

export function getWeekList(language="EN") {
    let weekList = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    if(language === "TW"){
        weekList = ["日", "一", "二", "三", "四", "五", "六"];
    }
    return weekList;
}

export function getFormatedDate(date) {
    return date.getFullYear()+"-"+formatZero(date.getMonth()+1)+"-"+formatZero(date.getDate());
}
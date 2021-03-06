"use strict";

function formatDate(date) {

    if ([].toString.call(date) == '[object Date]') {
        return getFormattedDate(date);

    } else if (date.split && date.split('-').length == 3) {
        let arr = date.split('-');
        return (arr[2] + '.' + arr[1] + '.' + arr[0]);

    } else if (typeof date == 'number') {
        let d = new Date(date);
        return getFormattedDate(d);

    } else if (Array.isArray(date)) {
        let d = new Date(date[0], date[1], date[2]);
        return getFormattedDate(d);
    }

}


function getFormattedDate (date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear() % 100;
    if (day < 9) day = '0' + day.toString();
    if (month < 9) month = '0' + month.toString();
    if (year < 9) year = '0' + year.toString();

    return (day + '.' + month + '.' + year);
}



alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1123456789000) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
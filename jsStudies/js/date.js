"use strict";


var date = new Date(2012, 0, 3, 3, 12);

alert(getWeekDay(date));
alert(date);



function getWeekDay (date) {
    var day = date.getDay();

    switch (day) {

        case 0:
            return 'вс';
        break;

        case 1:
            return 'пн';
            break;

        case 2:
            return 'вт';
            break;

        case 3:
            return 'ср';
            break;

        case 4:
            return 'чт';
            break;

        case 5:
            return 'пт';
            break;

        case 6:
            return 'сб';
            break;
    }
}
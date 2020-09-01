
function getWeekDay(date) {

    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];

}

function getLocalDay(date){

    switch (date) {
        case 0:
            return 7;
    }
    return date.getDay();

}

function getDateAgo(date, days) {

    var ND = new Date(date);
    ND.setDate(date.getDate() - days);
    alert('ND ' + ND);
    return ND.getDate();

}

function getLastDayOfMonth(year, month) {

    var CDate = new Date();
    CDate.setFullYear(year, month + 1, 1);
    CDate.setDate(CDate.getDate() - 1);

    return CDate.getDate();

}

function getSecondsToday(date) {

    var SecTod = date.getSeconds() + ( date.getMinutes() * 60 ) + ( date.getHours() * 3600 );

    return SecTod;
}

function getSecondsToTomorrow(date) {

    var SecTom = ( 60 - date.getSeconds() ) + ( ( 60 -  date.getMinutes() ) * 60 ) + ( ( 24 - date.getHours() ) * 3600 );

    return SecTom;

}

function formatDate(d) {

    var FormDate = AddLeadZero(d.getDate()) + '.' + ( AddLeadZero (d.getMonth() + 1 )) + '.' + AddLeadZero(( d.getFullYear() % 100 )) ;

    return FormDate;
}

function AddLeadZero (Number) {

    var Res = '';

    if ( Number < 10 ) {
        Res = '0' + Number;
        return Res;
    }

    return Number;
}

function makeCounter() {
    var currentCount = 1;

    return function() {
        return currentCount++;
    };
}

function getDecimal(x) {

    var res;
    (x.toFixed(0) > x && x > 0) ? res = x - x.toFixed(0) + 1 : (x.toFixed(0) < x && x < 0) ? res = x - x.toFixed(0) - 1 : res = x - x.toFixed(0);
    if (x < 0) return -res.toFixed(7);
    return -res.toFixed(12) * -1;

}

function sum(a) {

    return function(b){

        return a + b ;
    }
}

function makeBuffer() {

    var Buff = '';

    function(str) {

        if (str === undefined) {
            return Buff;
        }return Buff = Buff + str;
    };

/*    buffer.clear = function () {
        Buff = '';
    }
*/

    return buffer;
};


var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест
/*
buffer.clear();

alert( buffer() ); // ""
*/








/*
var buffer = makeBuffer();

// добавить значения к буферу

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010'
*/


/*
 alert(sum(1)(2));
 alert(sum(-1)(5));
 */

/*
var counter = makeCounter();
// каждый вызов возвращает результат, увеличивая счётчик
alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3
*/


/*
alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2
alert(getDecimal(-12.5455)); // 0.5455 ( у тебя получается -0.4545 )
alert(getDecimal(1.7)); // 0.7 ( -0.3 )
*/

/*
var counter = makeCounter();
alert( counter() ); // 1
alert( counter() ); // 2
*/

/*
var d = new Date(2000, 0, 10); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'
*/

/*
 var TDate = new Date();

 alert(getSecondsToTomorrow(TDate));

*/

/*
alert(getLastDayOfMonth(2012, 1));
*/

/*
var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
*/


/*
var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
*/

/*
var Da = new Date(2014, 0, 3);
alert(getWeekDay(Da));
*/

/*
var NDate =  new Date(2012, 1, 20, 3, 12);
alert(NDate);
*/
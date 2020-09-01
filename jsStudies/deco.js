// вспомогательная функция для проверки на число
function checkNumber(value) {
    return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
    return function() {
        for (var i = 0; i < arguments.length; i++) {
            //console.log(arguments[i], checks[i]);

            if (!checks[i](arguments[i])) {
                alert( "Некорректный тип аргумента номер " + i );
                return;
            }
        }
        console.log(arguments);
        return f.apply(this, arguments);
    }
}

function sum(a, b) {
    return a + b;
}

function work(a, b) {
    var c = a + b;
    alert('c = ' + c);
    /* ... */ // work - произвольная функция, один аргумент
}

function makeLogging(f, arg) {

    return function wrapper () {

        log.push([].slice.call(arguments));
        console.log(log);
        return f.apply(this, arguments);


    }



}

function formatDate(date) {

    var toStringV = {}.toString;
    var type = toStringV.call(date);

    switch (type) {

        case '[object String]':
            return date.slice(8) + '.' + date.slice(5, 7) + '.' + date.slice(2, 4) + '.';

        case '[object Number]':
            var dateInc = new Date(date * 1000);
            var dd = dateInc.getDate();
            if (dd < 10) dd = '0' + dd;
            var mm = dateInc.getMonth();
            if (mm < 10) mm = '0' + mm;
            var yy = dateInc.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm  + '.' + yy + '.';

        case '[object Array]':
            var dd = date[2];
            if (dd < 10) dd = '0' + dd;
            var mm = date[1] + 1;
            if (mm < 10) mm = '0' + mm;
            var yy = date[0] % 100;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm  + '.' + yy + '.';

        case '[object Date]':
            var dateInc = new Date(date);
            var dd = dateInc.getDate();
            if (dd < 10) dd = '0' + dd;
            var mm = dateInc.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;
            var yy = dateInc.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm  + '.' + yy + '.';

    }

}

function printNumbersInterval() {

    var currNum = 1;
    var timID = setInterval(function () {

        document.write(currNum + ' ');

        currNum++;

        if (currNum == 21) {clearInterval(timID)};



    }, 100);

}

function f(x) {
    console.log( x );
}

function delay (func, del) {

    return function () {

        var savedThis = this;
        var savedArgs = arguments;

        setTimeout(function() {
            f.apply(savedThis, savedArgs);
        }, ms);
    }

}

function debounce (func, ms) {

    var busy = false;

    return function () {

        if (!busy) {
            func.apply(null, arguments);
            busy = true;
            setTimeout(function () {busy = false;}, ms );

        }

    }

}

function throttle (func, ms) {

    var busy = false;

    return function () {

        this.savedArgs = false;

        if (!busy) {
            busy = true;
            func.apply(null, arguments);

            setTimeout(function () {busy = false;
                if (this.savedArgs) {
                    func.apply(null, this.savedArgs);
                    this.savedArgs = false;}
            }, ms);

        } else {this.savedArgs = arguments;}
    }

}

function evalu () {

    var expr = prompt("Введите выражение?", '2*3+2');


    try {
        if (isNaN(eval(expr))) {alert('Ошбка NaN'); return evalu();}
        return eval(expr);
    } catch (er) {
        alert("Ошибка: " + er.message + ", повторите ввод");
        return evalu();
    }

}

function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;
    var timerId;


    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }

    this.run = function() {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId);
        alert('Стоп машина!');
    };


}


var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет




//alert(evalu());

/*
var str = prompt('?');

alert(eval(str));

*/



/*
var f = function(a) {
    document.write(a);
    console.log(a);
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000мс)
f1000(3); // (тормозим, не прошло 1000мс)
f1000(4); // (тормозим, не прошло 1000мс)
setTimeout(function() {f1000(10)}, 1500);
setTimeout(function() {f1000(15)}, 1600);
setTimeout(function() {f1000(16)}, 1700);
setTimeout(function() {f1000(20)}, 3500);
setTimeout(function() {f1000(25)}, 3900);


//console.log('args = ' + arguments[0] + ';   SArgs = ' + this.savedArgs[0] + ';   busy = ' + busy);

*/


/*
var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор
*/

/*
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
*/


/*
printNumbersInterval();
*/

/*
var leader = {
    name: "Василий Иванович",
    age: 35
};


leader = JSON.stringify(leader);
leader = JSON.parse(leader);

alert(leader.name);
*/


/*
alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
*/



/*
var arr = [1,2,3,4,5,6,7];
var NArr = arr.slice(1, -4);

alert(NArr);
*/

/*
var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

*/


/*
var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    alert('Лог: ' + log[i]); // "Лог:1", затем "Лог:5"

}

*/


/*
// обернём декоратор для проверки
summ = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

// пользуемся функцией как обычно
alert( sum(1, 2) ); // 3, все хорошо

// а вот так - будет ошибка
summ(true, null); // некорректный аргумент номер 0
summ(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1
*/
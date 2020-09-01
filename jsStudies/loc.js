
function makeBuffer() {

    var Buff = '';

    function buffer (lala) {

        if (lala === undefined || lala.length == 0 ) {
            return Buff;
        }return Buff = Buff + lala;
    };

    buffer.clear = function () {
        Buff = '';
    }

    return buffer;
};

function byField(field) {

    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }


}

function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {

        var shooter = (function(x) {

            return function() {
                alert( x );
            };

        })(i);

        shooters.push(shooter);
    }

    return shooters;
}

function sumTo(n) { // обычный цикл 1+2+...+n
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sumToRec(n) { // рекурсия sumToRec(n) = n+SumToRec(n-1)
    return n == 1 ? 1 : n + sumToRec(n - 1);
}

function makeCounter() {
    var currentCount = 1;

    return function() {
        var currentCount;
        alert(window.currentCount);

        // можно ли здесь вывести currentCount из внешней функции (равный 1)?
    };
}

function sum(a){
    return function (b) {
        return a + b;

    }
}

function filter (arr, func) {

    var NArr = [];

    for (var i = 0; i < arr.length ; i++) {
        if (func(arr[i])) {
            NArr.push(arr[i]);
        }

    }
    return NArr;

}

function inBetween (a, b) {

    return function (x){
    return ( a <= x && x <= b );}

}

function inArray (arr2) {

    return function (y) {
        var res = false;

        arr2.forEach(function (z) {
                console.log('z = ' + z + ' y = ' + y);

                if (y == z) {
                    res = true
                }
            }
        )
        return res;

    }

}

function sumI(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

function Calculator () {

        this.aa = 0;
        this.bb = 0;

    this.read = function () {
        this.aa = +prompt('a?');
        this.bb = +prompt('b?');
    },


    this.sum = function() {
        var res = this.aa + this.bb;
        alert('sum = ' + res);
        return res;
    },


    this.mul = function() {
        var res = this.aa * this.bb;
        alert('mul = ' + res);
        return res;
    }

}

function Accumulator (startingValue) {

    this.value = startingValue;

    this.read = function() {
        this.value = this.value + +prompt('what?');
    }

}

function Calculator2 (str) {

    var methods = {

        '+': function (a, b) {return a + b;},
        '-': function (a, b) {return a - b;}

    };

    this.addMethod = function (name, func) {methods[name] = func;};


    this.calculate = function (str) {


        this.brpos1 = +str.indexOf(' ');
        this.brpos2 = +str.indexOf(' ', this.brpos1 + 1);
        this.num1 = +str.substring(0, this.brpos1);
        this.num2 = +str.substring(this.brpos2 + 1);
        this.oper = str.substring(this.brpos1 + 1, this.brpos2);

        return methods[this.oper] (this.num1, this.num2);


    };
var zzz = this;
    console.log(zzz);
}

function User(fullName) {
    this.fullName = fullName;

    var split = this.fullName.split(' ');

    Object.defineProperties(this, {

        firstName: {

            get: function () { return split[0]; },
            set: function (val) { this.fullName = val + ' ' + this.lastName; }

        },

        lastName: {

            get: function () { return split[1]; },
            set: function (val) { this.fullName = this.firstName + ' ' + val; }

    }
});

}

function sumArgs() {

//    var res = [].reduce.call(arguments, function(a, b) { return a + b; });


    arguments.reduce = [].reduce;
    var res = arguments.reduce(function(a, b) {
        return a + b;
    });

    return res;


}

function applyAll (func) {

    arguments.slice = [].slice;
    var NewArgs = arguments.slice(1);

    return func.apply(this, NewArgs);

}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}


"use strict";

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}


/*
var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function() {
        alert( this.login + ' вошёл в сайт' );
    },

    loginFail: function() {
        alert( this.login + ': ошибка входа' );
    },

    checkPassword: function() {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
};

var vasya = user;
user = null;
vasya.checkPassword();
*/


/*
// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2


alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
*/


//alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива


/*
var vasya = new User("Василий Попкин");

console.log(vasya);

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров
*/


/*
var calc = new Calculator2;

alert( calc.calculate("13 - 37") ); // 10

var powerCalc = new Calculator2;

powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 5");
alert( result ); // 8
*/



/*
var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение
*/


/*

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
*/


/*
alert(sumI(6)(-1)(-2)(-3)); //== 0
alert(sumI(0)(1)(2)(3)(4)(5)); //== 15
*/

/*
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1


ladder.up().up().down().up().down().showStep(); // 1

*/



/*
var calculator = {

    aa: 0,
    bb: 0,

    read: function () {
        this.aa = +prompt('a?');
        this.bb = +prompt('b?');
    },


    sum: function() {
        var res = this.aa + this.bb;
        alert('sum = ' + res);
        return res;
    },


    mul: function() {
        var res = this.aa * this.bb;
        alert('mul = ' + res);
        return res;
    },

}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/


/*
var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) { return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
*/


/*
alert(sum(1)(2));
alert(sum(5)(-1));
*/


/*
var currentCount = 5;
var zzz = makeCounter();
alert(zzz());

*/
/*
var timeLoop = performance.now();
for (var i = 1; i < 10000; i++) sumTo(10000); // цикл
timeLoop = performance.now() - timeLoop;

var timeRecursion = performance.now();
for (var i = 1; i < 10000; i++) sumToRec(10000); // рекурсия
timeRecursion = performance.now() - timeRecursion;

alert( "Разница в " + (timeRecursion / timeLoop) + " раз" );
*/


/*
var army = makeArmy();

army[0](); // 0
army[1](); // 1
*/


/*
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];




users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
}); // Вася, Маша, Петя

*/


/*
users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
}); // Маша, Вася, Петя
*/







/*
var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

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
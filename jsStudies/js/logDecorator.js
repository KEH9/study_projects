"use strict";


function work(a, b) {
    alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {


    function wrapper () {

        let arr = [];
        for ( i = 0 ; i < arguments.length ; i++ ) {
            arr.push(arguments[i]);
        }

        log.push(arr);

        f.apply(this, arguments);

    }

    return wrapper;

}



let log = [];
work = makeLogging(work, log);


work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args ); // "Лог:1,2", "Лог:4,5"
}
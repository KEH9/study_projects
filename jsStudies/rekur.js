var res;
res = math.exp(1);
alert('aaa');
alert(res);

















/*function sayHi() {
    alert( "Привет" );
}

alert( sayHi ); // выведет код функции

*/








/*function fib(n) {

    var  fib = 1;
    var fibp = 1;
    var fibpp = 0;
    if (n <= 0) {
        alert('Нужно положительное целое число!');
        return;
        }else if (n == 1) {
        return 0;
        } else if (n == 2) {
        return 1;
        }

    var i = 1;
    for (i = 3; i <= n; ++i) {
        fibpp = fibp;
        fibp = fib;
        fib = fib + fibpp;
    }
return fib;
}


var n = prompt('n?');
alert(fib(n));
*/




/*
function sumTo(n) {


    if (+n != 1) {
        return +n + sumTo(+n - 1);
    } else {
        return n;
    }

}


var n = prompt('n?');
alert(sumTo(n));

*/



/*
function sumTo(n) {

    var res = (1 + +n) / 2 * +n;

    return res;
}


var n = prompt('n?');
alert(sumTo(n));

*/


/*
function sumTo(n) {

    var res = 0;
    for (var i = 1; i <= n; ++i) {
        res = res + i;
    }
    return res;
}


var n = prompt('n?');
alert(sumTo(n));
    */
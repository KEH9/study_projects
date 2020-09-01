function ucFirst (str) {

    var FirLet = str.charAt(0).toLowerCase();
    var res = FirLet + str.slice(1);
    return res;


}

    var str = prompt();
    alert( ucFirst(str) );



/*
    var min = +prompt('min');
    var max = +prompt('max');
    alert( Math.round (min - 0.5 + Math.random() * ( max - min + 1 ) ) ) ;

*/



/*function fibBinet(n) {

    var fi = ( 1 + Math.sqrt(5) ) / 2;
    return Math.pow(fi, n) / Math.sqrt(5);
}

    var n = prompt('n?');
    alert(fibBinet(n).toFixed(0));


*/

/*function getDecimal(x) {
    var res = x - x.toFixed(0);
    if (x < 0) return -res.toFixed(12);
    return -res.toFixed(12) * -1;

}

alert( getDecimal(12.345) );
alert( getDecimal(1.2) );
alert( getDecimal(-3.38) );
*/





/*var i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}
*/



/*var a = +prompt('first num');
var b = +prompt('second num');
alert('res = ' + (a + b));
*/
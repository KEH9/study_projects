
    user = {};
    user.name = 'Vasya';
    user.surname = 'Petrov';
    user.name = 'Sergey';
    alert(user.name);
    delete user.name;
    alert(user.name);





/*function extractCurrencyValue(str) {

    return +str.slice(1);
}

    var str = prompt('$?');
    alert( extractCurrencyValue(str) );
*/




/*function truncate (Str, LenMax) {

    return Str.length > LenMax ?
        Str.slice(0, LenMax - 3) + '...' :
        Str;
}

    var Str = prompt('Строка');
    var LenMax = +prompt('LenMax');
    alert( truncate(Str, LenMax) );

*/


/* function checkSpam (str) {

    var lrstr = str.toLowerCase();
    return  (lrstr.indexOf('viagra')) >= 0 ?  true:
            (lrstr.indexOf('xxx')) >= 0 ? true:
    false;
 }

 var str = prompt();
 alert( checkSpam(str) );

*/




/*function ucFirst (str) {

    var FirLet = str.charAt(0).toUpperCase();
    var res = FirLet + str.slice(1);
    return res;
}

    var str = prompt();
    alert( ucFirst(str) );
*/


function pow (x, n){
var res = x;
for (var i = 1; i < n; ++i) {res = res * x;}
return res;
}

var x = prompt('x');
var n = prompt('n');
alert(pow(x, n));







/*function min(a, b){return (a < b) ? a : b;}

alert (min(1, 1));


function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}



function checkAge(age) {
    return (age > 18) ? true: confirm('Родители разрешили?');
}

    */
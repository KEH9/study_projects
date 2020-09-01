function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric (Obj) {
    for (var prop in Obj) {
        if (isNumeric(Obj[prop])) {
            Obj[prop] = Obj[prop] * 2;

        }
    }

}


"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

multiplyNumeric(salaries);

for (var key in salaries) {
 alert( "Ключ: " + key + " значение: " + salaries[key] );
    }













/*
"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var res = 0;
var MaxVal = 0;

for (var obj in salaries) {

    if (salaries[obj] > MaxVal) {
        res = obj;
        MaxVal = salaries[obj];
    }

}

alert(res);
*/


/*

 "use strict";

 var salaries = {
 "Вася": 100,
 "Петя": 300,
 "Даша": 250
 };

 var res = 0;
 for (var obj in salaries) {
 res = res + salaries[obj];
 }

 alert(res);

 */


/*
function isEmpty(obj) {
    var res = true;
    for (var ObjProp in obj) {
        res = false;
    }
    return res;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
*/









/*
    user = {};
    user.name = 'Vasya';
    user.surname = 'Petrov';
    user.name = 'Sergey';
    alert(user.name);
    delete user.name;
    alert(user.name);

*/
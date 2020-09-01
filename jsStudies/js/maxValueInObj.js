
"use strict";

function maxValueInObj(obj) {

    var maxKey = "";
    var maxValue = "";

    for (var key in obj) {

        if (maxValue < obj[key]) {
            maxKey = key;
            maxValue = obj[key];
        }
    }

    return maxKey;

}


var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

alert ( maxValueInObj(salaries) );
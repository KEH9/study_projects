"use strict";

function f(x) {
    alert(x);
}


function delay (func, time) {



    return function (...args) {

        let savedThis = this;


        setTimeout( function (){func.apply(savedThis, args)} , time);

    }


}


// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms
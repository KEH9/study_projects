"use strict";


function throttle (func, ms) {

    let isCoolingDown = false;
    let savedThis;
    let savedArgs;


     function wrapper () {

        if (isCoolingDown) {

            savedThis = this;
            savedArgs = arguments;
            return;
        }

        func.apply(this, arguments);


        isCoolingDown = true;

        setTimeout( () => {
            isCoolingDown = false;

            if (savedArgs) {
                func.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }

        }, ms);


    }

    return wrapper;

}


function f(a) {
    console.log(a)
}


// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);



f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)




// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
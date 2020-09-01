"use strict";

function printNumbersInterval () {

    let i = 1;

    let timerId = setTimeout(function printNum () {
        console.log(i);
        i++;
        if (i < 21) {
            setTimeout(printNum, 100);
        }
    }, 100)

}

let timerButton = document.getElementById('timerButton');
timerButton.onclick = printNumbersInterval;


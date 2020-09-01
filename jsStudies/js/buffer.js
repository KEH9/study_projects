"use strict";

function makeBuffer() {

    var bufferNow = '';

    return function buffer (text) {

        if (text == undefined) {
            return bufferNow;
        }

        bufferNow += text + '';

        buffer.clear = function () {
            bufferNow = '';
        }


    }



}


var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""




//var buffer = makeBuffer();
//
//// добавить значения к буферу
//buffer('Замыкания');
//buffer(' Использовать');
//buffer(' Нужно!');
//
//// получить текущее значение
//alert( buffer() ); // Замыкания Использовать Нужно!

//
//var buffer = makeBuffer();
//buffer(0);
//buffer(1);
//buffer(0);
//
//alert( buffer() ); // '010'
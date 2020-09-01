"use strict";

let elem1 = document.createElement('div');
let elem2 = document.createElement('div');
elem1.innerHTML = '<b>Новый элемент 1</b>';
elem2.innerHTML = '<b>Новый элемент 2</b>';

function insertAfter(elem, refElem) {
    refElem.parentNode.insertBefore(elem, refElem.nextSibling);



}

let body = document.body;

// вставить elem после первого элемента
insertAfter(elem1, body.firstChild); // <--- должно работать


// вставить elem за последним элементом
insertAfter(elem2, body.lastChild); // <--- должно работать

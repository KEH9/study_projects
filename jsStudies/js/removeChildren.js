"use strict";

function removeChildren(elem) {

    while (elem.hasChildNodes()) {
        elem.removeChild(elem.firstChild);
    }


}

removeChildren(table); // очищает таблицу
removeChildren(ol); // очищает список
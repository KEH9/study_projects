
function filterRange(arr, min, max) {

    var NewArr = [];
    var NewArrPos = 0;

    for (var i = 0; i < arr.length; i++ ){
        alert(i);
        if ( arr[i] >= min && arr[i] <= max ) {
            NewArr[NewArrPos] = arr[i];
            NewArrPos = NewArrPos + 1;
        }

    }

    return NewArr;

}

function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}

function randomSort() {
    return Math.random() - 0.5;
}

function compareAge(personA, personB) {
    return personA.age - personB.age;
}

function printListWhile(list) {

    var TempList = list;

    while (TempList){
        document.write(TempList.value + ' ' + '<br>');
        TempList = TempList.next;
    }
}

function printListRec(list) {

    document.write(list.value + + ' ' + '<br>' );
    printListRec(list.next);

}

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert( list.value );

}

function unique(arr) {
    for ( var i = 0 ; i < arr.length ; i++) {
        var exampl = arr[i];
alert(exampl);
        var rest = arr.length - i ;

        for ( var j = i + 1 ; j < rest ; j++) {
            if ( exampl == arr[j] ) {
                arr.splice(j, 1);
                j = j - 1 ;

            }


        }

    }

    return arr;

}

function getSums(arr) {

    var NewArr = [];


       var Last = arr.reduce(function(prev, curr) {
            NewArr.push(prev);
            return prev + curr ;
    });
    NewArr.push(Last);


    return NewArr;

}

function sum () {

    var Res = 0;

    for ( var i = 0 ; i < sum.arguments.length ; i++) {

        Res = Res + sum.arguments[i];

    }

    return Res;

}


var now = new Date();
alert( now );
alert(now.getTimezoneOffset());



















/*
alert(sum(1, 2, 3, 4));
*/



/*
var arr = [ 1, 2, 3, 4, 5 ];
alert(getSums( arr ));
*/


/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

alert(arr);

var arrLength = arr.map(function(arrL) {
    return arrL.length;
});

alert( arrLength ); // 4,5,2,5

*/


/*
    var strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", "8-()"
    ];

    alert(strings);
    alert( unique(strings) ); // кришна, харе, 8-()

*/



/*
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
*/

/*
printListWhile(list);
document.write('<br>');

printListRec(list);
document.write('<br>');
*/
//printReverseList(list);



/*
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);



alert(people);

// теперь people: [vovochka, masha, vasya]
    alert(people[0].age) // 6
*/























/*var arr = [1, 2, 3, 4, 5];

arr.sort(randomSort);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
*/

/*
var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.concat().sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/


/*
var arr = [5, 2, 1, -10, 8];

arr.sort(compareNumeric);

alert( arr ); // 8, 5, 2, 1, -10
*/


/*function filterRangeInPlace(arr, min, max) {

    for ( var i = 0 ; i < arr.length ; i++) {

        var val = arr[i];
        alert(i + ' ' + arr );

        if ( val < min || val > max ) {
            arr.splice(i, 1);
            i = i - 1;

        }

    }

}


arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1]

*/



/*function removeClass(obj, cls) {

    var Str = obj.className;
    alert('Str = ' + Str);

    var Arr = Str.split( ' ' );
    alert('Arr = ' + Arr);

    for (var i = 0 ; i < Arr.length ; i++) {
        if ( Arr[i] == cls ) {
            Arr.splice(i, 1);
            i = i - 1;
        }

    }

    return Arr.join(' ');
}

var obj = {
    className: 'yoohoo open menu menu'
};

alert(obj.className);
removeClass(obj, 'menu'); // obj.className='menu'
alert(obj.className);

*/

//alert(removeClass(obj, 'blabla')); // без изменений (нет такого класса)

//alert(removeClass(obj, 'menu'));














/*
function camelize(str) {

    for ( i = 0 ; i < str.length ; i++) {

        if ( str.charAt(i) == '-' ) {

               str = str.slice(0, i) + str.charAt( i + 1 ).toUpperCase() + str.slice(i + 2);
        }

    }
    return str;

}
*/
/*
alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

*/


/*
function addClass(Obj, Cls) {
    Str = Obj.className;
    var Arr = [];
    Arr = Str.split(' ');

    if ( find(Arr, Cls) < 0 ) {
        Str = Str + ' ' + Cls;
        Obj.className = Str;
    }
}

*/
/*


var obj = {
    className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"


*/



/*
var Arr = [];
var N = +prompt('N?');

for ( var i = 2 ; i <= N ; ++i ) {Arr[i - 2] = i ;}
alert(Arr);

var p = 0;
for (var k = 0 ; k <= N; k++) {
    p = Arr[k]

    if (p != 0) {
        for ( var j = p + p ; j <= N ; j = j + p ) {Arr[j - 2] = 0;}
        }
}

alert('Arr' + Arr);

var ArrRes = [];
var ArrPos = 0;

for ( l = 0; l <= N; ++l ) {
    if ( Arr[l] != 0 && Arr[l] != null && Arr[l] != '' ) {
        ArrRes[ArrPos] = Arr[l];
        ArrPos = ArrPos + 1;
    }
}
alert('ArrRes' + ArrRes);

*/



/*
*/


/*

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);

alert(filtered);

*/

/*
function find(arr, str) {
var ArrLen = arr.length + 1;
    for (var i = 0 ; i < ArrLen ; ++i ) {
        if ( arr[i] === str ) {
            return i;
        }
    }

    return -1;
}
*/



/*
arr = ["test", 2, 1.5, false];

alert(find(arr, "test")); // 0
alert(find(arr, 2)); // 1
alert(find(arr, 1.5)); // 2
alert(find(arr, 0)); // -1

*/






/*
var SummArr = [];
var Elem = 0;
var Res = 0;

while  (true) {
    Elem = prompt('Number?');
    if ( Elem == undefined || Elem == null ||  Elem == '' ) break;
    Res = Res + +Elem;

}
alert(Res);

*/


/*
var styles = ["Джаз", "Блюз"];

styles[styles.length] = 'Рок-н-Ролл';

styles[styles.length - 2] = 'Классика';

styles.shift();

styles.unshift('Рэп', 'Регги');
alert(styles);

var rand = 0 + Math.floor(Math.random() * (styles.length + 1));
alert(styles[rand]);
*/






/*
var goods = ['Мяч', 'Боб', 'Дуб'];
alert(goods[goods.length - 1]);

goods[goods.length] = 'Майонез';
alert(goods[goods.length - 1]);
*/
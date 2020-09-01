function User() {

    var firstName, surname;

    this.setFirstName = function (name) {
        firstName = name;
    };

    this.setSurname = function (name) {
        surname = name;
    };

    this.getFullName = function () {
        return firstName + ' ' + surname;

    }

}

function CoffeeMachine1(power, capacity) {

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function () {
        return power;
    };

}

function CoffeeMachine2(power, capacity) {
    var waterAmount = 0;
    var timerId;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {

        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.addWater = function(amount) {

        var newAmount = amount + waterAmount;

        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (newAmount > capacity) {

            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount + waterAmount;
    };

    function onReady() {
        alert( 'Кофе готов!' );
    };

    this.setOnReady = function(newFunc) {
        onReady = newFunc;

    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    this.run = function() {
       timerId = setTimeout(function () {
           timerId = null;
           onReady();
           }, getTimeToBoil()
       );
    };

    this.isRunning = function () {
        return !!timerId;

    };

}

function Machine(power) {
    this._enabled = false;

    var self = this;

    this.enable = function() {
        // используем внешнюю переменную вместо this
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };

}

function CoffeeMachine3(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    var parentEnable = this.enable;
    this.enable = function() {
        parentEnable(); // теперь можно вызывать как угодно, this не важен
        //this.run();
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }

    var timerID;
    this.run = function() {
        if (!this._enabled) {throw new Error ('ошибка, кофеварка выключена!')}
        timerID = setTimeout(onReady, 1000);
    };

    var parentDisable = this.disable;
    this.disable = function() {
        clearTimeout(timerID);
        parentDisable();
    }



}

function Fridge(power) {

    Machine.apply(this, arguments);

    var food = [];
    var maxFoodAmount = power / 100;


    this.addFood = function () {

        if (!this._enabled) {throw new Error('ошибка, холодильник выключен!');};
        if ((arguments.length + food.length) > maxFoodAmount) {throw  new Error('ошибка, слишком много еды!');};

        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);

        }

    };

    this.getFood = function () {
        return food;
    };

    this.filterFood = function (func) {
        return food.filter(func);

    };

    this.removeFood = function (item) {
        var index = food.indexOf(item);
        //alert('item = ' + item);
        if (index != -1) {food.splice(index, 1);}


    };

    var parentDisable = this.disable;
    this.disable = function () {
        if (food.length > 0) {throw new Error('ошибка, в холодильнике есть еда!');}
        parentDisable();

    }


}

function f() {
    alert( "привет" );
}

function CoffeeMachine(power) {
    this._waterAmount = 0;
    this._power = power;
    this._WATER_HEAT_CAPACITY = 4200;

}

function Clock(options) {
    this._template = options.template;
}

function AnimatingMenu() {
    Menu.apply(this, arguments);
}


function FormatError(message) {
    this.name = "FormatError";
    this.message = message;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor); // (*)
    } else {
        this.stack = (new Error()).stack;
    }

    SyntaxError.call(this, "Ошибка формата: ")

}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;



var err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true






















/*
AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    var self = this;

    this._state = this.STATE_ANIMATING;

    this._timer = setTimeout(function() {
        Menu.prototype.open.call(self);
    }, 1000);
};

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {

    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'анимация';

        default:
            return Menu.prototype._stateAsString.call(this);
    }
};

*/




/*
// тест, использование..
var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() { // через 1 секунду
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто
}, 1000);
*/


/*
Clock.prototype._render = function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};

*/


/*
var clock2 = new Clock({
    template: 'h:m:s'
});
clock2.start();

setTimeout(function(){clock2.stop()}, 4999);
*/



/*
CoffeeMachine.prototype.getTimeToBoil = function () {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        alert( 'Кофе готов!' );
    }, this.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

*/



/*
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);

};

f.defer(1000); // выведет "привет" через 1 секунду
*/


/*
var animal = {
    eats: true
};
var rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

// в rabbit можно найти оба свойства
alert( animal.jumps ); // true
alert( animal.eats ); // true
*/


/*
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
*/

/*
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    //alert( item.title ); // сок, зелень
    fridge.removeFood(item);
});

alert( fridge.getFood() ); // 2

*/


/*
// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");

alert(fridge.getFood());

fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
*/


/*
var fridge = new Fridge(200);
fridge.addFood("котлета");
*/





/*
var coffeeMachine = new CoffeeMachine3(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
*/

/*
var coffeeMachine = new CoffeeMachine3(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!

var coffeeMachine = new CoffeeMachine3(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
*/

/*
var coffeeMachine = new CoffeeMachine2(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
*/


/*
var coffeeMachine = new CoffeeMachine2(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();
*/


/*
var coffeeMachine = new CoffeeMachine2(100000, 400);

coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();
*/



/*
var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
*/

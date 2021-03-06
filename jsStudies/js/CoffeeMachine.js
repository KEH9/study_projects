"use strict";

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    this.enabled = false;
    var WATER_HEAT_CAPACITY = 4200;
    let timerId;


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

    function onReady() {
        alert( 'Кофе готов!' );
    }

    this.run = function() {
        if (!this.enabled) {
            throw new Error('кофеварка выключена!');
        }
        timerId = setTimeout(onReady, getTimeToBoil());
    };

    this.addWater = function (amount) {
        this.setWaterAmount(amount + waterAmount);
    };

    this.enable = function () {
        this.enabled = true;
    };

    this.disable = function () {
        this.enabled = false;
        clearTimeout(timerId);
    }


}




var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
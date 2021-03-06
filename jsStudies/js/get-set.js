"use strict";


function User(fullName) {

    this.fullName = fullName;

    Object.defineProperties(this, {

        firstName: {

            set: function (newFirstName) {
                this.fullName = (newFirstName + ' ' + this.lastName);                 //fullName.split(' ')[0];
            },

            get: function () {
                return fullName.split(' ')[0]
            }

        },

        lastName: {

            set: function (newLastName) {
                this.fullName = (this.firstName + ' ' + newLastName);                 //fullName.split(' ')[0];
            },

            get: function () {
                return fullName.split(' ')[1]
            }

        }

    });

}





var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров
function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

        firstName: {

            get: function() {
                return this.fullName.split(' ')[0];
            },

            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }

        },

        lastName: {

            get: function() {
                return this.fullName.split(' ')[1];
            },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
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



/*
var age = prompt('age?');

 if (age <= 14 || age >=90) {
     alert('Yes!');
 } else {
 alert('No!')
 }

*/



 /*alert( null || 2 && 3 || 4 );





/*var message =   (login == 'Вася') ? 'Привет' :
                (login == 'Директор') ? 'Здравствуйте' :
                (login == '') ? 'Нет логина' : '';





/*if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

result = (a + b < 4) ? 'Мало' : 'Много';







/*var name_p = prompt('Name');
var pass;

if (name_p == 'z') {
    pass = prompt('Pass?');
    if (pass == 'zz') {
        alert('Welcome!')
    } else if (pass == null) {
        alert('Вход отменён!')
    } else {
        alert('Wrong pass!');
    }
} else if (name_p == null) {
    alert('Вход отменён!');
} else {
    alert('Я вас не знаю! Идите нахуй!')
}
*/
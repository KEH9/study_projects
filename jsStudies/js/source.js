/**
 * Created by Innok on 18.04.2018.
 */
var login = prompt("login?", '');

if  (login == null) {
    alert('Вход отменён');
} else if (login == "Админ") {
    var password = prompt("pass?", '');
    if (password == 'Чёрный Властелин') {
        alert('Добро пожаловать!')
    } else if (password == null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }


} else {
    alert("Я вас не знаю");
}
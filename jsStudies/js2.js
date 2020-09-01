var name_p = prompt('Name');
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



alert (ucFirst("вася") == "Вася");
alert (ucFirst("") == ""); // нет ошибок при пустой строке




function ucFirst(str) {

    var firstLetter = str.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    return (firstLetter + str.slice(1));

}
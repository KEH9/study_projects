
alert ( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert ( truncate("Всем привет!", 20) );

function truncate(str, len) {

    if ( str.length <= len ) {
        return str;
    } else {
        return ( str.slice(0,17) + '...' )
    }

}
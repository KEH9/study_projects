
var simNumCond = document.getElementById('simNumCond');
var simNumAll = document.getElementById('simNumAll');

var mass = [];

var range = 100000;

outer:
for (var i = 2; i <= range ; ++i ) {


    if (i / range * 10 == Math.round(i / range * 10 )) {

        alert("njnjj");
        simNumCond.innerText = ( i / range * 100 );

    }



    for (var j = 2 ; j <= (i - 1); ++j) {
        if (i % j == 0) {
            continue outer;

        }

    }
    mass.push(i + " ");
}

simNumAll.innerHTML = mass;
// ESERCIZIO 

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// let x = 3;

// if ( x % 3 == 0) {
//     console.log('Fizz')
// }

let idbox = document.getElementById('box');

for (x = 1; x <= 100; x++) {

    let divNuovo = document.createElement('div')
    divNuovo.classList.add('quadrati')

    if (x % 3 == 0 && x % 5 == 0) {
        divNuovo.innerText = 'FizzBuzz';
        divNuovo.classList.add('quadrati', 'quadrati-viola')
    }

    else if (x % 3 == 0) {
        divNuovo.innerText = 'Fizz';
        divNuovo.classList.add('quadrati', 'quadrati-verde')
    }
    else if (x % 5 == 0) {
        divNuovo.innerText = 'Buzz';
        divNuovo.classList.add('quadrati', 'quadrati-giallo')
    }

    else {
        divNuovo.innerText = `${x}`;
        divNuovo.classList.add('quadrati', 'quadrati-blue')
    }

    box.append(divNuovo)
}
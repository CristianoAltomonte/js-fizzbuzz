// ESERCIZIO 

// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// let x = 3;

// if ( x % 3 == 0) {
//     console.log('Fizz')
// }


for ( x = 1; x <= 100; x++ ){
    
    if ( x % 3 == 0 && x % 5 == 0 ){
        console.log(`FizzBuzz`)
    }

    if ( x % 3 == 0 ) {
        console.log(`Fizz`)
    }
    else if ( x % 5 == 0 ){
        console.log(`Buzz`)
    }
    
    else{
        console.log(`${x}`)
    }

}
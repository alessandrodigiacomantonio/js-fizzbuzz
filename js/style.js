// console.time('Tempo impiegato METODO UNO');
// for (var i = 1; i <= 100; i++) {
//   if (i%15 == 0) {
//     console.log('FizzBuzz');
//   }
//   if ((i%15 != 0) && (i%3 == 0)) {
//     console.log('Buzz');
//   }
//   if ((i%15 != 0) && (i%5 == 0)) {
//     console.log('Fizz');
//   }
//   if ((i%15 != 0) && (i%5 != 0) && (i%3 != 0)) {
//     console.log(i);
//   }
// }
// console.timeEnd('Tempo impiegato METODO UNO');

// console.time('Tempo impiegato METODO DUE');
// for (var i = 1; i <= 100; i++) {
//   if (i%3 == 0) {
//     if (i%15 == 0) {
//       console.log('FizzBuzz');
//     }  else console.log('Fizz');
//   } else if (i%5 == 0) {
//           if(i%15 == 0) {
//             console.log('FizzBuzz');
//           } else console.log('Buzz');
//   } else console.log(i);
// }
// console.timeEnd('Tempo impiegato METODO DUE');
//
console.time('Tempo impiegato METODO TRE');
for (var i = 1; i <= 100; i++) {
  if (i%5 != 0 && i%3 != 0 ) {
    console.log(i);
  } else if (i%15 == 0) {
    console.log('FizzBuzz');
  } else if (i%15 != 0 && i%3 == 0) {
    console.log('Fizz');
  } else if (i%15 != 0 && i%5 == 0) {
    console.log('Buzz');
  }
}
console.timeEnd('Tempo impiegato METODO TRE');

// console.time('Tempo impiegato METODO UNO');
// for (var i = 1; i <= 100; i++) {
//   if (i%15 == 0) {
//     console.log('FizzBuzz');
//     document.getElementsByClassName('lista')[0].innerHTML += '<li>FizzBuzz</li>';
//   }
//   if ((i%15 != 0) && (i%3 == 0)) {
//     console.log('Buzz');
//     document.getElementsByClassName('lista')[0].innerHTML += '<li>Buzz</li>';
//   }
//   if ((i%15 != 0) && (i%5 == 0)) {
//     console.log('Fizz');
//     document.getElementsByClassName('lista')[0].innerHTML += '<li>Fizz</li>';
//   }
//   if ((i%15 != 0) && (i%5 != 0) && (i%3 != 0)) {
//     console.log(i);
//     document.getElementsByClassName('lista')[0].innerHTML += '<li>'+i+'</li>';
//   }
// }
// console.timeEnd('Tempo impiegato METODO UNO');

// console.time('Tempo impiegato METODO DUE');
// for (var i = 1; i <= 100; i++) {
//   if (i%3 == 0) {
//     if (i%15 == 0) {
//       console.log('FizzBuzz');
//       document.getElementsByClassName('lista')[0].innerHTML += '<li>FizzBuzz</li>';
//     }  else {
//         console.log('Fizz');
//         document.getElementsByClassName('lista')[0].innerHTML += '<li>Fizz</li>';
//       }
//   } else if (i%5 == 0) {
//           if(i%15 == 0) {
//             console.log('FizzBuzz');
//             document.getElementsByClassName('lista')[0].innerHTML += '<li>FizzBuzz</li>';
//           } else {
//             console.log('Buzz');
//             document.getElementsByClassName('lista')[0].innerHTML += '<li>Buzz</li>';
//           }
//   } else {
//       console.log(i);
//       document.getElementsByClassName('lista')[0].innerHTML += '<li>'+i+'</li>';
//     }
// }
// console.timeEnd('Tempo impiegato METODO DUE');

console.time('Tempo impiegato METODO TRE');
for (var i = 1; i <= 100; i++) {
  if (i%5 != 0 && i%3 != 0 ) {
    console.log(i);
    document.getElementsByClassName('lista')[0].innerHTML += '<li>'+i+'</li>';
  } else if (i%15 == 0) {
    console.log('FizzBuzz');
    document.getElementsByClassName('lista')[0].innerHTML += '<li>FizzBuzz</li>';
  } else if (i%15 != 0 && i%3 == 0) {
    console.log('Fizz');
    document.getElementsByClassName('lista')[0].innerHTML += '<li>Fizz</li>';
  } else if (i%15 != 0 && i%5 == 0) {
    console.log('Buzz');
    document.getElementsByClassName('lista')[0].innerHTML += '<li>Buzz</li>';
  }
}
console.timeEnd('Tempo impiegato METODO TRE');

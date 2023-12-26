const score = 100;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1))

const otherNumber = 2144.49073587;

// console.log(otherNumber.toPrecision(1))

let bigNumber = 1234567.89;
let roundedBigNumber = bigNumber.toPrecision(5);
// console.log(roundedBigNumber)

let num = 0.15674;
// console.log(num.toFixed(3))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-BD'))

// ++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math.abs(-6));
console.log(Math.round(4.3));
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

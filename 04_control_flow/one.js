// if
const isUserLoggedIn = true;
const temperature = 32;

// if (temperature < 50) {
//   console.log("Temperature is less than 50");
// } else {
//   console.log("Temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=,
// ===

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`Power is ${power}`);
// }

// console.log(`Power is ${power}`);

//* Its called implicit
// const balance = 1000;
// if (balance > 500) console.log('test')

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// const userLoggedIn = true;
// const debitCard = true;
// const creditCard = false;

// if (userLoggedIn && debitCard) {
//   console.log("Allow to buy course");
// }

// if (userLoggedIn || creditCard) {
//   console.log("Test");
// }

//* Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 4 ?? 25;

// console.log(val1);

//* Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("Less than 80")
  : console.log("Greater than 80");

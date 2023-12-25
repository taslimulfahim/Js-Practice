// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

// # Reference Type (Non primitive)

// Array, Objects, Functions

let typeString = "Fahim";

let typeNumber = 12345;

let typeBoolean = false;

let typeNull = null;

let typeUndefined;

let typeSymbol = Symbol("Symbol");

let typebigInt = 3984573930477749n;

let typeFunction = function () {
  console.log("Fahim");
};

let typeObj = {
  name: "Fahim",
  age: 23,
};

let typeArray = ["name: Fahim", "age, 23"];

// console.table([
//   typeof typeString,
//   typeof typeNumber,
//   typeof typeBoolean,
//   typeof typeNull,
//   typeof typeUndefined,
//   typeof typeSymbol,
//   typeof typebigInt,
//   typeof typeFunction,
//   typeof typeObj,
//   typeof typeArray,
// ]);

// ─────────┼─────────────┤
// │    0    │  'string'   │
// │    1    │  'number'   │
// │    2    │  'boolean'  │
// │    3    │  'object'   │
// │    4    │ 'undefined' │
// │    5    │  'symbol'   │
// │    6    │  'bigint'   │
// │    7    │ 'function'  │
// │    8    │  'object'   │
// │    9    │  'object'

// ++++++++++++++++++++++Memory+++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myReligionName = "Islam";

let anotherName = myReligionName;

anotherName = "Muslim";

// console.log(myReligionName, anotherName)

let userOne = {
  name: "Fahim",
  email: "Tafsanfahim732@gmail.com",
};

let userTwo = userOne;

userTwo.email = "TaslimuFahim@gmail.com";

console.table([userOne, userTwo]);

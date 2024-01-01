const userEmail = [];
const emptyObj = {};

// if (userEmail) {
//   console.log("Got User Email");
// } else {
//   console.log("Dont have user email");
// }

//* Falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//* Truthy value
// "0", "false", " ", [], {}, function(){}

//

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}
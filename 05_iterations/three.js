//* for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  // console.log(greet);
}

//* Maps

const mapTest = new Map();

mapTest.set("BD", "Bangladesh");
mapTest.set("PAK", "Pakistan");
mapTest.set("AFG", "Afghanistan");

// console.log(mapTest)

for (const [i, id] of mapTest) {
  // console.log(i, id);
}

const user = {
  username: "fahim",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
user.username = "sam";
// user.welcomeMessage();

// console.log(this);

//* If you console this keyword in empty area or global scope out of current context in code editor/node/bun/dino etc. it will print empty object but if you console it in browser engine it will print window object

// function chai() {
//     console.log(this)
// }

// chai()

// const chai = function () {
//     let username = 'hitesh'
//     console.log(this.username)
// }
const chai = () => {
  const test = {
    username: "Fahim",
    testIn: function () {
      console.log(`${this.username}`);
    },
  };
  //   test.testIn();
};

// chai();

//* If a function declare as a object key value you access data in this function from object by using "this" keyword otherwise you can't then it will show undefined

// ++++++++++++++ Arrow Function +++++++++++++++++
const arrowOne = (num1, num2) => {
  return num1 + num2;
};

console.log(arrowOne(3, 4));

// const arrowTwo = (num1, num2) => num1 + num2;
const arrowTwo = (num1, num2) => num1 + num2;

console.log(arrowTwo(5, 5));

const returnObjectbyArrow = (num1, num2) => ({ username: "hitesh" });
console.log(returnObjectbyArrow());

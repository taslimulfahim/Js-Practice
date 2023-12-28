//* Singleton => Object.create

//* Object literals =>

const mySym = Symbol("Data");

const jsUser = {
  name: "Fahim",
  "Another Name": "Tasnimul Hasan",
  [mySym]: "Data",
  age: 22,
  location: "Lakshmipur",
  email: "taslimulfhaim@gmail.com",
  isLoggedIn: false,
  lostLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser["Another Name"]); //* If you want access nested key than you have console like this

// console.log(jsUser[mySym]); //* If you want to show symbol key and value in object than you have to console like this

jsUser.name = 'Tasnimul Hasan Fahim'

//* If you do not want to change/update your data than you can freeze your object like this=> 
// Object.freeze(jsUser)


jsUser.greeting = function () {
    console.log('Hello Function')
}

// If you want to refer same object than you have to use this keyword like in this function
jsUser.greetingTwo = function () {
    console.log(`Hello Two Function, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
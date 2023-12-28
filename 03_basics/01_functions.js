function addTwoNumbers(num1, num2) {
  return num1 * num2;
}

// console.log(addTwoNumbers(3, 2));

function loginUserMessage(username = "Fam") {
  if (!username) {
    console.log("Please enter a User name.");
    return;
  } else {
    return `${username} just logged in`;
  }
}

// console.log(loginUserMessage());

// This is called rest operator, you can pass limitless item in one parameter by using it
function calculateCartProduct(...number1) {
  return number1;
}

// console.log(calculateCartProduct(200, 399, 544, 199))

function calculateCartProductOne(val1, val2, ...number2) {
  return number2;
}

// console.log(calculateCartProductOne(100, 388, 544, 533, 555))

const user = {
  username: "Fahim",
  price: 699,
};

function handleUser(userDetails) {
  return `This is username ${userDetails.username} and this is price: ${userDetails.price}`;
}

// console.log(handleUser(user))

const myArr = [200, 400, 500, 199, 399];

function handleArray(getArray) {
  return getArray[1];
}

console.log(handleArray(myArr))
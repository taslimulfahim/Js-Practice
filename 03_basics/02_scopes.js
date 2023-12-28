if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a)
// console.log(b)
// console.log(c);

function one() {
  const username = "Fahim";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   two();
}

// You can access data from your head scope which is considered as a global scope for it but if you want to access data from your child scope which is considered as a block scope you can't access data from it which is explain in the above code.

// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// +++++++++++++++++++++ Interesting ++++++++++++++++++
addOne(5) // If you call function on above it then it will execute without giving error.

function addOne(num) {
  return num + 1;
}


addTwo(5) // But if you declare a function in variable and call it above function now will show you an error that's called hoisting type of something...

const addTwo = function (num) {
    return num +2
}


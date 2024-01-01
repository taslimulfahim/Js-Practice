// * JavasCript Execution Context * //

//todo 3 types of execution context in js Generally first two types considered most of the time:

// => Global Execution Context
// => Functional Execution Context
// => Eval Execution Context

//todo Its run in two phases, which is given billow with example:

// =>  {} Memory Creation Phase
// => Execution Phase

//todo how its work:

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);

//todo this example defending on above code base:

// => 1. Global Execution ⬇️
//          this

// 2. Memory Phase ⬇️
// val1 = undefined --> val2 = undefined --> addNum = undefined --> result1 = undefined --> result2 = undefined

// 3. Execution Phase ⬇️
// val1 = 10 --> val2 = 5 --> addNum = now it will crate a new executional context with new variable environment + New Execution Context for addNum, now its going through again for new Memory Phase and Execution Phase, the reason is whenever you execute a function it will do all over this for each execution --> 

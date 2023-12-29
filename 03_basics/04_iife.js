// immediately Invoked Function Expressions (IIFE)

(function chai() {
  // NAMED IIFE
  console.log(`DB CONNECTED`);
})();
// Programmers use IIFE to prevent global scope pollution by encapsulating code, and it executes immediately upon definition for efficiency and isolation.

((name) => {
  // UNNAMED IFFIE
  console.log(name);
})("hitesh");

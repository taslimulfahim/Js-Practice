const programming = ["js", "rb", "py", "java", "cpp"];

// const values = programming.forEach((item) => {
//   return item;
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);
// console.log(newNums);




const number = [];

myNums.forEach((numb) => {
  if (numb > 5) {
    number.push(numb);
  }
});
console.log(number);

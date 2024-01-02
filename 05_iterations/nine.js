const myNums = [2, 4, 6];

const initialValue = 2;

const newNums = myNums.reduce(
  (accumulator, current) => accumulator + current,
  initialValue
);
console.log(newNums);

const programming = ["js", "rb", "py", "java", "cpp"];

// programming.forEach(function (value) {
// console.log(value)
// })

// programming.forEach((val) => {
//     console.log(val)
// })

// function printMe(item) {
//   console.log(item);
// }

// programming.forEach(printMe);

const myCoding = [
  {
    myLanguage: "JavaScript",
    FileName: "JS",
  },
  {
    myLanguage: "java",
    FileName: "java",
  },
  {
    myLanguage: "python",
    FileName: "py",
  },
];

myCoding.forEach((key) => {
  console.log(key.myLanguage);
});

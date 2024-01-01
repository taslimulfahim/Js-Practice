// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 2;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    // break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;

  default:
    console.log("default");
    break;
}

//* If you don't use the 'break' statement, the program will continue to the next 'case' or 'default' section, no matter if the condition of the current section is met or not. This is known as 'fall-through' behavior.

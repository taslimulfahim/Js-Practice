// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log('5 Is the best number')
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j} and inner loop ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const arr = ["Ali", "Omar", "Khalid"];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  // console.log(element)
}

//* break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i === 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(i);
// }

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("Detected 5");
    continue
  }
  console.log(i);
}

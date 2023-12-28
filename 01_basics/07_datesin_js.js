// Dates

let myDate = new Date();
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 2, 23, 5, 30)
// let myCreatedDate = new Date("2023-01-23");
let myCreatedDate = new Date("2023-01-23");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))

// console.log(newDate.getMonth() + 1);

let newDate = new Date().toLocaleString('default', {
    weekday: 'long'
})
 console.log(newDate)

const muslimDaily = new Object();

muslimDaily.id = "Fahim007";
muslimDaily.name = "Fahim";
muslimDaily.isLoggedIn = false;

// console.log(muslimDaily)

const regularUser = {
  email: "taslimulfahim@gmail.com",
  fullname: {
    myName: {
      firstname: "Fahimm",
      SecondName: "Tasnimul",
    },
  },
};

// console.log(regularUser.fullname.myName.SecondName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2)
const obj4 = { ...obj1, ...obj2 }

// console.log(obj4)
// console.log(obj3)

const user = [
    {
        user1: 'Fahim',
        id: 12345
    },
    {
        user1: 'Fahim',
        id: 12345
    },
    {
        user1: 'Fahim',
        id: 12345
    },
    {
        user1: 'Fahim',
        id: 12345
    },
    {
        user1: 'Fahim',
        id: 12345
    }
]
// console.log(user[1].id)

console.log(muslimDaily)
console.log(Object.keys(muslimDaily))
console.log(Object.values(muslimDaily))
console.log(Object.entries(muslimDaily))
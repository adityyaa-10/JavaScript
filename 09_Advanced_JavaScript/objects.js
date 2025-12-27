
const mySym = Symbol(1);

const user = {
    name: "Aditya",
    "full name": "Aditya Pandey",
    [mySym]: "something..."
}

// console.log(user.name);
// console.log(user["full name"]);

console.log(user[mySym]);
console.log(user);

console.log(typeof (user[mySym]));

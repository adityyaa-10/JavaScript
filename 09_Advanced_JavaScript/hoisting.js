getName();

console.log(x); // This will return undefined if x is defined using var, it will throw error if x is defined using let or const
var x = 0;

console.log(getName);


function getName() {
    console.log("My name is Aditya");
}

// getName();

// console.log(getName);
// function a() {
//     var x = 40;
// }



//Strings

console.log('Strings Section');
let email = 'myname@gmail.com';
console.log(email);
const pass = '7 digits ok';
console.log(pass);

//String Concatenation (To add two strings in a third resultant string);

let firstName = 'Aditya';
let lastName = 'Pandey';
let fullName = firstName + ' ' + lastName ;
console.log(fullName);

//Getting Characters

console.log(fullName[2]);  //in JS, counting starts from zero {similar to array indexing in c++}
// Output => i 
console.log(lastName[0]);
//output => P

//String Length 
console.log(fullName.length); //It includes spaces as well;

//String Methods;
console.log(fullName.toUpperCase()); //Using pre defined functions;
let result = fullName.toLowerCase();
console.log(result , fullName);  //Some methods do not alter the original value but some do.


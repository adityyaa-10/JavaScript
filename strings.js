//Strings

console.log('Strings Section');
let email = 'myname@gmail.com';
console.log(email);
const pass = '7 digits ok';
console.log(pass);

//String Concatenation (To add two strings in a third resultant string);

let firstName = 'Aditya';
let lastName = 'Pandey';
let fullName = firstName + ' ' + lastName;
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
result = fullName.toLowerCase();
console.log(result, fullName);  //Some methods do not alter the original value but some do.


// Common String methods

email = 'myname@example.com';
result = email.lastIndexOf('n');
console.log(result);
result = email.lastIndexOf('e');
console.log(result);

result = email.slice(0, 6); //It will print the characters from 0th index to 6th index, exluding the 6th one! 
console.log(result);

result = email.substr(3, 9); //It will print the characters from 3rd index upto next 9 indices. (*Note = next 9 indices =! 9th index)
console.log(result);

result = email.replace('m', 'w'); //It will replace the first m in the string (*Note => Even if there are multipe number of n's, only the first one will get replaced and the rest will remain same)
console.log(result);

//Template Strings
const title = 'Best reads of 2022';
const author = 'Adi';
const likes = 69;

//Concatenation way
result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

//Template string way
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//Creating HTML Templates;
let html = `
    <h2>${title}</h2>
    <p> By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);
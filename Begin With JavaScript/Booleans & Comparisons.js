//Booleans & Comparisons 
/*console.log(true, false, "true", "false");

//Methods can return booleans
let email = 'myname@example.com';
let result = email.includes('@');

console.log(result);
result = email.includes('!');
console.log(result);

let names = ['Naruto', 'Sasuke', 'Sakura'];
result = names.includes('Sasuke');
console.log(result);

//Comparison Operators
let age = 25;

console.log(age == 25);
console.log(age != 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);

let myName = 'Adi';
console.log(myName == 'Adi'); //true
console.log(myName == 'adi'); //false {Caps and small alphabets are different in JavaScript}
console.log(myName < 'adi'); //lower case letter > upper case letter

//Loose Comparison {Different types can still be equal}

console.log(age == 25);
console.log(age == '25'); //JavaScript performs the type conversion and that's why its output is true
console.log(age != 25);
console.log(age != '25');

//Strict Comparison {Different types can not be equal}

console.log(age === 25);
console.log(age === '25'); //In strict comparison, no type conversion is performed, so the number 25 and the string 25 are two different things.
console.log(age !== 25);
console.log(age !== '25');*/

//Type conversion

let score = '99';
// score++
console.log(score+1);

score = Number(score); //Converting data type from string to a number;
console.log(score + 1);

result = String(50);
console.log(result, typeof result);

result = Boolean(0);
console.log(result, typeof result);//false, all the positive and negative numbers represent true and zero represents false

result = Boolean('0');
console.log(result, typeof result);//true, all the non empty strings represent true in boolean in JavaScript;



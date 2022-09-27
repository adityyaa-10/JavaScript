let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//Maths Operators;

console.log(6 * 3);
let result = radius % 3; //     Modulus/Remainder operator;
console.log(result);
//output  = 1

let areaOfcircle = pi * radius ** 2;   // ('**') => Double star is the operator to give a power to something {radius raised to the power 2}
console.log(areaOfcircle);

//Order of operation => BODMAS

result = 5*4+68+28**2;
console.log(result);

//Increment decrement operator are same as C++;

let followersCount = 68;
followersCount++;
console.log(followersCount); //Output = 69;


followersCount += 100; //It will add 100 to the previous count;
console.log(followersCount); //Output = 169;

followersCount -= 34;
console.log(followersCount); //Output = 135;

//Basically var += xyz means var = var + xyz;
//And the same goes for other mathematical operators as well;

// NaN 
console.log(5* 'Hello');
//Makes no sense, output = NaN; which stands for not a number;

result = 'I have ' + followersCount + ' followers on Instagram';
console.log(result);
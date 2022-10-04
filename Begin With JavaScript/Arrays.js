let ninjas = ['Kakashi', 'Itachi', 'Obito']

console.log(ninjas[1]);    //Indexing starts with zero
ninjas[1] = 'Madara';
console.log(ninjas);

let ages = [30, 54, 17, 28]
console.log(ages[3]);

let random = ['Nagato', 'Tsunade', 69, 58]; //Although it violates the property of array, but we can still store
console.log(random);                        //different data types in a single array;

//array length;
console.log('There are ' + ninjas.length + ' elements in the array');      //Concatenation

let output = `There are ${ninjas.length} elemnts in the array`;             //Template string
console.log(output);

// Array Methods

result = ninjas.join(',');          //To join the elements with some random things like commas, hyphens, etc;
console.log(result);

result = ninjas.indexOf('Madara')       //To obtain the index by entering the element
console.log(result);

result = ninjas.concat(['Naruto', 'Sasuke']);
console.log(result);

result = ninjas.push('Orochimaru');
console.log(result);

result = ninjas.pop();
console.log(ninjas);
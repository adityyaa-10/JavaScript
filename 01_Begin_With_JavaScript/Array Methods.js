//Array Methods

const intro = ["My", "name", "is", "Adi"];
console.log(intro.join(" "));

intro.pop();
// console.log(intro.join(" "));

intro.push("Aditya");
console.log(intro.join(" "));

intro.shift();
console.log(intro.join(" "));

intro.unshift("My")
console.log(intro.join(" "));

delete intro[3];
console.log(intro.join(" "));

intro.push("Adi");
console.log(intro.join(" "));


const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 0, "Lemon", "Kiwi");
// console.log(fruits.join(" "));

//Splice function can be used to remove any element

fruits.splice(2, 2);          //First parameter is for the index
console.log(fruits.join(" "));//and second parameter is for the numnber of elemnts to be removed;

const sorcerers = ['Itadori', 'Fushiguro', 'Satoru', 'Kiyotaka'];
// const jujutsu = sorcerers.slice(0);     The index we enter is from where slicing will start;
// console.log(jujutsu.join(" "));

const jujutsu = sorcerers.slice(0,2);  //Two parameters, slicing begin to slicing end.
console.log(jujutsu.join(" "));       //Note: The last index written is excluded from the slicing;


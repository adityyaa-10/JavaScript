const products = [
    { name: 'gold star', price: 50 },
    { name: 'mushroom', price: 69 },
    { name: 'green shells', price: 49 },
    { name: 'banana skin', price: 10 },
    { name: 'mushroom', price: 19 }
];

// const filteredArray = products.filter(product => product.price>20)

// const promos = filteredArray.map(product =>{
//     return `the ${product.name} is ${product.price /2} pounds`;
// });


const promos = products.filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);
console.log(promos);



//Chaining Array method is for chaining two or more than two arrray methods in a single instruction;
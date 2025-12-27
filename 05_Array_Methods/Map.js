const prices = [10, 15, 26, 19, 46, 38];

//Map method is used to update all values inside the array all at once

// const salePrices = prices.map((price) => {
//     return price / 2;                       
// });

//Simpler code for above statement;

const salePrices = prices.map(price => price /2);

console.log(salePrices);

const products = [
    { name: 'gold star', price:50},
    { name: 'mushroom', price:69},
    { name: 'green shells', price:49},
    { name: 'banana skin', price:10}
];

const saleProducts = products.map(product =>{
    if (product.price>50)
    return {name: product.name, price:product.price/2};
    else 
    return product;
})

console.log(saleProducts);
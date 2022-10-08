 /*let Hello = function(){
    return 'Hello World';
 }*/

 //Re writing the above function in Arrow method

let hello = () => 'Hello World!';
let result = hello();
console.log(result);

/*const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};*/
 //Re writing the above function in Arrow method

 const calcArea = radius => 3.14*radius**2;
 result = calcArea(5);
 console.log(result); 

 /*const bill = function(cost,tax){
    let total = 0;
    for(let i = 0; i<cost.length ; i++){
        total += cost[i] + cost[i]*tax;
    }
    return total;
 }

 result = bill([15,25,30],0.2);
 console.log(result);*/

  //Re writing the above function in Arrow method

const bill = (cost,tax) => {
    let total = 0;
    for(let i = 0; i<cost.length ; i++){
        total += cost[i] + cost[i]*tax;
    }
    return total;
};
result = bill([15,25,30],0.2);
console.log(result);


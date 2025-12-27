//Declaring a Function;

function Hello() {
    console.log("Hello World");
}

// Calling a function
Hello();
Hello();
Hello();
Hello();

//Expression -> When we store a function in a variable, it is known as an expression

let speak = function () {
    console.log('Good day!!');
};

speak(); //Calling the expression.

//IMPORTANT ==== If we define function declaration = we can call that function anywhere in the file i.e. 
//before declaring the function as well, but it is not true in the case of function expression.


//Arguments and Parameters
const greet = function(name='Adi', time='mornin'){
    console.log(`good ${time} ${name}`);
}
greet();
greet('Aditya',);
greet('Adiiii','evenin');

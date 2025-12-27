const accountId = 123;
let accountEmail = "aditya@gmail.com";

var password = "12345" // var usage is not preffered because of issues in block scope and functional scope;

let accountCity; // It will print undefined because it has no value assigned;

console.table([accountId, accountEmail, password, accountCity]);

const url = "https://google.com/aditya%20pandey";
url.replace("%20", '-');
const newUrl = url.replace("%20", '-');

// console.log(url); // replace will not take place, because a copy of url is modified and the actual url remains as it is
console.log(newUrl);

function testVar() {
    if (true) {
        var newVar = "Accessible in whole function"
    }
    console.log(newVar);
}

testVar();
// due to above issue of functional scoping, var is not recommended to use
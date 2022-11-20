const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e =>{
e.preventDefault();
// console.log(username.value);
console.log(form.username.value);
});

const username =  'adityyaa';

const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// if(result){
//     console.log('passed');

// }

// else{
//     console.log('failed')
// }

let result = username.search(pattern);

console.log(result);
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.github.com');
link.innerText = "Let's go to GitHub!!"
// link.setAttribute('align','center');


const msg = document.querySelector('p');
console.log(msg.getAttribute('class')); //output - error(name of the class);

msg.setAttribute('class', 'success');

msg.setAttribute('style', 'color:red');
msg.setAttribute('align','center');
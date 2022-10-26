/*const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.github.com');
link.innerText = "Let's go to GitHub!!"
// link.setAttribute('align','center');


const msg = document.querySelector('p');
console.log(msg.getAttribute('class')); //output - error(name of the class);

msg.setAttribute('class', 'success');

msg.setAttribute('style', 'color:red');
msg.setAttribute('align','center');

const title = document.querySelector('h1');
title.style.color = 'crimson';
link.style.textDecoration = 'none';
link.style.fontSize = '31px';


const content = document.querySelector('p');
console.log(content.classList); 

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');*/

const para = document.querySelectorAll('p');
para.forEach(p =>{
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    else if(p.textContent.includes('success')){
        p.classList.add('success');
    }
    else{
        p.classList.add('warning');
    }
});

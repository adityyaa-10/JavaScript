const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText += ', my name is Aditya Pandey!!!';
// console.log(para.innerText);

const paras = document.querySelectorAll('p');
// paras.forEach(
//     para => {
//         console.log(para.innerText);
//         para.innerText += ' adding new text'
//     }
// );

const content = document.querySelector('.content');
// content.innerHTML = '<h2>Tum Mujhe Paragraph do, Mai Tumhe h2 Dunga</h2>';

const people = ['a','b','c'];
people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});
const article = document.querySelector('article');

console.log(article.children);

console.log(Array.from(article.children));//To cinvert HTML Collection into an Array

Array.from(article.children).forEach((child) => {
    child.classList.add('article-element'); //To add a new class to every child of a parent in JS
})
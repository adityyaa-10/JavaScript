const button = document.querySelector('button');

const ul = document.querySelector('ul');
button.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.textContent = 'Still Regretting!!!';
    // li.textContent = 'I have no idea what do with my life';
    ul.prepend(li);
    ul.append(li);
});

const items = document.querySelectorAll('li');

items.forEach(item =>{
    item.addEventListener('click', e =>{
        console.log('Item Clicked');
        console.log(e);
        console.log(e.target);
        e.target.remove();
    });
});

// const ul = document.querySelector('ul');
// ul.remove();

ul.addEventListener('click', e => {
    if(e.target.tagName ==='LI'){
        e.target.remove();
    }
});
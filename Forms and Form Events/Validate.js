const form = document.querySelector('signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e=> {
    e.preventDefault();

    const username =   form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        //feedback good infoo
        feedback.textContent = 'That username is valid!';
    }
    else{
        //feedback help info
        feedback.textContent = 'Username must contain atleast 6 alphabets!';
    }
});



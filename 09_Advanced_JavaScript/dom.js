// Add a new Language:

// Using innerHTML (BRUTE FORCE);
function addLanguageEasy(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;

    const languagesList = document.querySelector('.languages');
    languagesList.appendChild(li);
}


/*
    Steps: 
    1. create a new li element
    2. create a new textNode for li element;
    3. store reference of the list
    4. append the new element in the list
*/

function addLanguage(langName) {
    const li = document.createElement('li');
    // console.log(li);
    const textNode = document.createTextNode(langName);

    li.appendChild(textNode);

    const languages = document.querySelector('.languages')
    languages.appendChild(li);
}

addLanguage("Python")
addLanguage("Ruby")
addLanguageEasy("TypeScript")

// Edit an existing language:

function editLanguage(number, langName) {
    const oldLang = document.querySelector(`li:nth-child(${number})`);

    const newLang = document.createElement('li');
    // newLang.textContent = `${langName}`; // Less preferred approach

    // More likely approach :-
    const textContent = document.createTextNode(langName);
    newLang.appendChild(textContent);

    oldLang.replaceWith(newLang);
}

editLanguage(1, "CPP")
editLanguage(3, "JAVA")
editLanguage(1, "SQL")


function deleteLanguage(position) {
    const toBeDeleted = document.querySelector(`li:nth-child(${position})`)
    toBeDeleted.remove();
}

// deleteLanguage(1)
// deleteLanguage(3)
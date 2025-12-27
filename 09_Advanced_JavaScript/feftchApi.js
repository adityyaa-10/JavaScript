// fetching my data from gitHub api 


// 1. Using async await
async function fetchMyData() {
    try {
        const response = await fetch("https://api.github.com/users/adityyaa-10");
        const data = await response.json();
        // converting the response from string to json is a time taking process, so we put await before it;
        // console.log(data);

        const numberOfFollowers = data.followers;
        console.log(`Followers on GitHub: ${numberOfFollowers}`)
    } catch (error) {
        console.log(error);
    }
}

fetchMyData();


// 2. Using promise chaining:

fetch("https://api.github.com/users/adityyaa-10")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(`Following on GitHub: ${data.following}`)
    })
    .catch((error) => {
        console.log("Error : ", error);
    })
// Create a new promise:

// Wrong syntax:
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 1 completed")
    }, 1000)
})

promiseOne
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

// We know that, resolve and .then() are connected to each other,
// thus, on successful Async task completion, We will need to call the resolve(function)

// Correct Syntax:

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 completed");
        resolve({ status: 200, message: "Success Message" });
    }, 2000)
})

promiseTwo
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
    })

// The above approach will successfully execute promiseTwo, and promiseTwo will be consumed properly;


// Sending data and error through the promise;

const promiseThree = new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
        setTimeout(() => {
            console.log("Async task 3 completed")
            resolve({ status: 201, message: "Another Success Message" });
        }, 3000)
    } else {
        reject("Due to some error, task could not be completed");
    }
})


promiseThree
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })


// Chaining promises:

const promiseFour = new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
        setTimeout(() => {
            console.log("Async task 4 completed")
            resolve({ status: 220, message: "Success message for 4th promise" });
        }, 4000)
    } else {
        reject("Due to some error, task could not be completed");
    }
})

promiseFour
    .then((responseOne) => {
        console.log(responseOne);
        // console.log(responseOne.status);
        return responseOne.status;
    })
    .then((responseTwo => {
        console.log(responseTwo);
    }))
    .catch((error) => {
        console.log(error);
    })


// Consuming promise using async and await;

const promiseFive = new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
        setTimeout(() => {
            console.log("Fifth async task is also completed")
            resolve({ status: 200, userName: "adityyaa-10" })
        }, 1000)
    } else {
        reject("Something Weird happened");
    }
})

// Consuming function below:

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(typeof (response));
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();


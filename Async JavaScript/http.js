const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting resource')
            }
        })

        request.open('GET', resource);
        request.send();
    })
}

console.log(1);
console.log(2);


// Callback hell :- If there is a situation of nested callbacks

// getTodos('./todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('./todos/shaun.json', (err, data) => {
//         console.log(data);
//         getTodos('./todos/mario.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

//  To counter callback hell, we use promises in our code;

// getTodos('todos/luigi.json').then((data) => {
//     console.log('Promise Resolved : ', data)
// }).catch((err) => {
//     console.log('Promise Rejected : ', err)
// })

// Chaining Promises
getTodos('todos/luigi.json').then((data) => {
    console.log('Promise 1 Resolved : ', data)
    return getTodos('todos/mario.json')
}).then((data) => {
    console.log('Promise 2 Resolved : ', data);
    return getTodos('todos/shaun.json')
}).then((data) => {
    console.log('Promise 3 Resolved : ', data);
}).catch((err) => {
    console.log('Promise Rejected : ', err)
})

const getSomething = () => {

    return new Promise((resolve, reject) => {
        // fetch something 
        resolve('some data')
        // reject('some error')
    });
};

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

getSomething().then((data) => {
    console.log(data);
}).catch((err) => {  //Catch is used for catching error;
    console.log(err);
})

console.log(3);
console.log(4);
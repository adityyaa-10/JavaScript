// fetch api
// fetch('todos/luigi.json').then((response) => {
//     console.log('Promise Resolved', response)
//     const data = response.json(); //It will not work since response.json is a promise
//     console.log(data)
// }).catch((err) => {
//     console.log('Promise Rejected', err)
// })

// fetch('todos/luigi.json').then((response) => {
//     console.log('Promise Resolved', response)
//     return response.json();  //So we return the response.json and make resolving action 
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log('Promise Rejected', err)
// })


// ASYNC AND AWAIT

const getTodos = async () => {

    const response = await fetch('./todos/luigi.json')

    if (response.status !== 200) {
        throw new Error('Can not fetch data')
    }

    const data = await response.json()
    return data
};

console.log(1)
console.log(2)

getTodos()
    .then((data) => {
        console.log('Resolved : ', data)
    })
    .catch((err) => {
        console.log('Rejected : ', err);
    })


console.log(3)
console.log(4)
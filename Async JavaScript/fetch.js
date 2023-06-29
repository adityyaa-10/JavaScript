// fetch api
// fetch('todos/luigi.json').then((response) => {
//     console.log('Promise Resolved', response)
//     const data = response.json(); //It will not work since response.json is a promise
//     console.log(data)
// }).catch((err) => {
//     console.log('Promise Rejected', err)
// })

fetch('todos/luigi.json').then((response) => {
    console.log('Promise Resolved', response)
    return response.json();  //So we return the response.json and make resolving action 
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Promise Rejected', err)
})
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if (request.readyState === 4) {
            callback('Could not fetch data0', undefined)
        }
    })

    request.open('GET', resource);
    request.send();
}

console.log(1);
console.log(2);


// Callback hell :- If there is a situation of nested callbacks

getTodos('./todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('./todos/shaun.json', (err, data) => {
        console.log(data);
        getTodos('./todos/mario.json', (err, data) => {
            console.log(data);
        });
    });
});

console.log(3);
console.log(4);
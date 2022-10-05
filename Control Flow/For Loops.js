//For loops
for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}
console.log("Loop Finished");

console.log("New loop Begin");
const names = ['Naruto', 'Sasuke', 'Itachi'];

for(let i = 0; i<names.length;i++){
    console.log(i);
}
console.log("Loop Finished");

console.log("New loop Begin");
for(let i = 0 ; i<names.length ; i++){
    console.log(names[i]);
}
console.log("Loop Finished");

console.log("New loop Begin");
for(let i= 0; i<names.length ; i++ ){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
console.log("Loop Finished");
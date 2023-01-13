const before = new Date('January 1 2023 11:15:19');
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins =Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);

console.log(mins);
console.log(hours);
console.log(days);

// Converting time stamps into date objects

const timestamp = 1667787767414881; 
console.log(new Date(timestamp));

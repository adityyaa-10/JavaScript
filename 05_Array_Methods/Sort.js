// 1. Sorting strings 

const ninjas = ['Naruto', 'Sasuke', 'Kakashi', 'Jiraiya', 'Itachi', 'Obito', 'Hashirama'];

// ninjas.sort();          //Sort method is a destructive method
// console.log(ninjas);   //It changes the original array


// 2. Sorting numbers
const scores = [10, 5, 19, 56, 75, 24];

scores.sort();  //It only compares the first digit of the number {Drawback}
// scores.sort((a,b)=> a-b);
console.log(scores);

// 3. Sorting objects

const players = [
    { player: 'Kohli', score: 183 },
    { player: 'Rohit', score: 264 },
    { player: 'Kohli', score: 169 },
    { player: 'Sachin', score: 200 },
    { player: 'Sehwag', score: 219 },
];

// players.sort((a,b) => {
//     if(a.score>b.score)
//     return -1;
//     else if(a.score<b.score)
//     return 1;
//     else return 0;
// });


players.sort((a,b)=> a.score - b.score);  

console.log(players);
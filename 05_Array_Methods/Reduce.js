const marks = [10, 58, 44, 18, 26, 37, 09];

const passedStudents = marks.reduce((count, score) => {    
    if(score>30){
        count++;
    }
    return count;
},0); 

// console.log(`${passedStudents} students passed out of ${marks.length}`);

const scores = [
    {player: 'Kohli', score: 183},
    {player: 'Rohit', score: 264},
    {player: 'Kohli', score: 169},
    {player: 'Sachin', score: 200},
    {player: 'Sehwag', score: 219},
];

const KohliTotal = scores.reduce((acc, curr) => {
    if(curr.player ==='Kohli'){
        acc += curr.score;
    }
    return acc;
},0);

console.log(`Total runs scored by Kohli is ${KohliTotal}`);
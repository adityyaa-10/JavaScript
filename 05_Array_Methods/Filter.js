const scores = [10,15,26,19,46,38];

// const filteredScores = scores.filter( score =>{
//     return score>20;
// });

// console.log(filteredScores);

const ninjas = [
    {name: 'Naruto', premium: true},
    {name: 'Sasuke', premium: false},
    {name: 'Itachi', premium: true},
    {name: 'Kakashi', premium: false},
    {name: 'Madara', premium: false},
    {name: 'Obito', premium: true}
];

// const premiumNinjas = ninjas.filter(ninja =>{
//     return ninja.premium;
// });

const premiumNinjas = ninjas.filter(ninja => ninja.premium);

console.log(premiumNinjas);
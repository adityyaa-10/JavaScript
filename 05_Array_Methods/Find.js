const scores = [10, 25, 19, 56, 75, 24];

//Find method is used to return the first element in the array that satisfies certain condition 
//which we provide.


const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);
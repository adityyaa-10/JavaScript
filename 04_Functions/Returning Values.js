//Function to calculate area of a circle;

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
}

var area  = calcArea(3);
console.log(area);
area = calcArea(5);
console.log(area);

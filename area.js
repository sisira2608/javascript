//Area of circle
const prompt = require('prompt-sync')();
let pi = 3.14;
let r=parseInt(prompt("enter the radius:"))
let Area;
Area= pi * r * r;
console.log("Area of Circle is: " + Area);

//Sum of two numbers
let a=parseInt(prompt("enter the 1st number:"))
let b=parseInt(prompt("enter the 2nd number:"))
sum= a+b;
console.log(`sum :${sum}`);

//area of square
let side=parseInt(prompt("enter the side"))
let area1;
area1= side * side;
console.log("area of square:"+area1);

//Area of triangle
let base=parseInt(prompt("enter the base value:"))
let height=parseInt(prompt("enter the height value:"))
let areat;
areat = base * height / 2 ;
console.log(`area of triangle is: ${areat}`);

//arithmatical operator
let m = 5;
let n = 3;
let z = m + n;
console.log(`z:${z}`);
let y = m - n;
console.log(`y:${y}`);
let x = m / n * 2;
console.log(`x:${x}`);


//unary operators
let un = 5;
let unn= 2;
un++;
console.log("un=", un);


//assignment operators

let ap = 5;
let ao = 2;
console.log("ap += 1 =", ap +=1);
console.log("ap **ao =", ap **ao);






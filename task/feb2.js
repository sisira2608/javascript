const prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Enter a number:"));
let n2 = parseInt(prompt("Enter a number:"));
let num1 = n1;
let num2 = n2;

while (num1 !== num2) {
    if (num1 > num2) {
        num1 -= num2;
    } else {
        num2 -= num1;
    }
}

console.log("GCD is:", num1);


let arr = [-5, 1, 5, 0, -7];
let n = arr.length;
let result = [];

for (let i = 0; i < n; i++) {
    if (i > 0) {
        if (arr[i] < 0) {
            result.push(result[i - 1] - Math.abs(arr[i]));
        } else {
            result.push(result[i - 1] + arr[i]);
        }
    } else {
        result.push(arr[i]);
    }
}

console.log(result);












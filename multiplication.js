const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter an integer: '));
const range = parseInt(prompt('Enter a range: '));
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}


// take the input from the user

const num = prompt('Enter the number: ');

const result = Math.sqrt(num);
console.log(`The square root of ${num} is ${result}`);
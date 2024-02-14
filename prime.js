const prompt = require('prompt-sync')();
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}



const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter the range: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);


for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

  
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

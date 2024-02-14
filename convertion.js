const prompt = require('prompt-sync')();
const kilometers = prompt("Enter value in kilometers: ")
const factor = 0.621371
const miles = kilometers * factor
console.log(`${kilometers} kilometers is equal to ${miles} miles`);

const celsius = prompt("Enter a celsius value: ");
const fahrenheit = (celsius * 1.8) + 32
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

const prompt = require('prompt-sync')();
const calculator = prompt('Enter operator ( either +, -, *, % or / ): ');
let x = 5;
let y = 4;
let result;
switch(calculator){
    case '+':   
    result = x +y;
    console.log("x+y=", result );
    break;

    case '-':   
    result = x -y;
    console.log("x+y=", result );
    break;

    case '*':   
    result = x * y;
    console.log("x*y=", result );
    break;


    case '/':   
    result = x / y;
    console.log("x/y=", result );
    break;

    case '%':   
    result = x % y;
    console.log("x%y=", result );
    break;

    default:
        console.log('Invalid operator');
        break;

}
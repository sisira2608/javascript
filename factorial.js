const prompt = require('prompt-sync')();
let m=parseInt(prompt("enter the number:"));
let fact=1;
for(let i=1;i<=m;i++)
{
    fact= fact*i;
}
console.log("fact=",+fact);
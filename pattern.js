
//square
const prompt = require('prompt-sync')();
let m=parseInt(prompt("enter the row value m:"))
let n=parseInt(prompt("enter the row value n:"))

let string="";
for(i=0;i<m;i++){//row
    for(j=0;j<n;j++){//column
        string+="*";
    }
string+="\n";
   
}
console.log(string);



let p = 5;
let str = "";

for (let i = 1; i <= p; i++) {

  for (let j = 1; j <= p - i; j++) {
    str += "*";
  
  }
  str += "\n";
}
console.log(str);
//triangle
let a = 5;
let str = "";

for (let i = 1; i <= a; i++) {

  for (let j = 1; j <= a - i; j++) {
    str += " ";
  }
 
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);


let s=5;
let str="";

for (let i = 1; i <=s; i++) {

  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);





let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}



let n = 5;
for (let i = n; i >= 1; i) {
    let str = "* ";
    console.log(str.repeat(i));
}


let x = 5; 
for (let i = 1; i <= x; i++) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((x - i)) + str.repeat(2 * i - 1)); 
}


for (let i = x - 1; i >= 1; i--) { 
    let str = "*"; 
    let space = ' '; 
    console.log(space.repeat((x - i)) + str.repeat(2 * i - 1)); 
}
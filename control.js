let a = 15;
let b = 8;
if(a>b){
    console.log("a is greater than b");
}

    else {
    console.log("b is less than a")
    }

// greater number
let x = 2;
let y= 4;
let z= 5;
   if (x >= y && x >= z) {
        console.log("The largest number is x:", +x);
   }
   else if(y>=x && y >=z ){

console.log("The largest number is y:", +y);

   }
   
   else{
    console.log("The largest number is z:", +z);
   }


//drive or not
   const prompt = require('prompt-sync')();
   let age=parseInt(prompt("enter the age:"));
   if(age>18){
    console.log("you can drive");
   }
   else{
    console.log("you  can't drive");
   }

   //odd ever even
   let number=parseFloat(prompt("enter the number:"));
   if(number%2==0){
    console.log("even");
   }
   else{
    console.log("odd");
   }

   //age of a person lies 10 and 20
   let ages=parseFloat(prompt("enter the number:"));
   if(ages<=10 || ages<=20)
   {
      console.log("age of a person lies below 10 and 20");
   }
   else{
      console.log("greater 20");
   }

   //divisible by 2 and 3
   let divisible=parseFloat(prompt("enter the number:"));
   if(divisible%2==0){
    console.log("divisible by 2");
   }
   else if(divisible%3==0){
    console.log("divisible by 3");
   }

//0 or +ve or -ve


let num=parseFloat(prompt("enter the number:"));
if(num>0){
   console.log("positive number");
  }
  else if(num<0){
   console.log("negative number");
}
   else {
      console.log("zero"); 
   }


   
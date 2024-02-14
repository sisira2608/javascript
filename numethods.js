// Number Methods:=
//  math objects

// abs,sqrt,cel,floor,max,min,random,pi,round

// abs-positive nmbers 

let a=-5;
let ab=Math.abs(a);
console.log(`the absoulte value of ${a} is ${ab}` );

// sqrt

let aa= 5;
console.log(Math.sqrt(aa));

// round

let c =5.3;
console.log(Math.round(c));
// ceil
let d = 5.2;
console.log(Math.ceil(d));

// floor

let e = 5.67
console.log(Math.floor(e));
// pow

let f=7;
console.log(Math.pow(2,3));

// min
console.log(Math.min(1,0,8,7,6,1));
// max
console.log(Math.max(5,6,7,3,2,2));
// random - to print a random number from 0 to 1
console.log(Math.random());
// pi -3.14
console.log(Math.PI);
// 



// //////////////////////////////////////////////////////////////number methods////////////////////////////////////////////////////////////////////////////////////
// parsFloat,easeInfinite,toPrecision,toFixed,isNan,
// Array balance=
// map

let bb=[1,2,3,4];
let mapped=bb.map(num=>num*num);
console.log(mapped);

// filter-even numbers

let fil=[12,2,3,44,56];
let ff=fil.filter(n=>n%2==0);
console.log(ff);

// call back function
function greet(name,callback){
    console.log("hello"+name);
    callback();
}
function saygoodbye(){
    console.log("goodbye");
}
greet("freena",saygoodbye);

// reduce-

// arry.reduce(function(){

// })

// sum of array

let arrr=[1,2,3,4];
let sum=arrr.reduce(function(acc,current){
    return acc+current
})


console.log(sum);

// find()- oru cllback functionlude condition chech chaiyunnu and then aa condition satisfy chaiyunn first element ennia print chaiyum 

let fi=[1,2,3,4,6,9,6,]
let i=fi.find(num=>num%2==0);
console.log(i);

// isArrayof - to check whether the variable is array or not
let ee =Array.isArray(fi);
console.log(ee);

// indexof-

let inn=[1,2,3,4,55,6,7];
console.log(inn.indexOf(55));

// 
let now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());  //ut8


// 

// customdate

let cumstomdate=new Date(2024,3,29);
console.log(cumstomdate.toDateString());

// 
let newDatte=new Date();
console.log(newDatte.setFullYear(2024));  //ut8 format

console.log(newDatte.toDateString());

// Number methods

// parseInt,parsefloat,to fixed, rto precisionr,number(),isinteger()

let n="99"
// console.log(typeof(n));
let nu=Number(n);
console.log(nu);
console.log(typeof(nu));

// parseInt
 let p="10.66";
//  console.log(p);
 let pl=parseInt(p);
 console.log(pl);

//  parseFloat
let fl="10.01";
let l=parseFloat(fl)
console.log(l);

// isinteeger
let ii="0.5";
let iii=Number.isInteger(ii)
console.log(iii);
// to fixed

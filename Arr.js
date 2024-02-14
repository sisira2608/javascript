let arr=["apple","orange","graes","kiwi","pappaya"];
// let p=arr.push("kiwi") //
console.log(arr.push("guva"));  //add an element to its last of an arraay
console.log(arr.pop());  //remove an element to its last of an arraay
console.log(arr.unshift("gg"));//add an element to its first of an arraay
console.log(arr.shift());//remove an element to its first of an arraay
console.log(arr.splice(2,1,12,15))


console.log(arr);
let ar=[1,2,3,3,4,5,6,7];
console.log(ar.slice(2,5));

// // array methods


// forEach()-iterate over an arary+

let a=[1,2,3,4,5];
a.forEach((i)=>{
    console.log(i);
})


// //destructure array
 
let num=[1,2,3,4,5];
console.log(num);
let [b,c,d]=num;
console.log(c,d);

// // convert array ointo string-toString()

let aa=[1,2,3,45];
let bb=aa.toString();
console.log(bb);
console.log(typeof(bb));

// // convert strig to array

let ll="hello" ;
let gg=ll.split();
console.log(gg);
console.log(typeof(gg));

// // join
let rr=[1,2,3,4];

let dd=rr.join("h");
console.log(dd);
// // concta

let ee=[1,2,3,4];
let ff=[2,3,4,5];
console.log(ee.concat(ff));
console.log(ee.join(ff));

// // sort 
let t=[3,6,8,2,9,0];
console.log(t.sort());

// 

let com=[5,6,2,1,9,6];
console.log(com);
let cc=(a,b)=>{
    return b-a;
}


com.sort(cc);
console.log(com);

// rever
let s=[1,2,5,1,3,4]

console.log(s.reverse())

// map-loop 

// arr.map(function(){
//     stmt
// })

//square the array using map 

let m=[1,2,3,4,5,6];
let ma=m.map((num)=>{
   return num*num
})

console.log(ma);

// callback function, 

d// function hello(a,b){
//     return a+b;
// }
// console.log(hello(5,6));


function greet(name,c){
    console.log("hello"+name);
    c();
}
function hi(){
    console.log("hi everyone");
}

greet("freena",hi)

// 

let r=()=>{
console.log('hi');
}

let sum=(a,b)=>  a+b;
console.log(sum(5,7));



// reduce-

// acc=0,1,3,6,10,15,21
// current=1   0+1=1,1+2=3,3+3=6,6+4=10,10+5=15,15+6=21,
let re=[1,2,3,4,5,6]
let x=re.reduce((acc,current)=>{
    return acc+current;
})
console.log(x);


// filter-create an new array based on existing array with particular condition
let fi=[1,2,3,4,5,6,7,8,];
let li=fi.filter((n)=>{
return n%2==0
})
console.log(li);

// find() -existing
let fin=[1,2,3,4,5,6,7,8,];
let i=fin.find((n)=>{
return n%2==0
})
console.log(i);












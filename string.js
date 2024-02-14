// STRING

let a ="string";
let b="5";
console.log(a,b);

// string merthods
// string length,
// substring, substr, trim, trim Start, trim end,slice,remove,remove ,removeAll, match, matchAll
// toUppercase,toLowercase,concate,charAt,charCodeAt,split

// string length
let x="apple";
let y="4"
console.log(x.length);
// trim- whitespace remove 
let c="  hello  "
console.log(c);
console.log(c.trim());
console.log(c.trimStart());
console.log(c.trimEnd());



// touppecase

let e="freena";
console.log(e.toUpperCase());

// toLowercase

let f="FRENA";
console.log(f.toLowerCase());
// ChartAt

let g="freena";
console.log(g.charAt(2));

// chatcodeAt - select character nte utf-16 code tharum
console.log(g.charCodeAt(2));


// slice - to get particular portion
let d="hello world";
console.log(d.slice(2));
// substring -
console.log(d.substring(2,4));  //

// substr-
console.log(d.substr(2,4));

// replace
let h="freena mern";
console.log(h.replace("mern","francis"));

// replaceAll - 
let j="hey everyone , welcome to class, the class is so good.i like the class";
console.log(j.replaceAll("class","mernclass"));
// remove



//concate

let l="apple";
let m="mango";
console.log(l.concat(m));
console.log(l+m);



let n = 4;
let str = "";

for (let i = 1; i <= n; i++) {

  for (let j = 0; j <= n - i; j++) {
    str += " ";
  }
 
  for (let k = 0; k <  i ; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);


let nn = 5;
for (let i = 1; i <= nn; i++) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat((nn-i))+str.repeat(i));
}



let mn = 5;
for (let i = mn; i >= 1; i--) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat(mn-i)+str.repeat(i));
}

let a = 1;
let b= 2;
let c = 3;
x = b + c;
y = c - a;
z = a + b;
if(a>b && a>c)
{
    console.log(+x);
}
else if(b>a && b>c)
{
    console.log(+y);
}
else{
    console.log(+z);
}



const n = 5;
for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= 2 * n; j++) {
        str += (i + j >= n + 1 && i >= j - n + 1) ? (j - n + i) + ' ' : '  ';
    }
    console.log(str);
}

const newSet=new Set()
newSet.add(1);
newSet.add(2)
newSet.add("hello");
console.log(newSet);

// has
console.log(newSet.has(1));
console.log(newSet.delete(2));
console.log(newSet);

// set loop
for(const value of newSet){
    console.log(value);
}
console.log(newSet.size);


//clear  set size

newSet.clear()
console.log(newSet);

//hoisting

fun() // Calling the expression
 
let fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}




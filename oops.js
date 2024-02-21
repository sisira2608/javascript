let student={
    name: 'sisira',
    address: 'abcvilla',
    phone:44546456,

}
console.log(student);

class students{
constructor(name,depart,rollno){
    this.name=name
    this.depart=depart;
    this.rollno=rollno
}
 
}

let a= new students("sisira","mca", 122495);
let b=new students("vineesh","ma", 122485);
console.log(b);
console.log(a);

//prototype

class studentts{
    constructor(name,depart,rollno){
        this.name=name
        this.depart=depart;
        this.rollno=rollno
    }

    studenttdetails()
{
    console.log("name"+this.name);
    console.log("depart"+this.depart);
    console.log("rollno"+this.rollno);
}
showdetails(){
    console.log("my name is"+this.name,"am studying",this.depart,"my roll no is",this.rollno);
    
}

}

let b1=new studentts("sisira","mca", 122495);
let b2=new studentts("vineesh","ma", 122485);
console.log(b1);
b1.showdetails();
b2. studenttdetails();

//static

class studentts{
    constructor(name,depart,rollno){
        this.name=name
        this.depart=depart;
        this.rollno=rollno
    }

   static studenttdetails()
{
    console.log("name"+this.name);
    console.log("depart"+this.depart);
    console.log("rollno"+this.rollno);
}
showdetails(){
    console.log("my name is"+this.name,"am studying",this.depart,"my roll no is",this.rollno);
    
}

}

let b1=new studentts("sisira","mca", 122495);
let b2=new studentts("vineesh","ma", 122485);
console.log(b1);
b1.showdetails();
studentts. studenttdetails();


//inheritance

class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

   
class firstClass {
    add() {
        console.log("First Method")
    }
}
class secondClass extends firstClass {
    add() {
        console.log(30 + 40);
    }
}
class thirdClass extends secondClass {
    add() {
        console.log("Last Method")
    }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();student1.greet();

//polymorphism

   
class A {
    area(x, y) {
        console.log(x * y);
    }
}
class B extends A {
    area(a, b) {
        super.area(a, b);
        console.log('Class B')
    }
}
let ob = new B();
let output = ob.area(100, 200);



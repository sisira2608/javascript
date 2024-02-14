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

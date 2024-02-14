let obj= {
    name :"sisi",
    age  : 14,
    department : "dddf",
    address:{
        state:"palakkad",
        phone: 356788989,

    }
}
    console.log(obj);
    console.log(obj.address);
    console.log(obj.address.phone);

    //for in obj
    for(let values in obj){
        console.log(values,obj[values])
    }

    //for of array object string set
    let ar=["sisi","efe","fdff"];
    for(let a of ar){
    console.log(a);
    }